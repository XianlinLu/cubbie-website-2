"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function Motion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-ready");
    // MindMarket uses Locomotive 5 with the default Lenis .1 lerp and wheel multiplier 1.
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -110 },
      prevent: (node) =>
        Boolean(node.closest('[role="dialog"], [data-lenis-prevent]')),
    });
    const pendingReveals = new Set(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    const scrollElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-scroll-speed], [data-scroll-progress]",
      ),
    );
    const lastTranslations = new WeakMap<HTMLElement, number>();
    let metrics: {
      element: HTMLElement;
      start: number;
      end: number;
      speed: number;
      inFold: boolean;
    }[] = [];
    let dirty = true;
    let lastScroll = Number.NaN;
    let frame = 0;

    const measure = () => {
      const viewport = innerHeight;
      metrics = scrollElements.map((element) => {
        const box = element.getBoundingClientRect();
        const top = scrollY + box.top - (lastTranslations.get(element) || 0);
        const inFold = top < viewport;
        const [startOffset = "0", endOffset = "0"] = (
          element.dataset.scrollOffset || "0,0"
        ).split(",");
        const pixels = (value: string) =>
          value.includes("%")
            ? (parseFloat(value) * viewport) / 100
            : parseFloat(value);
        const start = inFold ? 0 : top - viewport + pixels(startOffset);
        const end = Math.max(start + 1, top + box.height - pixels(endOffset));
        return {
          element,
          start,
          end,
          speed: Number(element.dataset.scrollSpeed || 0),
          inFold,
        };
      });
      dirty = false;
      lastScroll = Number.NaN;
    };
    const resize = () => {
      dirty = true;
    };
    const render = (time: number) => {
      lenis.raf(time);
      if (dirty) measure();
      const currentScroll = lenis.scroll;
      if (currentScroll !== lastScroll) {
        lastScroll = currentScroll;
        for (const { element, start, end, speed, inFold } of metrics) {
          const progress = clamp((currentScroll - start) / (end - start));
          element.style.setProperty("--scroll-progress", String(progress));
          if (speed) {
            // Exact Locomotive 5 desktop speed mapping, centered on viewport intersection.
            const translation =
              (inFold ? progress : progress * 2 - 1) * innerHeight * speed * -1;
            element.style.setProperty("--parallax-y", `${translation}px`);
            lastTranslations.set(element, translation);
          }
        }
        for (const element of pendingReveals) {
          const box = element.getBoundingClientRect();
          const offset = element.dataset.revealOffset
            ? innerHeight * Number(element.dataset.revealOffset)
            : 35;
          if (box.top < innerHeight - offset && box.bottom > 0) {
            element.classList.add("revealed");
            pendingReveals.delete(element);
          }
        }
      }
      frame = requestAnimationFrame(render);
    };
    const contentResize = new ResizeObserver(resize);
    contentResize.observe(document.body);
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      contentResize.disconnect();
      lenis.destroy();
      document.documentElement.classList.remove("motion-ready");
      for (const element of scrollElements) {
        element.style.removeProperty("--scroll-progress");
        element.style.removeProperty("--parallax-y");
      }
    };
  }, []);
  return null;
}

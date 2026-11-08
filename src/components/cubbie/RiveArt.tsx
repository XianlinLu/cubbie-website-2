"use client";
import { useEffect, useRef } from "react";
import { ASSETS } from "./shared";

// Sample the original GSAP elastic.out(1, .3) curve for a native Web Animation.
function characterRevealFrames(translateX: number): Keyframe[] {
  return Array.from({ length: 121 }, (_, index) => {
    const t = index / 120;
    const elastic =
      t === 0 || t === 1
        ? t
        : Math.pow(2, -10 * t) * Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) +
          1;
    const horizontal = t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;
    return {
      offset: t,
      transform: `translate(${translateX * (1 - horizontal)}%, ${100 * (1 - elastic)}px) scale(${0.75 + 0.25 * elastic})`,
    };
  });
}

export function RiveArt({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    let disposed = false,
      loading = false,
      visible = false,
      ready = false,
      revealed = false;
    let instance: import("@rive-app/canvas").Rive | undefined;
    let resize: ResizeObserver | undefined;
    const animations: Animation[] = [];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldReveal = !reduced && name !== "pop_up_girl";
    if (shouldReveal) element.style.opacity = "0";
    const reveal = () => {
      if (!ready || !visible || revealed || !shouldReveal) return;
      revealed = true;
      animations.push(
        element.animate(characterRevealFrames(name === "scientist" ? 10 : 0), {
          duration: 1750,
          delay: 150,
          easing: "linear",
          fill: "both",
        }),
        element.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 150,
          delay: 150,
          easing: "ease-out",
          fill: "both",
        }),
      );
    };
    const visibilityObserver = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) {
        instance?.startRendering();
        reveal();
      } else instance?.stopRendering();
    });
    visibilityObserver.observe(element);
    const preloadObserver = new IntersectionObserver(
      async (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || loading) return;
        loading = true;
        preloadObserver.unobserve(element);
        const { Rive, Layout, Fit, Alignment, RuntimeLoader } =
          await import("@rive-app/canvas");
        if (disposed) return;
        RuntimeLoader.setWasmUrl(`${ASSETS}/rive/rive.wasm`);
        instance = new Rive({
          src: `${ASSETS}/rive/${name}.riv`,
          canvas: element,
          autoplay: !reduced,
          layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
          onLoad: () => {
            if (disposed) return;
            ready = true;
            instance?.resizeDrawingSurfaceToCanvas();
            element.dataset.loaded = "true";
            if (!visible) instance?.stopRendering();
            reveal();
          },
        });
        resize = new ResizeObserver(() =>
          instance?.resizeDrawingSurfaceToCanvas(),
        );
        resize.observe(element);
      },
      { rootMargin: "300px" },
    );
    preloadObserver.observe(element);
    return () => {
      disposed = true;
      visibilityObserver.disconnect();
      preloadObserver.disconnect();
      resize?.disconnect();
      animations.forEach((animation) => animation.cancel());
      instance?.cleanup();
      element.style.removeProperty("opacity");
    };
  }, [name]);
  return (
    <div className={`rive-art ${className}`} aria-hidden="true">
      <canvas ref={canvas} />
    </div>
  );
}

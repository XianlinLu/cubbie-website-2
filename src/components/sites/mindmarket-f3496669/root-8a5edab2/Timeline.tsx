"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import { cubbieContent as copy } from "./content";
import { ASSETS, ActionLink } from "./shared";
import { RiveArt } from "./RiveArt";
import { TimelineDecorations } from "./TimelineDecorations";
import "./timeline.css";
import "./decorations.css";
// Original desktop CustomEase: M0,0 C0.952,0.017 0.744,0.69 1,1.
function pathEase(progress: number) {
  const bezier = (t: number, first: number, second: number) =>
    3 * (1 - t) ** 2 * t * first + 3 * (1 - t) * t ** 2 * second + t ** 3;
  let low = 0,
    high = 1;
  for (let i = 0; i < 18; i++) {
    const middle = (low + high) / 2;
    if (bezier(middle, 0.952, 0.744) < progress) low = middle;
    else high = middle;
  }
  return bezier((low + high) / 2, 0.017, 0.69);
}
const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function Timeline() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    const path = el?.querySelector<SVGSVGElement>(".timeline-path");
    if (!el || !path) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = path.getBoundingClientRect();
      // Locomotive data-scroll-offset="-27%,100%": start 127% below the
      // viewport top, finish when the path's bottom reaches the viewport bottom.
      const progress = clamp(
        (innerHeight * 1.27 - box.top) / (box.height + innerHeight * 0.27),
      );
      const time = progress * 1.9;
      const first = 0.05 + 0.95 * pathEase(clamp(time / 0.9));
      const second = clamp((time - 0.9) / 1);
      el.style.setProperty("--path-one", String(1 - first));
      el.style.setProperty("--path-two", String(1 - second));
      el.style.setProperty("--path-two-visible", second > 0 ? "1" : "0");
      el.style.setProperty(
        "--path-shadow",
        String(clamp((time - 0.95) / 0.15)),
      );
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    const resize = new ResizeObserver(scroll);
    resize.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      resize.disconnect();
    };
  }, []);
  return (
    <section
      className="timeline"
      ref={root}
      id="features"
      aria-labelledby="overview-heading"
    >
      <h2
        id="overview-heading"
        className="section-heading timeline-heading content-width reveal"
      >
        {copy.overview.title}
      </h2>
      <div className="timeline-stage">
        <svg
          className="timeline-path"
          viewBox="0 0 1944.2 6151.5"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="route-shadow"
              gradientTransform="matrix(1 0 0 -1 -242 5807.4)"
              gradientUnits="userSpaceOnUse"
              x1="1020.4"
              y1="2766.3"
              x2="1550.5"
              y2="3624.5"
            >
              <stop stopColor="#8ed462" />
              <stop offset=".3" stopColor="#378e43" />
              <stop offset=".7" stopColor="#439745" />
              <stop offset="1" stopColor="#8ed462" />
            </linearGradient>
          </defs>
          <path
            className="path-one"
            pathLength="1000"
            d="M1085 250c-868 126.5-961 907-29.5 1453S1397 3353 733 3318s-606-718-53.6-808"
          />
          <path
            className="shadow-path"
            pathLength="1000"
            d="M1055.5 1703C1987 2249 1397 3353 733 3318"
          />
          <path
            className="path-two"
            pathLength="1000"
            d="M679.3 2510c552.3-90 1689.3 743.4 475.6 1689-985 767.5-234 1313-234 1702.5"
          />
        </svg>
        <TimelineDecorations />
        {copy.overview.items.map((item, i) => (
          <article
            key={item.title}
            className={`timeline-card timeline-card-${i} reveal`}
            data-scroll-speed="0.1"
            data-reveal-offset="0.2"
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <ActionLink
              link={item.link}
              tone={["red", "yellow", "pink", "blue"][i]}
            />
          </article>
        ))}
        <p className="timeline-note section-copy reveal">
          {copy.overview.note}
        </p>
        <div
          className="timeline-garden"
          aria-hidden="true"
          data-scroll-progress
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <img
              key={number}
              className={`garden-cloud garden-cloud-${number}`}
              src={`${ASSETS}/timeline/timeline_end_cloud_${number}.svg`}
              alt=""
            />
          ))}
          <img
            className="garden-back"
            data-scroll-speed="-0.15"
            src={`${ASSETS}/timeline/timeline-end-green-back.svg`}
            alt=""
          />
          <div className="garden-player">
            <RiveArt name="basketball_player" />
          </div>
          <div className="garden-rider">
            <RiveArt name="unicycle" />
          </div>
          <div className="garden-lookout">
            <RiveArt name="binoculars" />
          </div>
          <img
            className="garden-middle"
            data-scroll-speed="-0.075"
            src={`${ASSETS}/timeline/timeline-end-green-middle.svg`}
            alt=""
          />
          <img
            className="garden-front"
            src={`${ASSETS}/timeline/timeline-end-green-front.svg`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

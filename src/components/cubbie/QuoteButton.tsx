"use client";
import { useEffect, useRef } from "react";
import { ASSETS, sourceHref } from "./shared";
import type { ContentLink } from "./content";

export function QuoteButton({ link }: { link: ContentLink }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const button = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    let instance: import("@rive-app/canvas").Rive | undefined;
    import("@rive-app/canvas").then(({ Rive, RuntimeLoader }) => {
      if (disposed || !canvas.current) return;
      RuntimeLoader.setWasmUrl(`${ASSETS}/rive/rive.wasm`);
      instance = new Rive({
        src: `${ASSETS}/rive/cursor.riv`,
        canvas: canvas.current,
        stateMachines: "State Machine 1",
        autoplay: true,
        autoBind: true,
        onLoad: () => {
          if (disposed || !instance) return;
          instance.resizeDrawingSurfaceToCanvas();
          const smile = instance
            .stateMachineInputs("State Machine 1")
            ?.find((x) => x.name === "isSmiling");
          const model = instance.viewModelInstance;
          const x = model?.number("posx");
          const y = model?.number("posy");
          if (x) x.value = -34;
          if (y) y.value = -15;
          let frame = 0;
          const move = (e: MouseEvent) => {
            cancelAnimationFrame(frame);
            const rect = canvas.current?.getBoundingClientRect();
            if (!rect) return;
            if (x) x.value = -90 + ((e.clientX - rect.left) / rect.width) * 110;
            if (y) y.value = -90 + ((e.clientY - rect.top) / rect.height) * 110;
          };
          const enter = () => {
            if (smile) smile.value = true;
          };
          const leave = () => {
            if (smile) smile.value = false;
          };
          const reset = () => {
            if (!x || !y) return;
            x.value += (-34 - x.value) * 0.1;
            y.value += (-15 - y.value) * 0.1;
            if (Math.abs(x.value + 34) > 0.5 || Math.abs(y.value + 15) > 0.5)
              frame = requestAnimationFrame(reset);
          };
          const anchor = button.current;
          window.addEventListener("mousemove", move);
          document.addEventListener("mouseleave", reset);
          anchor?.addEventListener("mouseenter", enter);
          anchor?.addEventListener("mouseleave", leave);
          anchor?.addEventListener("focus", enter);
          anchor?.addEventListener("blur", leave);
          const resize = new ResizeObserver(() =>
            instance?.resizeDrawingSurfaceToCanvas(),
          );
          if (canvas.current) resize.observe(canvas.current);
          cleanup = () => {
            cancelAnimationFrame(frame);
            resize.disconnect();
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseleave", reset);
            anchor?.removeEventListener("mouseenter", enter);
            anchor?.removeEventListener("mouseleave", leave);
            anchor?.removeEventListener("focus", enter);
            anchor?.removeEventListener("blur", leave);
          };
        },
      });
    });
    return () => {
      disposed = true;
      cleanup();
      instance?.cleanup();
    };
  }, []);
  return (
    <a className="quote-button" ref={button} href={sourceHref(link.href)}>
      <span className="quote-label">{link.text}</span>
      <span className="quote-icon" aria-hidden="true">
        <canvas ref={canvas} width={40} height={40} />
      </span>
    </a>
  );
}

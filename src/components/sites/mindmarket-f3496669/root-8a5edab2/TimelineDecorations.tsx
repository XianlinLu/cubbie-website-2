/* Original illustration assets and desktop placement from MindMarket. */
/* eslint-disable @next/next/no-img-element */
import { RiveArt } from "./RiveArt";
import { ASSETS } from "./shared";
export function TimelineDecorations() {
  return (
    <div className="timeline-decorations" aria-hidden="true">
      <div className="decoration decor-0">
        <RiveArt name="climber" />
      </div>
      <div className="decoration decor-1">
        <RiveArt name="shrug" />
      </div>
      <div className="decoration decor-2">
        <RiveArt name="composer" />
      </div>
      <div className="decoration decor-3">
        <RiveArt name="trumpeter_1" />
      </div>
      <div className="decoration decor-4">
        <RiveArt name="trumpeter_2" />
      </div>
      <div className="decoration decor-5">
        <RiveArt name="gamer" />
      </div>
      <div className="decoration decor-6">
        <RiveArt name="scientist" />
      </div>
      <div className="decoration decor-7">
        <RiveArt name="soccer" />
      </div>
      <img
        className="decoration decor-8"
        data-scroll-speed="0.05"
        src={`${ASSETS}/timeline/clock.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-9"
        src={`${ASSETS}/timeline/clock-shape.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-11"
        data-scroll-speed="0.02"
        src={`${ASSETS}/timeline/folder.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-12"
        src={`${ASSETS}/timeline/folder-shape.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-13"
        data-scroll-progress
        src={`${ASSETS}/timeline/plane-1.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-14"
        data-scroll-progress
        src={`${ASSETS}/timeline/plane-2.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-15"
        src={`${ASSETS}/timeline/plane-trace.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-16"
        data-scroll-speed="0.05"
        src={`${ASSETS}/timeline/sheet.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-17"
        data-scroll-speed="0.15"
        src={`${ASSETS}/timeline/composer-shape.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-18"
        src={`${ASSETS}/timeline/composer-shape-2.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-19"
        data-scroll-speed="0.05"
        src={`${ASSETS}/timeline/music-note-1.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-20"
        data-scroll-speed="0.08"
        src={`${ASSETS}/timeline/music-note-2.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-21"
        data-scroll-speed="0.15"
        src={`${ASSETS}/timeline/music-note-3.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-22"
        src={`${ASSETS}/timeline/trumper-shape.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-23"
        src={`${ASSETS}/timeline/gamer-shape.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-24"
        data-scroll-speed="0.15"
        src={`${ASSETS}/timeline/joystick.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-25"
        src={`${ASSETS}/timeline/joystick-shape.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-26"
        data-scroll-speed="0.15"
        src={`${ASSETS}/timeline/soccer-circle.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-27"
        src={`${ASSETS}/timeline/soccer-shape-1.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-28"
        data-scroll-speed="0.07"
        src={`${ASSETS}/timeline/soccer-shape-2.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-29"
        src={`${ASSETS}/timeline/soccer-shape-3.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-30"
        src={`${ASSETS}/timeline/soccer-shape-4.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-31"
        src={`${ASSETS}/timeline/soccer-trace.svg`}
        alt=""
        loading="lazy"
      />
      <img
        className="decoration decor-32"
        data-scroll-speed="0.1"
        src={`${ASSETS}/timeline/soccer-circle-2.svg`}
        alt=""
        loading="lazy"
      />
    </div>
  );
}

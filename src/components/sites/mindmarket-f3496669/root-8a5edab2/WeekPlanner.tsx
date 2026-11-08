"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cubbieContent } from "./content";
import { RiveArt } from "./RiveArt";
import { ActionLink } from "./shared";
import "./week.css";

export function WeekPlanner() {
  const [activeDay, setActiveDay] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const instanceId = useId();
  const { week } = cubbieContent;
  const headingId = `${instanceId}-heading`;

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % week.days.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + week.days.length) % week.days.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = week.days.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveDay(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      className="week-section"
      id="school-week"
      aria-labelledby={headingId}
    >
      <div className="content-width">
        <h2 className="section-heading week-heading reveal" id={headingId}>
          {week.title}
        </h2>

        <div className="week-tabs" role="tablist" aria-labelledby={headingId}>
          {week.days.map((day, index) => (
            <button
              className="week-tab"
              key={day.title}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${instanceId}-tab-${index}`}
              aria-controls={`${instanceId}-panel-${index}`}
              aria-selected={activeDay === index}
              tabIndex={activeDay === index ? 0 : -1}
              onClick={() => setActiveDay(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {day.title}
            </button>
          ))}
        </div>

        <div className="week-stage">
          {week.days.map((day, index) => (
            <div
              className="week-panel"
              key={day.title}
              id={`${instanceId}-panel-${index}`}
              role="tabpanel"
              aria-labelledby={`${instanceId}-tab-${index}`}
              tabIndex={0}
              hidden={activeDay !== index}
            >
              <div className="week-panel-copy">
                <p className="week-count">{day.count}</p>
                <h3 className="week-day">{day.title}</h3>
                <p className="week-description">{day.body}</p>
              </div>
            </div>
          ))}
          <div className="week-illustration" aria-hidden="true">
            <RiveArt name="gamer" />
          </div>
        </div>

        <div className="week-link">
          <ActionLink link={week.link} />
        </div>
      </div>
    </section>
  );
}

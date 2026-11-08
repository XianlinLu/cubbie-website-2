/* eslint-disable @next/next/no-img-element */
import { cubbieContent as copy } from "./content";
import { ASSETS, ActionLink } from "./shared";
import { RiveArt } from "./RiveArt";
import "./sections.css";
export function CanvasSection() {
  return (
    <section className="canvas-section" id="integrations">
      <div className="canvas-character">
        <RiveArt name="pop_up_girl" />
      </div>
      <div className="canvas-copy content-width reveal">
        <h2>{copy.canvas.title}</h2>
        <p className="section-copy">{copy.canvas.body}</p>
        <ActionLink link={copy.canvas.link} />
      </div>
      <div className="canvas-prompts content-width reveal">
        <p>{copy.canvas.promptLabel}</p>
        <ul>
          {copy.canvas.prompts.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function CourseworkSection() {
  return (
    <section className="coursework-section content-width" id="coursework">
      <div className="coursework-intro">
        <h2 className="section-heading">{copy.coursework.title}</h2>
        <p className="section-copy">{copy.coursework.body}</p>
        <ActionLink link={copy.coursework.link} tone="pink" />
        <div className="coursework-character">
          <RiveArt name="composer" />
        </div>
      </div>
      <ol className="coursework-steps">
        {copy.coursework.steps.map((step, i) => (
          <li className={`step-card step-tone-${i} reveal`} key={step.title}>
            <span className="step-number" aria-hidden="true">
              0{i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
const illustrations = ["folder.svg", "sheet.svg", "clock.svg", "joystick.svg"];
export function AdminSection() {
  return (
    <section className="admin-section" id="school-admin">
      <div className="content-width">
        <div className="admin-heading reveal">
          <h2 className="section-heading">{copy.emailCalendar.title}</h2>
          <p className="section-copy">{copy.emailCalendar.body}</p>
        </div>
        <div className="admin-cards">
          {copy.emailCalendar.items.map((item, i) => (
            <article
              className={`admin-card admin-card-${i} reveal`}
              key={item.title}
            >
              <div className="admin-art">
                <img
                  src={`${ASSETS}/timeline/${illustrations[i]}`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p className="section-copy">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <ActionLink link={copy.emailCalendar.link} />
      </div>
    </section>
  );
}
export function HowItWorks() {
  return (
    <section className="how-section content-width" id="how-it-works">
      <h2 className="section-heading reveal">{copy.howItWorks.title}</h2>
      <ol>
        {copy.howItWorks.steps.map((step, i) => (
          <li className="reveal" key={step.title}>
            <span className="how-number" aria-hidden="true">
              {i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
export function ControlSection() {
  return (
    <section className="control-section" id="your-control">
      <div className="content-width">
        <h2 className="section-heading reveal">{copy.control.title}</h2>
        <div className="control-cards">
          {copy.control.items.map((item, i) => (
            <article
              className={`control-card control-card-${i} reveal`}
              key={item.title}
            >
              <span className="control-icon" aria-hidden="true">
                {["↗", "✓", "∞"][i]}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="control-note">{copy.control.note}</p>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="faq-section content-width" id="questions">
      <h2 className="section-heading reveal">{copy.faq.title}</h2>
      <div className="faq-list">
        {copy.faq.items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
import { cubbieContent as copy } from "./content";
import { ASSETS, ActionLink } from "./shared";
import { RiveArt } from "./RiveArt";
import "./hero.css";
export function Hero() {
  return (
    <>
      <section
        className="hero"
        id="top"
        aria-labelledby="hero-title"
        data-scroll-progress
      >
        <div className="hero-backdrop">
          <div className="hero-copy">
            <div className="hero-copy-inner">
              <h1 id="hero-title">
                <span>Student Planner </span>
                <span>Powered by Your </span>
                <span>AI School Assistant</span>
              </h1>
              <p className="hero-tagline">{copy.hero.eyebrow}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="introduction" id="main-content">
        <div
          className="intro-story"
          data-scroll-progress
          data-scroll-offset="0,100%"
        >
          <div className="hero-illustration-wrap" aria-hidden="true">
            <div className="hero-illustration-sticky">
              <div className="hero-illustration">
                <img
                  src={`${ASSETS}/timeline/hero-background-illustration.svg`}
                  alt=""
                />
                <RiveArt name="hero_animation" />
                <svg
                  className="hero-illustration-path"
                  viewBox="0 0 824.5 590.8"
                  aria-hidden="true"
                >
                  <path
                    fill="none"
                    stroke="#8ed462"
                    strokeLinecap="round"
                    strokeWidth="500"
                    d="M549.4,251c-48.6,7.1-94.8,16.2-138.5,27.3-52.2,13.2-100.9,29.1-146,47.4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-width intro-grid">
            <div className="intro-lead reveal">
              <p>{copy.hero.body}</p>
              <div className="intro-actions">
                {copy.hero.links.map((link) => (
                  <ActionLink key={link.href} link={link} />
                ))}
              </div>
              <p className="intro-support">{copy.hero.support}</p>
            </div>
          </div>
          <div className="hero-illustration-ghost" aria-hidden="true" />
        </div>
        <div className="content-width problem-grid reveal">
          <h2 className="section-heading">{copy.problem.title}</h2>
          <div>
            {copy.problem.paragraphs.map((paragraph) => (
              <p className="section-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

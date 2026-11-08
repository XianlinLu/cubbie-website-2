"use client";

import Image from "next/image";
import { cubbieContent } from "./content";
import { ActionLink, ASSETS, sourceHref } from "./shared";
import "./footer.css";

export function Footer() {
  const { closing, footer } = cubbieContent;

  function openCookiePreferences() {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  }

  return (
    <footer className="footer-section" id="footer">
      <div className="content-width">
        <div className="footer-closing reveal">
          <h2 className="footer-heading">{closing.title}</h2>
          <p className="footer-description">{closing.body}</p>
          <ActionLink link={closing.link} />
        </div>

        <nav className="footer-navigation" aria-label="Footer">
          {footer.groups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3 className="footer-group-title">{group.title}</h3>
              <ul className="footer-links">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a className="footer-link" href={sourceHref(link.href)}>
                      {link.text}
                    </a>
                  </li>
                ))}
                {group.title === "Cubbie" && (
                  <li>
                    <button
                      type="button"
                      className="footer-link footer-cookie-button"
                      onClick={openCookiePreferences}
                    >
                      Cookie Preferences
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer-bottom">
          <a className="footer-brand" href="#top" aria-label="Cubbie home">
            <Image
              src={`${ASSETS}/cubbie-logo.png`}
              alt="Cubbie"
              width={559}
              height={103}
              className="footer-logo"
            />
          </a>
          <p className="footer-trademarks">{footer.trademarks}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { cubbieContent } from "./content";
import { ASSETS, sourceHref } from "./shared";
import "./navigation.css";
import { QuoteButton } from "./QuoteButton";

export function Navigation() {
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [pinnedGroup, setPinnedGroup] = useState<number | null>(null);
  const navigation = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const { groups, cta } = cubbieContent.navigation;

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navigation.current?.contains(event.target)
      ) {
        setOpenGroup(null);
        setPinnedGroup(null);
      }
    }
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || openGroup === null) return;
      triggers.current[openGroup]?.focus();
      setOpenGroup(null);
      setPinnedGroup(null);
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [openGroup]);

  return (
    <header
      className="nav-header"
      ref={navigation}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpenGroup(null);
          setPinnedGroup(null);
        }
      }}
    >
      <div className="nav-island">
        <a className="nav-brand" href="#top" aria-label="Cubbie home">
          {/* The supplied logo is deliberately preserved as a single image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ASSETS}/cubbie-logo.png`}
            width={559}
            height={103}
            alt="Cubbie"
          />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {groups.map((group, index) => {
            const isOpen = openGroup === index;
            return (
              <div
                className="nav-group"
                key={group.title}
                onMouseEnter={() => {
                  if (pinnedGroup !== index) setPinnedGroup(null);
                  setOpenGroup(index);
                }}
                onMouseLeave={() => {
                  if (pinnedGroup !== index) setOpenGroup(null);
                }}
              >
                <button
                  className="nav-trigger"
                  ref={(node) => {
                    triggers.current[index] = node;
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`nav-dropdown-${index}`}
                  onClick={() => {
                    const nextGroup = pinnedGroup === index ? null : index;
                    setPinnedGroup(nextGroup);
                    setOpenGroup(nextGroup);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setOpenGroup(index);
                      setPinnedGroup(index);
                      requestAnimationFrame(() =>
                        navigation.current
                          ?.querySelector<HTMLAnchorElement>(
                            `#nav-dropdown-${index} a`,
                          )
                          ?.focus(),
                      );
                    }
                  }}
                >
                  {group.title}
                  <svg
                    className="nav-chevron"
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                  >
                    <path d="m3 4.5 3 3 3-3" />
                  </svg>
                </button>
                <div
                  className="nav-dropdown"
                  id={`nav-dropdown-${index}`}
                  data-open={isOpen}
                  aria-hidden={!isOpen}
                >
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={sourceHref(link.href)}
                          tabIndex={isOpen ? 0 : -1}
                          onClick={() => {
                            setOpenGroup(null);
                            setPinnedGroup(null);
                          }}
                        >
                          <span>{link.text}</span>
                          <span className="nav-link-arrow" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="nav-cta">
        <QuoteButton link={cta} />
      </div>
    </header>
  );
}

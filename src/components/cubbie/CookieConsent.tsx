"use client";
import { useEffect, useRef, useState } from "react";
import "./cookie.css";
const KEY = "cubbie-preview-cookie-preferences";
function readPreferences() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}
export function CookieConsent() {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const open = () => {
      try {
        const prefs = JSON.parse(readPreferences() || "{}");
        setAnalytics(Boolean(prefs.analytics));
        setMarketing(Boolean(prefs.marketing));
      } catch {}
      dialog.current?.showModal();
    };
    window.addEventListener("open-cookie-preferences", open);
    return () => window.removeEventListener("open-cookie-preferences", open);
  }, []);
  const save = (a: boolean, m: boolean) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ analytics: a, marketing: m }));
    } catch {}
    window.dispatchEvent(new Event("cookie-preferences-changed"));
    setAnalytics(a);
    setMarketing(m);
    dialog.current?.close();
  };
  return (
    <>
      <dialog
        className="cookie-dialog"
        ref={dialog}
        aria-labelledby="preferences-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="cookie-close"
          aria-label="Close preferences"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <h2 id="preferences-title">Cookie preferences</h2>
        <p>
          Manage your cookie preferences. You can change your choices at any
          time.
        </p>
        <label>
          <span>Essential cookies</span>
          <input type="checkbox" checked disabled />
        </label>
        <label>
          <span>Analytics cookies</span>
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
        </label>
        <label>
          <span>Marketing cookies</span>
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
        </label>
        <button
          className="cookie-save"
          onClick={() => save(analytics, marketing)}
        >
          Save preferences
        </button>
      </dialog>
    </>
  );
}

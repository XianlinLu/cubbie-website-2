# CookieConsent specification

Original bottom-right cream cookie notice width408px with title17px and body14px, 3 buttons accept/reject/settings, privacy link. Settings native modal dialog with essential/analytics/marketing options; stores choice locally, no tracking scripts. Escape/outside click closes; footer opens preferences.

Desktop only. Colors, fonts and controls use shared globals.css. No mobile variants. Content source: content.ts. All original local visual assets documented in assets.json.

## 2026-11-08 requested removal
Removed the automatic We value your privacy banner entirely, regardless of storage state. The existing explicit footer Cookie Preferences action still opens its settings dialog. No trackers are added and all Cubbie homepage copy is unchanged.

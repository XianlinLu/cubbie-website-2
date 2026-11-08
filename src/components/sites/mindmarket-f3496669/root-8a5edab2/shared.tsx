import type { ContentLink } from "./content";
export const ASSETS = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sites/mindmarket-f3496669/root-8a5edab2`;
export function sourceHref(href: string) {
  if (href.startsWith("#") || href.startsWith("https:")) return href;
  if (href === "/") return "#top";
  return `https://cubbie.ai${href}`;
}
export function ActionLink({
  link,
  tone = "",
}: {
  link: ContentLink;
  tone?: string;
}) {
  return (
    <a className={`action-link ${tone}`} href={sourceHref(link.href)}>
      <span>{link.text}</span>
      <span className="action-arrow" aria-hidden="true">
        <svg viewBox="0 0 20 20">
          <path d="m8 5 5 5-5 5" />
        </svg>
      </span>
    </a>
  );
}

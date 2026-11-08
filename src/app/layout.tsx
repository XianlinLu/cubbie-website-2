import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const inter = localFont({
  src: [
    {
      path: "../../public/sites/mindmarket-f3496669/root-8a5edab2/fonts/inter-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../../public/sites/mindmarket-f3496669/root-8a5edab2/fonts/inter-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../../public/sites/mindmarket-f3496669/root-8a5edab2/fonts/inter-latin-700-normal.woff2",
      weight: "700",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Student Planner & AI School Assistant | Cubbie",
  description:
    "Plan schoolwork with Cubbie, a digital student planner you text. It brings Canvas assignments, course materials, Gmail and Google Calendar into one conversation.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

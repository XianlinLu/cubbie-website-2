/* eslint-disable @next/next/no-img-element */
import { ASSETS } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/shared";
import { Navigation } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/Navigation";
import { Hero } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/Hero";
import { Timeline } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/Timeline";
import {
  CanvasSection,
  CourseworkSection,
  AdminSection,
  HowItWorks,
  ControlSection,
  FAQ,
} from "@/components/sites/mindmarket-f3496669/root-8a5edab2/ContentSections";
import { WeekPlanner } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/WeekPlanner";
import { Footer } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/Footer";
import { CookieConsent } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/CookieConsent";
import { Motion } from "@/components/sites/mindmarket-f3496669/root-8a5edab2/Motion";
export default function Home() {
  return (
    <>
      <div className="site-loader" aria-hidden="true">
        <img src={`${ASSETS}/cubbie-logo.png`} alt="" />
      </div>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <div className="site-shell">
        <main>
          <Hero />
          <Timeline />
          <CanvasSection />
          <CourseworkSection />
          <AdminSection />
          <WeekPlanner />
          <HowItWorks />
          <ControlSection />
          <FAQ />
        </main>
        <Footer />
      </div>
      <CookieConsent />
      <Motion />
    </>
  );
}

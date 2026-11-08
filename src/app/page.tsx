/* eslint-disable @next/next/no-img-element */
import { ASSETS } from "@/components/cubbie/shared";
import { Navigation } from "@/components/cubbie/Navigation";
import { Hero } from "@/components/cubbie/Hero";
import { Timeline } from "@/components/cubbie/Timeline";
import {
  CanvasSection,
  CourseworkSection,
  AdminSection,
  HowItWorks,
  ControlSection,
  FAQ,
} from "@/components/cubbie/ContentSections";
import { WeekPlanner } from "@/components/cubbie/WeekPlanner";
import { Footer } from "@/components/cubbie/Footer";
import { CookieConsent } from "@/components/cubbie/CookieConsent";
import { Motion } from "@/components/cubbie/Motion";
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

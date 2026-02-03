import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TravelCategories } from "@/components/travel-categories";
import { FeaturedTrips } from "@/components/featured-trips";
import { HowItWorks } from "@/components/how-it-works";
import { DestinationsGrid } from "@/components/destinations-grid";
import { StatsSection } from "@/components/stats-section";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSection />
        <TravelCategories />
        <FeaturedTrips />
        <HowItWorks />
        <DestinationsGrid />
        <StatsSection />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

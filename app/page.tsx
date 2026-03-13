import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { DestinationsGrid } from "@/components/destinations-grid";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Awayna | Viajes en Grupo Auténticos para Aventureros 25-45',
  description: 'Descubre el mundo con gente como tú. Awayna organiza viajes en grupo auténticos para jóvenes aventureros. Tailandia, Vietnam, Filipinas, Japón, Islandia, Costa Rica. Grupos reducidos, experiencias reales.',
  keywords: 'viajes en grupo, viajes aventura, tour groups, travel experiences, destinos exóticos, viajes colaborativos',
  openGraph: {
    title: 'Awayna | Viajes en Grupo Auténticos',
    description: 'Viaja con gente como tú. Grupos reducidos de 25-45 años, experiencias reales y conexiones genuinas.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSection />
        <DestinationsGrid />
        <AboutSection />
      </main>
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
    </div>
  );
}

import { notFound } from "next/navigation";
import {
  getDestinationBySlug,
  getAllDestinationSlugs,
  getLocalizedDestination,
} from "@/lib/destinations-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DestinationHero } from "@/components/destination/destination-hero";
import { DestinationOverview } from "@/components/destination/destination-overview";
import { DestinationItinerary } from "@/components/destination/destination-itinerary";
import { DestinationIncludes } from "@/components/destination/destination-includes";
import { DestinationFondoComun } from "@/components/destination/destination-fondo-comun";
import { DestinationPracticalInfo } from "@/components/destination/destination-practical-info";
import { DestinationDates } from "@/components/destination/destination-dates";
import { DestinationComponents } from "@/components/destination/destination-components";
import { DestinationComingSoon } from "@/components/destination/destination-coming-soon";
import { CookieBanner } from "@/components/cookie-banner";

export async function generateStaticParams() {
  const slugs = getAllDestinationSlugs();
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const raw = getDestinationBySlug(slug);

  if (!raw) {
    return {
      title: "Destination not found | Awayna",
      description: "The destination you are looking for does not exist.",
    };
  }

  const destination = getLocalizedDestination(raw, locale);

  return {
    title: `Viaje a ${destination.name} | Awayna - ${destination.duration} días desde ${destination.price}€`,
    description: `${destination.tagline}. Viaje de ${destination.duration} días desde ${destination.price}€. Descubre ${destination.name} con Awayna.`,
    keywords: `viaje a ${destination.name}, tour ${destination.name}, viajes ${destination.name}, experiencias ${destination.name}`,
    openGraph: {
      title: `Viaje a ${destination.name} | Awayna`,
      description: `${destination.tagline}. Descubre ${destination.name} con un grupo de viajeros como tú.`,
      type: "website",
      images: [
        {
          url: destination?.heroImage || "/images/otros/hero-adventure.jpg",
          width: 1200,
          height: 630,
          alt: `Viaje a ${destination.name}`,
        },
      ],
    },
    alternates: {
      canonical: `https://awayna.com/destinos/${slug}`,
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const raw = getDestinationBySlug(slug);

  if (!raw) {
    notFound();
  }

  const destination = getLocalizedDestination(raw, locale);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <DestinationHero destination={destination} />
        {destination.comingSoon ? (
          <DestinationComingSoon destination={destination} />
        ) : (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <DestinationOverview destination={destination} />
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <DestinationComponents components={destination.components} />
                <DestinationItinerary destination={destination} />
                <DestinationIncludes destination={destination} />
                <DestinationFondoComun />
              </div>
              <div className="lg:col-span-4">
                <DestinationDates destination={destination} />
              </div>
            </div>
          </div>
        )}
        {!destination.comingSoon && (
          <DestinationPracticalInfo destination={destination} />
        )}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

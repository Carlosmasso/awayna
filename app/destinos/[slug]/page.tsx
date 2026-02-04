import { notFound } from "next/navigation"
import { getDestinationBySlug, getAllDestinationSlugs } from "@/lib/destinations-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationHero } from "@/components/destination/destination-hero"
import { DestinationOverview } from "@/components/destination/destination-overview"
import { DestinationItinerary } from "@/components/destination/destination-itinerary"
import { DestinationIncludes } from "@/components/destination/destination-includes"
import { DestinationPracticalInfo } from "@/components/destination/destination-practical-info"
import { DestinationDates } from "@/components/destination/destination-dates"
import { DestinationFaqs } from "@/components/destination/destination-faqs"
import { CookieBanner } from "@/components/cookie-banner"
import { Star } from "lucide-react"

export async function generateStaticParams() {
  const slugs = getAllDestinationSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)
  
  if (!destination) {
    return { title: "Destino no encontrado | Awayna" }
  }

  return {
    title: `${destination.name} | Awayna Viajes en Grupo`,
    description: `${destination.tagline}. Viaje de ${destination.duration} desde ${destination.price}€. Descubre ${destination.name} con Awayna.`,
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <DestinationHero destination={destination} />
        <DestinationOverview destination={destination} />
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Componentes del viaje
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {destination.components.map((component, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{component.name}</span>
                    <StarRating rating={component.rating} />
                  </div>
                ))}
              </div>
            </div>
            <DestinationItinerary destination={destination} />
            <DestinationIncludes destination={destination} />
          </div>  
          <div className="lg:col-span-6">
            <DestinationDates destination={destination} />
          </div>  
        </div>  
        <DestinationPracticalInfo destination={destination} />
        <DestinationFaqs destination={destination} />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

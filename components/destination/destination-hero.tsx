import Image from "next/image"
import Link from "next/link"
import { Star, Clock, MapPin, ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Destination } from "@/lib/destinations-data"

interface DestinationHeroProps {
  destination: Destination
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  const discount = destination.originalPrice 
    ? Math.round((1 - destination.price / destination.originalPrice) * 100) 
    : 0

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full">
      {/* Background Image */}
      <Image
        src={destination.heroImage || "/placeholder.svg"}
        alt={destination.name}
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

      {/* Back Button */}
      <div className="absolute top-24 left-4 sm:left-8 z-10">
        <Link 
          href="/#viajes"
          className="flex items-center gap-1 text-background/90 hover:text-background transition-colors text-sm font-medium"
        >
          <ChevronLeft className="h-4 w-4" />
          Volver a viajes
        </Link>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-background/20 text-background border-background/30 backdrop-blur-sm">
                <MapPin className="h-3 w-3 mr-1" />
                {destination.continent}
              </Badge>
              {/* {discount > 0 && (
                <Badge className="bg-primary text-primary-foreground">
                  -{discount}% dto.
                </Badge>
              )} */}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-3 tracking-tight text-balance">
              {destination.name}
            </h1>
            <p className="text-xl sm:text-2xl text-background/90 font-medium">
              {destination.tagline}
            </p>

            {/* Meta Info */}
            {/* <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-background/90">
              <div className="flex items-center gap-1.5">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{destination.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-medium">{destination.rating}</span>
                <span className="text-background/70">({destination.reviewCount} opiniones)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-background/70">Desde</span>
                <span className="text-3xl font-bold text-background">{destination.price}€</span>
                {destination.originalPrice && (
                  <span className="text-lg text-background/60 line-through">{destination.originalPrice}€</span>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

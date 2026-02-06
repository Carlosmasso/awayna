import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Clock, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TripCardProps {
  image: string
  destination: string
  slug?: string
  title: string
  duration: string
  price: number
  originalPrice?: number
  rating: number
  spots: number
  totalSpots?: number
  dates: string
  tags?: string[]
}

export function TripCard({
  image,
  destination,
  slug,
  title,
  duration,
  price,
  originalPrice,
  rating,
  spots,
  totalSpots = 16,
  dates,
  tags = [],
}: TripCardProps) {
  const destinationSlug = slug || destination.toLowerCase().replace(/\s+/g, "-")
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0
  const spotsPercentage = (spots / totalSpots) * 100
  const isLowSpots = spots <= 4

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {discount > 0 && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              -{discount}%
            </Badge>
          )}
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/90 text-foreground">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="text-xs font-semibold text-foreground">{rating}</span>
        </div>

        {/* Destination */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-medium text-background/80 uppercase tracking-wider">
            {destination}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-card-foreground leading-snug mb-3 line-clamp-2 text-pretty">
          {title}
        </h3>

        {/* Trip Details */}
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{dates}</span>
          </div>
        </div>

        {/* Spots Available */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <Users className={`h-4 w-4 ${isLowSpots ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-medium ${isLowSpots ? "text-primary" : "text-foreground"}`}>
                {isLowSpots ? `Ultimas ${spots} plazas!` : `${spots} plazas disponibles`}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{totalSpots - spots} reservadas</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all ${isLowSpots ? "bg-primary" : "bg-secondary"}`}
              style={{ width: `${100 - spotsPercentage}%` }}
            />
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-3 border-t border-border/50">
          <div>
            <p className="text-xs text-muted-foreground">Desde</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">{price}€</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}€</span>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10 group/btn" asChild>
            <Link href={`/destinos/${destinationSlug}`}>
              Ver viaje
              <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

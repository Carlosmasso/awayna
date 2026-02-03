"use client"

import { useState } from "react"
import { TripCard } from "./trip-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const trips = [
  {
    id: 1,
    image: "/images/trip-filipinas.jpg",
    destination: "Filipinas",
    slug: "filipinas",
    title: "Filipinas Paradisiaca: El Nido, Coron y las playas mas bonitas del mundo",
    duration: "14 dias",
    price: 1397,
    originalPrice: 1597,
    rating: 4.9,
    spots: 3,
    totalSpots: 16,
    dates: "Mar - May",
    tags: ["Top Ventas"],
  },
  {
    id: 2,
    image: "/images/trip-vietnam.jpg",
    destination: "Vietnam",
    slug: "vietnam",
    title: "Vietnam 360: De Hanoi a Ho Chi Minh entre arrozales y bahias",
    duration: "13 dias",
    price: 1299,
    rating: 4.8,
    spots: 4,
    totalSpots: 16,
    dates: "Mar - Nov",
    tags: ["Cultura"],
  },
  {
    id: 3,
    image: "/images/trip-thailand.jpg",
    destination: "Tailandia",
    slug: "tailandia",
    title: "Tailandia Experience: Bangkok, Chiang Mai y las islas paradisiacas",
    duration: "12 dias",
    price: 1197,
    originalPrice: 1397,
    rating: 4.9,
    spots: 2,
    totalSpots: 14,
    dates: "Mar - Abr",
    tags: ["Top Ventas"],
  },
  {
    id: 4,
    image: "/images/trip-japan.jpg",
    destination: "Japon",
    slug: "japon",
    title: "Japon 360: Tokio, Kioto, Hiroshima y los templos ancestrales",
    duration: "11 dias",
    price: 1759,
    originalPrice: 1979,
    rating: 4.8,
    spots: 8,
    totalSpots: 14,
    dates: "Abr - May",
    tags: ["Cultura"],
  },
  {
    id: 5,
    image: "/images/trip-iceland.jpg",
    destination: "Islandia",
    slug: "islandia",
    title: "Islandia 360: Aurora boreal, cascadas y paisajes de otro planeta",
    duration: "8 dias",
    price: 1469,
    originalPrice: 1699,
    rating: 4.9,
    spots: 5,
    totalSpots: 12,
    dates: "Feb - Mar",
    tags: ["Naturaleza"],
  },
  {
    id: 6,
    image: "/images/trip-costarica.jpg",
    destination: "Costa Rica",
    slug: "costa-rica",
    title: "Costa Rica Pura Vida: Volcanes, selva y playas del Caribe",
    duration: "10 dias",
    price: 1549,
    rating: 4.8,
    spots: 7,
    totalSpots: 14,
    dates: "Todo el ano",
    tags: ["Aventura"],
  },
]

const filters = ["Todos", "Asia", "Europa", "America"]

export function FeaturedTrips() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  return (
    <section id="viajes" className="py-20 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
              Viajes destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Descubre nuestros destinos mas populares y vive experiencias que recordaras para siempre.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 group bg-transparent">
            Ver todos los viajes
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Trip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
      </div>
    </section>
  )
}

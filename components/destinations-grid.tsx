"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    name: "Filipinas",
    slug: "filipinas",
    trips: 4,
    image: "/images/filipinas/trip-filipinas.jpg",
    featured: true,
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    trips: 3,
    image: "/images/vietnam/trip-vietnam.jpg",
    featured: true,
  },
  {
    name: "Tailandia",
    slug: "tailandia",
    trips: 5,
    image: "/images/thailand/trip-thailand.jpg",
    featured: true,
  },
  {
    name: "Japon",
    slug: "japon",
    trips: 3,
    image: "/images/japan/japonportada.jpeg",
    featured: true,
  },
  {
    name: "Islandia",
    slug: "islandia",
    trips: 2,
    image: "/images/iceland/trip-iceland.jpg",
    featured: false,
  },
  {
    name: "Costa Rica",
    slug: "costa-rica",
    trips: 2,
    image: "/images/costarica/trip-costarica.jpg",
    featured: false,
  },
]

export function DestinationsGrid() {
  useEffect(() => {
    // Verificar si hay un hash en la URL cuando el componente se monta
    if (window.location.hash === '#viajes') {
      const element = document.getElementById('viajes')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [])

  return (
    <section id="viajes" className="py-20 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            ¿Dónde nos vamos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Viajes en grupo a destinos auténticos, colaborando con la gente local para empaparnos de su cultura y tradiciones.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              href={`/destinos/${destination.slug}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-muted"
            >
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-semibold text-background text-lg">{destination.name}</h3>
                <p className="text-sm text-background/80">{destination.trips} viajes</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-primary-foreground font-medium">
                  <span>Ver viajes</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

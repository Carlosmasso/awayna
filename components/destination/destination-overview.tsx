import { Check } from "lucide-react"
import Image from "next/image"
import type { Destination } from "@/lib/destinations-data"

interface DestinationOverviewProps {
  destination: Destination
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  // Use destination images for gallery, fallback to placeholder
  const galleryImages = destination.images?.slice(0, 4) || [
    destination.image,
    destination.image,
    destination.image,
    destination.image,
  ]

  console.log(galleryImages, destination)

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Description (8 cols) */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Sobre este viaje
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {destination.description}
            </p>
            
            {/* Highlights */}
            {/* <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Lo que viviremos
              </h3>
              <ul className="space-y-4">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Right: Image Gallery (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Galería
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className={`relative rounded-xl overflow-hidden bg-muted ${
                      index === 0 ? "col-span-2 h-48" : "h-24"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${destination.name} - Imagen ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

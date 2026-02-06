import Image from "next/image"
import type { Destination } from "@/lib/destinations-data"

interface DestinationOverviewProps {
  destination: Destination
}



export function DestinationOverview({ destination }: DestinationOverviewProps) {
  // Use destination gallery images for gallery, fallback to placeholder
  const galleryImages = destination.galleryImages?.slice(0, 4) || [
    destination.image,
    destination.image,
    destination.image,
    destination.image,
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Description (8 cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              otro de prueba Sobre este viaje
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {destination.description}
            </p>

            {/* Components with ratings */}
            {/* <div className="bg-secondary/30 rounded-2xl p-8">
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
            </div> */}
          </div>

          {/* Right: Image Gallery (4 cols) */}
          <div className="lg:col-span-7">
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

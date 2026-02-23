"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Destination } from "@/lib/destinations-data"

interface DestinationComingSoonProps {
  destination: Destination
}

export function DestinationComingSoon({ destination }: DestinationComingSoonProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Coming soon banner */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            Próximamente
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Fechas disponibles próximamente
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Estamos terminando de decidir la mejor opción para vosotros, pronto tendremos fechas, itinerarios y precios.
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            Si tienes cualquier duda, <span className="text-primary font-medium">¡Contáctanos!</span>
          </p>
          <Link href="/contacto">
            <Button size="lg" className="gap-2 cursor-pointer">
              <Mail className="h-4 w-4" />
              Contactar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery section */}
      {destination.galleryImages.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 grid-rows-[auto] gap-2 sm:gap-3">
              {destination.galleryImages.map((img, i) => {
                // Pattern: 0=big (2col 2row), 1=tall (1col 2row), 2,3=small, 4=wide (3col), 5,6,7=small, 8=big...
                const layout = i % 9
                let cls = ""
                if (layout === 0) cls = "col-span-2 row-span-2 aspect-square"
                else if (layout === 1) cls = "col-span-2 row-span-1 aspect-[2/1]"
                else if (layout === 2) cls = "col-span-1 row-span-1 aspect-square"
                else if (layout === 3) cls = "col-span-1 row-span-1 aspect-square"
                else if (layout === 4) cls = "col-span-2 row-span-1 aspect-[2/1]"
                else if (layout === 5) cls = "col-span-1 row-span-2 aspect-[1/2]"
                else if (layout === 6) cls = "col-span-1 row-span-1 aspect-square"
                else if (layout === 7) cls = "col-span-2 row-span-1 aspect-[2/1]"
                else cls = "col-span-1 row-span-1 aspect-square"
                return (
                  <div
                    key={i}
                    className={`relative rounded-xl overflow-hidden ${cls}`}
                  >
                    <Image
                      src={img}
                      alt={`${destination.name} ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

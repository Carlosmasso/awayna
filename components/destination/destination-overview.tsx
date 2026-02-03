import { Check } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationOverviewProps {
  destination: Destination
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Description */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Sobre este viaje
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2">
            <div className="bg-secondary/30 rounded-2xl p-6 sm:p-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

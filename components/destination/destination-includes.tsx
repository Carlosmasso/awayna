import { Check, X } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationIncludesProps {
  destination: Destination
}

export function DestinationIncludes({ destination }: DestinationIncludesProps) {
  return (
    <section className="py-8 sm:py-16">
      <div>
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Que incluye el viaje
          </h2>
          <p className="text-muted-foreground">
            Todo lo que necesitas para disfrutar sin preocupaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Included */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              Incluido
            </h3>
            <ul className="space-y-3">
              {destination.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X className="h-5 w-5 text-muted-foreground" />
              </div>
              No incluido
            </h3>
            <ul className="space-y-3">
              {destination.notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

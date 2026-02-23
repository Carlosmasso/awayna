import { Check, X, Plane, BedDouble, UtensilsCrossed, Bus, Shield, Users, Map, Waves, Ticket, Backpack, Anchor, Coffee, Camera, TreePine, Bike, CreditCard, Wallet, Heart } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"

interface DestinationIncludesProps {
  destination: Destination
}

function getItemIcon(text: string) {
  const lower = text.toLowerCase()
  if (lower.includes("vuelo") || lower.includes("aéreo") || lower.includes("aereo")) return Plane
  if (lower.includes("alojamiento") || lower.includes("hotel") || lower.includes("noche") || lower.includes("habitaci")) return BedDouble
  if (lower.includes("desayuno") || lower.includes("almuerzo") || lower.includes("cena") || lower.includes("gastron") || lower.includes("comida") || lower.includes("bebida")) return UtensilsCrossed
  if (lower.includes("transporte") || lower.includes("traslado") || lower.includes("transfer") || lower.includes("bus") || lower.includes("tren")) return Bus
  if (lower.includes("seguro")) return Shield
  if (lower.includes("coordinador") || lower.includes("guía") || lower.includes("guia") || lower.includes("grupo")) return Users
  if (lower.includes("snorkel") || lower.includes("buceo") || lower.includes("kayak") || lower.includes("barca") || lower.includes("barco") || lower.includes("island hopping") || lower.includes("navegaci")) return Waves
  if (lower.includes("entrada") || lower.includes("ticket") || lower.includes("parque")) return Ticket
  if (lower.includes("mochila") || lower.includes("equipaje")) return Backpack
  if (lower.includes("trekking") || lower.includes("caminata") || lower.includes("senderismo")) return TreePine
  if (lower.includes("bicicleta") || lower.includes("moto")) return Bike
  if (lower.includes("foto") || lower.includes("cámara") || lower.includes("camara")) return Camera
  if (lower.includes("café") || lower.includes("cafe") || lower.includes("té ") || lower.includes("ceremonia")) return Coffee
  if (lower.includes("tour") || lower.includes("excursión") || lower.includes("excursion") || lower.includes("visita")) return Map
  if (lower.includes("propina")) return Wallet
  if (lower.includes("gasto") || lower.includes("personal") || lower.includes("fondo")) return CreditCard
  if (lower.includes("actividad") || lower.includes("opcional")) return Heart
  return null
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
              {destination.included.map((item, index) => {
                const Icon = getItemIcon(item)
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                      {Icon ? <Icon className="h-4 w-4 text-primary" /> : <Check className="h-4 w-4 text-primary" />}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                )
              })}
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
              {destination.notIncluded.map((item, index) => {
                const Icon = getItemIcon(item)
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                      {Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : <X className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

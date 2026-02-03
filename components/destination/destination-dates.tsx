"use client"

import { useState } from "react"
import { Calendar, Users, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Destination } from "@/lib/destinations-data"

interface DestinationDatesProps {
  destination: Destination
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })
}

export function DestinationDates({ destination }: DestinationDatesProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  console.log({destination})
  const handleReserve = () => {
    if (!selectedDate) return
    
    const openModal = () => {
      if (typeof window !== "undefined" && window.openBookingModal) {
        window.openBookingModal({
          destination: destination.name,
          dateId: selectedDate
        })
      } else {
        // Retry después de 100ms si no está disponible
        setTimeout(openModal, 100)
      }
    }
    
    openModal()
  }

  return (
    <section className="py-16 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Fechas disponibles
          </h2>
          <p className="text-muted-foreground">
            Elige la fecha que mejor te venga. Recuerda que los grupos son reducidos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {destination.availableDates.map((tripDate) => {
            const isSelected = selectedDate === tripDate.id
            const isLowSpots = tripDate.spots <= 4
            const isSoldOut = tripDate.spots === 0
            const spotsPercentage = ((tripDate.totalSpots - tripDate.spots) / tripDate.totalSpots) * 100

            return (
              <button
                key={tripDate.id}
                onClick={() => !isSoldOut && setSelectedDate(tripDate.id)}
                disabled={isSoldOut}
                className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                  isSelected
                    ? "border-primary bg-primary/5"
                    : isSoldOut
                    ? "border-border/50 bg-muted/50 opacity-60 cursor-not-allowed"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}

                {/* Dates */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold text-foreground">
                    {formatDate(tripDate.startDate)} - {formatDate(tripDate.endDate)}
                  </span>
                </div>

                {/* Spots */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Users className={`h-4 w-4 ${isLowSpots ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-sm font-medium ${isLowSpots ? "text-primary" : "text-foreground"}`}>
                        {isSoldOut ? "Completo" : isLowSpots ? `Ultimas ${tripDate.spots} plazas!` : `${tripDate.spots} plazas`}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${isSoldOut ? "bg-muted-foreground" : isLowSpots ? "bg-primary" : "bg-secondary"}`}
                      style={{ width: `${spotsPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{tripDate.price}€</span>
                  {tripDate.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{tripDate.originalPrice}€</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            disabled={!selectedDate}
            onClick={handleReserve}
          >
            {selectedDate ? "Reservar plaza" : "Selecciona una fecha"}
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Reserva por solo 200€ y paga el resto 30 dias antes
          </p>
        </div>
      </div>
    </section>
  )
}

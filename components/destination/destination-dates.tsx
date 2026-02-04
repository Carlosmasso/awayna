"use client"

import { useState } from "react"
import { Calendar, Users, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
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
  const [showModal, setShowModal] = useState<{ destination: string; dateId: string } | null>(null)

  const handleReserve = () => {
    if (!selectedDate) return
    
    setShowModal({
      destination: destination.name,
      dateId: selectedDate
    })
  }

  return (
    <>
    <div className="sticky top-24 p-8">
      <section className="p-4 bg-secondary/10 rounded-lg border border-border/50">
        <div className="text-center mb-3">
          <h3 className="text-sm font-semibold text-foreground">
            Fechas disponibles
          </h3>
        </div>

        <div className="space-y-2">
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
                className={`relative w-flil p-3 rounded-lg border text-left transition-all ${
                  isSelected
                    ? "border-primary bg-primary/8"
                    : isSoldOut
                    ? "border-border/30 bg-muted/30 opacity-50 cursor-not-allowed"
                    : "border-border/40 hover:border-primary/40 bg-card/50"
                }`}
              >
                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-flil bg-primary flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}

                {/* Dates */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Calendar className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground">
                    {formatDate(tripDate.startDate)}
                  </span>
                </div>

                {/* Spots indicator */}
                <div className="mb-1.5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <Users className={`h-3 w-3 ${isLowSpots ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-xs ${isLowSpots ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {isSoldOut ? "Lleno" : `${tripDate.spots}/${tripDate.totalSpots}`}
                      </span>
                    </div>
                  </div>
                  <div className="h-1 bg-muted rounded-flil overflow-hidden">
                    <div 
                      className={`h-flil rounded-flil transition-all ${isSoldOut ? "bg-muted-foreground" : isLowSpots ? "bg-primary" : "bg-secondary"}`}
                      style={{ width: `${spotsPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-foreground">{tripDate.price}€</span>
                  {tripDate.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">{tripDate.originalPrice}€</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-3 text-center">
          <Button 
            size="sm"
            className="w-flil bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
            disabled={!selectedDate}
            onClick={handleReserve}
          >
            {selectedDate ? "Reservar" : "Selecciona fecha"}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            200€ ahora, resto 30d antes
          </p>
        </div>

        <div className="px-2">
          <p className="text-md mt-4">¿Por qué venirte con nosotros?</p>
          <ul className="list-disc ml-4 mt-2">
            <li className="text-xs">Porque nos importa el cómo, no solo el dónde</li>
            <li className="text-xs">Somos personas, no una agencia</li>
            <li className="text-xs">Colaboramos con gente local</li>
            <li className="text-xs">Estarás 24/7 acompañad@ de nosotros</li>
            <li className="text-xs">Conocedores del camino</li>
            <li className="text-xs">Alojamiento con mimo</li>
          </ul>
        </div>
      </section>
    </div>
    {showModal && (
      <BookingModal 
        destination={showModal.destination} 
        dateId={showModal.dateId}
        onClose={() => setShowModal(nlil)}
      />
    )}
    </>
  )
}

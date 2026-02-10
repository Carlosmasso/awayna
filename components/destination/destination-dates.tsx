"use client";

import { useState } from "react";
import { Calendar, Users, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import type { Destination } from "@/lib/destinations-data";

interface DestinationDatesProps {
  destination: Destination;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function DestinationDates({ destination }: DestinationDatesProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<{
    destination: string;
    dateId: string;
  } | null>(null);

  const handleReserve = () => {
    if (!selectedDate) return;

    setShowModal({
      destination: destination.name,
      dateId: selectedDate,
    });
  };

  return (
    <>
      <div className="sticky top-24 lg:top-28">
        <section className="py-3 sm:py-6 bg-secondary/10 rounded-xl border border-border/50 shadow-md">
          <div className="px-3 sm:px-6">
            <div className="text-center mb-2 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Fechas disponibles
            </h3>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            {destination.availableDates.map((tripDate) => {
              const isSelected = selectedDate === tripDate.id;
              const isLowSpots = tripDate.spots <= 4;
              const isSoldOut = tripDate.spots === 0;
              const occupancyPercentage = ((tripDate.totalSpots - tripDate.spots) / tripDate.totalSpots) * 100;

              return (
                <button
                  key={tripDate.id}
                  onClick={() => !isSoldOut && setSelectedDate(tripDate.id)}
                  disabled={isSoldOut}
                  className={`relative w-full p-2.5 sm:p-3 rounded-md border text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : isSoldOut
                        ? "border-border/30 bg-muted/30 opacity-50 cursor-not-allowed"
                        : "border-border/30 hover:border-primary/40 bg-card"
                  }`}
                >
                  {/* Selected indicator */}
                  {isSelected && (
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-primary-foreground" />
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {formatDate(tripDate.startDate)}
                    </span>
                    {isLowSpots && !isSoldOut && (
                      <Flame className="h-4 w-4 text-primary" />
                    )}
                  </div>

                  {/* Occupancy Bar */}
                  <div className="mb-2">
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          isSoldOut
                            ? "bg-muted-foreground"
                            : isLowSpots
                            ? "bg-primary"
                            : "bg-secondary"
                        }`}
                        style={{ width: `${occupancyPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {tripDate.price}€
                      {tripDate.originalPrice && (
                        <span className="ml-1.5 line-through opacity-60">
                          {tripDate.originalPrice}€
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm ${isLowSpots ? "text-primary font-semibold" : "text-muted-foreground"}`}
                    >
                      {isSoldOut ? "Completo" : `${tripDate.spots} plazas`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

            {/* CTA */}
            <div className="mt-2.5 sm:mt-4 text-center">
              <Button
                size="default"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base font-semibold h-10 sm:h-11"
              disabled={!selectedDate}
              onClick={handleReserve}
            >
              {selectedDate ? "Reservar ahora" : "Selecciona una fecha"}
            </Button>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
              Solo 200€ de señal • Resto 30 días antes
            </p>
          </div>

            <div className="mt-2.5 sm:mt-5 p-2.5 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="font-bold text-base sm:text-lg lg:text-xl text-primary mb-1.5 sm:mb-3">
              ¿Por qué viajar con Awayna?
            </p>
            <ul>
              <li className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>Nos importa el cómo, no solo el dónde</span>
              </li>
              <li className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>Somos personas, no una agencia</span>
              </li>
              <li className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>Colaboramos con gente local</span>
              </li>
              <li className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>Acompañamiento 24/7 durante el viaje</span>
              </li>
              <li className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>Conocedores del destino</span>
              </li>
              <li className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>Alojamientos cuidadosamente seleccionados</span>
              </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {showModal && (
        <BookingModal
          destination={showModal.destination}
          dateId={showModal.dateId}
          onClose={() => setShowModal(null)}
        />
      )}
    </>
  );
}

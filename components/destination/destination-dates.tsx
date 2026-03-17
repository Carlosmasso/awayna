"use client";

import { useState } from "react";
import { Calendar, Check, Flame, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { Link } from "@/i18n/navigation";
import type { Destination, TripDate } from "@/lib/destinations-data";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("destPage");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<{
    destination: Destination;
    tripDate: TripDate;
  } | null>(null);

  const handleReserve = () => {
    if (!selectedDate) return;
    const tripDate = destination.availableDates.find((d) => d.id === selectedDate);
    if (!tripDate) return;
    setShowModal({ destination, tripDate });
  };

  return (
    <>
      <div className="sticky top-24 lg:top-28">
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">

          {/* Header */}
          <div className="px-5 pt-5 pb-4 border-b border-border/60">
            <h3 className="text-lg font-bold text-foreground">{t("datesTitle")}</h3>
          </div>

          {/* Dates */}
          <div className="px-5 py-4 space-y-2">
            {destination.availableDates.map((tripDate) => {
              const isSelected = selectedDate === tripDate.id;
              const isLowSpots = tripDate.spots <= 4;
              const isSoldOut = tripDate.spots === 0;
              const occupancyPercentage =
                ((tripDate.totalSpots - tripDate.spots) / tripDate.totalSpots) * 100;

              return (
                <button
                  key={tripDate.id}
                  onClick={() => !isSoldOut && setSelectedDate(tripDate.id)}
                  disabled={isSoldOut}
                  className={`relative w-full p-3.5 rounded-xl border text-left transition-all duration-150 ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-sm"
                      : isSoldOut
                        ? "border-border/40 bg-muted/40 opacity-50 cursor-not-allowed"
                        : "border-border/50 hover:border-primary/50 hover:bg-secondary/10 bg-background"
                  }`}
                >
                  {/* Selected check */}
                  {isSelected && (
                    <div className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                  )}

                  {/* Date row */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                    <span className="text-sm font-semibold text-foreground">
                      {formatDate(tripDate.startDate)}
                    </span>
                    {isLowSpots && !isSoldOut && (
                      <Flame className="h-3.5 w-3.5 text-primary ml-auto shrink-0" />
                    )}
                  </div>

                  {/* Occupancy bar */}
                  <div className="h-1 bg-muted rounded-full overflow-hidden mb-2.5">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isSoldOut ? "bg-muted-foreground" : isLowSpots ? "bg-primary" : "bg-secondary"
                      }`}
                      style={{ width: `${occupancyPercentage}%` }}
                    />
                  </div>

                  {/* Price + spots */}
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-bold text-foreground">{tripDate.price}€</span>
                      {tripDate.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          {tripDate.originalPrice}€
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isSoldOut
                          ? "text-muted-foreground"
                          : isLowSpots
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {isSoldOut ? t("soldOut") : t("spotsLeft", { spots: tripDate.spots })}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="px-5 pb-5 space-y-3">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              disabled={!selectedDate}
              onClick={handleReserve}
            >
              {selectedDate ? t("reserveNow") : t("selectDate")}
            </Button>

            <div className="text-center">
              <Link
                href="/politica-de-cancelacion"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {t("cancellationLink")}
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Why Awayna */}
          <div className="mx-5 mb-5 p-4 bg-secondary/20 rounded-xl border border-secondary/40">
            <p className="text-sm font-bold text-foreground mb-3">{t("whyAwayna")}</p>
            <ul className="space-y-1.5">
              {(["reason1", "reason2", "reason3", "reason4", "reason5", "reason6"] as const).map((key) => (
                <li key={key} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary font-bold mt-px shrink-0">•</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {showModal && (
        <BookingModal
          destination={showModal.destination}
          tripDate={showModal.tripDate}
          onClose={() => setShowModal(null)}
        />
      )}
    </>
  );
}


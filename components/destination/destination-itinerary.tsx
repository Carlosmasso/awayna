"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Destination } from "@/lib/destinations-data"

interface DestinationItineraryProps {
  destination: Destination
}

export function DestinationItinerary({ destination }: DestinationItineraryProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Itinerario dia a dia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un viaje cuidadosamente disenado para que vivas experiencias unicas cada dia
          </p>
        </div>

        <div className="mx-auto">
          {destination.itinerary.map((day, index) => {
            const isExpanded = expandedDay === day.day
            const isFirst = index === 0
            const isLast = index === destination.itinerary.length - 1

            return (
              <div key={day.day} className="relative">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-border" />
                )}

                <div className="flex gap-4">
                  {/* Day number circle */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    isExpanded ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}>
                    {day.day}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                    <button
                      onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            Dia {day.day}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mt-1">
                            {day.title}
                          </h3>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-3 p-5 rounded-xl bg-secondary/30 border border-border/50">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {day.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary" className="bg-background">
                              <MapPin className="h-3 w-3 mr-1" />
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

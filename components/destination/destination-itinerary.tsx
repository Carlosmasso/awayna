"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronDown, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Destination } from "@/lib/destinations-data"

interface DestinationItineraryProps {
  destination: Destination
}

function getDayKey(day: number | number[]): number {
  return Array.isArray(day) ? day[0] : day
}

function getDayLabel(day: number | number[]): string {
  if (Array.isArray(day)) {
    if (day.length === 1) return `Día ${day[0]}`
    return `Días ${day[0]}-${day[day.length - 1]}`
  }
  return `Día ${day}`
}

export function DestinationItinerary({ destination }: DestinationItineraryProps) {
  const firstDayKey = getDayKey(destination.itinerary[0]?.day ?? 1)
  const [expandedDay, setExpandedDay] = useState<number | null>(firstDayKey)
  const dayRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const handleDayClick = (dayKey: number) => {
    const isCurrentlyExpanded = expandedDay === dayKey
    setExpandedDay(isCurrentlyExpanded ? null : dayKey)
    
    if (!isCurrentlyExpanded) {
      setTimeout(() => {
        dayRefs.current[dayKey]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }, 100)
    }
  }

  return (
    <section className="py-8 sm:py-16 bg-background">
      <div>
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Itinerario día a día
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un viaje cuidadosamente diseñado para que vivas experiencias únicas cada día
          </p>
        </div>

        <div className="mx-auto">
          {destination.itinerary.map((day, index) => {
            const dayKey = getDayKey(day.day)
            const isExpanded = expandedDay === dayKey
            const isLast = index === destination.itinerary.length - 1

            return (
              <div 
                key={dayKey} 
                className="relative scroll-mt-24"
                ref={(el) => { dayRefs.current[dayKey] = el }}
              >
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-border" />
                )}

                <div className="flex gap-4">
                  {/* Day number circle */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    isExpanded ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}>
                    {Array.isArray(day.day) ? `${day.day[0]}-${day.day[day.day.length - 1]}` : day.day}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                    <button
                      onClick={() => handleDayClick(dayKey)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {getDayLabel(day.day)}
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
                        <div className={`flex gap-5 ${day.image ? "flex-col sm:flex-row" : ""}`}>
                          {/* Image if available */}
                          {day.image && (
                            <div className="relative flex-shrink-0 w-full sm:w-72 h-64 sm:h-auto sm:min-h-64 rounded-lg overflow-hidden">
                              <Image
                                src={day.image}
                                alt={`${day.title} - Día ${day.day}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 288px"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed mb-4"
                              dangerouslySetInnerHTML={{ __html: day.description.join("<br/>") }}
                            />
                            <div className="flex flex-wrap gap-2">
                              {day.highlights.map((highlight, i) => (
                                <Badge key={i} variant="secondary" className="bg-background">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
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

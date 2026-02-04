"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeroSection() {
  const [destination, setDestination] = useState("Cualquier destino")
  const [date, setDate] = useState("Cuando sea")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-adventure.jpg"
          alt="Grupo de viajeros en una aventura"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          {/* <span className="text-sm font-medium text-background">Mas de 15.000 aventureros ya viajan con nosotros</span> */}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-tight tracking-tight text-balance mb-6">
          Prepara la mochila,<br />
          <span className="text-primary">los amigos los ponemos nosotros</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-background/90 max-w-2xl mx-auto mb-10 text-pretty">
          Descubre el mundo con viajeros como tu, de entre 25 y 45 anos. 
          Grupos reducidos, experiencias unicas y recuerdos para toda la vida.
        </p>

        {/* Trust Badges */}
        {/* <div className="flex flex-wrap justify-center gap-6 mt-10 text-background/80">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">4.9 en Google</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">+500 viajes realizados</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">+50 destinos</span>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

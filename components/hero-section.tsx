"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HeroSection() {
  const [destination, setDestination] = useState("Cualquier destino");
  const [date, setDate] = useState("Cuando sea");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/awaynacabecera.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-tight tracking-tight text-balance mb-6">
          Tú eliges el destino,
          <br />
          <span className="text-primary">nosotros el plan</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-background/90 max-w-2xl mx-auto mb-10 text-pretty">
          Sitios increíbles con gente que suma.
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
  );
}

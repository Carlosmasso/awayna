"use client"

import { Sparkles, Sun, Mountain, Palmtree, PartyPopper, Snowflake } from "lucide-react"

const categories = [
  {
    icon: Sparkles,
    name: "Aurora Boreal",
    description: "Vive la magia del Norte",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Sun,
    name: "Verano 2026",
    description: "No es demasiado pronto",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Mountain,
    name: "Aventura",
    description: "Trekking y naturaleza",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    icon: Palmtree,
    name: "Playa",
    description: "Sol, arena y relax",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: PartyPopper,
    name: "Puentes 2026",
    description: "Escapadas perfectas",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Snowflake,
    name: "Invierno",
    description: "Nieve y paisajes blancos",
    color: "bg-blue-500/10 text-blue-600",
  },
]

export function TravelCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
            Encuentra tu tipo de viaje
          </h2>
          <p className="text-muted-foreground">
            Tenemos aventuras para todos los gustos
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{category.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

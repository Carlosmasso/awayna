const stats = [
  { value: "15.000+", label: "Aventureros" },
  { value: "500+", label: "Viajes realizados" },
  { value: "50+", label: "Destinos" },
  { value: "4.9", label: "Valoracion media" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

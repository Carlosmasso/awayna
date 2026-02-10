'use client'

import { Star } from 'lucide-react'

interface Component {
  name: string
  rating: number
}

interface DestinationComponentsProps {
  components: Component[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.min(Math.max(rating - i, 0), 1)
        return (
          <div key={i} className="relative w-4 h-4">
            <Star className="w-4 h-4 text-muted-foreground" fill="currentColor" />
            <div
              className="absolute top-0 left-0 h-4 overflow-hidden"
              style={{ width: `${fillPercentage * 100}%` }}
            >
              <Star className="w-4 h-4 text-primary" fill="currentColor" />
            </div>
          </div>
        )
      })}
      <span className="text-xs text-muted-foreground ml-1">{rating.toFixed(1)}</span>
    </div>
  )
}

export function DestinationComponents({ components }: DestinationComponentsProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
          ¿Es de mi rollo?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {components.map((component, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-foreground font-medium">{component.name}</span>
              <StarRating rating={component.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Laura Martinez",
    age: 28,
    trip: "Tailandia Experience",
    rating: 5,
    text: "Mi primer viaje con Awayna ha sido INCREIBLE. Iba con miedo de viajar sola pero desde el primer momento el grupo se convirtio en familia. Nuestro coordinador David fue un 10, todo perfectamente organizado. Ya estoy planeando el siguiente!",
    avatar: "LM",
  },
  {
    id: 2,
    name: "Carlos Fernandez",
    age: 32,
    trip: "Islandia 360",
    rating: 5,
    text: "Ver la aurora boreal con gente increible ha sido uno de los mejores momentos de mi vida. La organizacion impecable y el grupo genial. Repetire seguro con otro destino.",
    avatar: "CF",
  },
  {
    id: 3,
    name: "Ana Garcia",
    age: 30,
    trip: "Japon 360",
    rating: 5,
    text: "Japon era un sueno y lo he vivido de la mejor manera posible. El coordinador conocia todos los rincones secretos, la comida fue espectacular y el grupo... ahora son mis amigos de verdad.",
    avatar: "AG",
  },
  {
    id: 4,
    name: "Pablo Rodriguez",
    age: 35,
    trip: "Marruecos Express",
    rating: 5,
    text: "Dormir en el desierto bajo las estrellas con gente que acababa de conocer pero que sentia como amigos de toda la vida. Eso es Awayna. Una experiencia transformadora.",
    avatar: "PR",
  },
  {
    id: 5,
    name: "Maria Lopez",
    age: 27,
    trip: "Peru Ancestral",
    rating: 5,
    text: "Machu Picchu al amanecer, la montana de 7 colores, y risas sin parar con el mejor grupo. No tengo palabras para describir lo que se siente. Simplemente GRACIAS.",
    avatar: "ML",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">de mas de 5.000 resenas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Que dicen nuestros viajeros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de aventureros ya han vivido la experiencia Awayna. Estas son sus historias.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Cards */}
          <div className="flex items-center justify-center gap-4">
            {/* Navigation - Previous */}
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex shrink-0 h-12 w-12 rounded-full bg-transparent"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Main Card */}
            <div className="w-full max-w-2xl">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />

                {/* Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                    {testimonials[currentIndex].avatar}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-card-foreground leading-relaxed mb-6 text-pretty">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}, {testimonials[currentIndex].age} anos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].trip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Next */}
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex shrink-0 h-12 w-12 rounded-full bg-transparent"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-transparent" onClick={goToPrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-transparent" onClick={goToNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

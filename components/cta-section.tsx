import { ArrowRight, Users, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-4 text-balance">
              Unete a la tribu de aventureros
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
              Forma parte de nuestra comunidad exclusiva. Se el primero en conocer nuevos destinos, 
              ofertas especiales y conecta con viajeros de todo el mundo.
            </p>
            
            {/* Email Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button className="bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-xl group">
                Unirme
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70 mt-4">
              +15.000 aventureros ya forman parte de la tribu
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Comunidad</h3>
              <p className="text-sm text-primary-foreground/80">Conecta con viajeros afines</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 mb-4">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Seguridad</h3>
              <p className="text-sm text-primary-foreground/80">Viaja con total confianza</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 mb-4">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Flexibilidad</h3>
              <p className="text-sm text-primary-foreground/80">Cancela gratis hasta 31 dias antes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

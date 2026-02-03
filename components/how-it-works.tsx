import Image from "next/image"
import { Users, Compass, Home, Utensils, MapPin, Heart } from "lucide-react"

const philosophyPoints = [
  {
    icon: Compass,
    title: "Viajeros, no turistas",
    description: "No hacemos tours tipicos ni visitamos trampas para turistas. Buscamos los rincones autenticos que solo conocen los locales.",
  },
  {
    icon: Home,
    title: "Vivir como un local",
    description: "Nos alojamos en barrios reales, comemos donde comen ellos y nos movemos como se mueven. Nada de burbujas turisticas.",
  },
  {
    icon: Users,
    title: "Grupos reducidos",
    description: "Maximo 14 personas de 25 a 45 anos. Lo suficientemente pequeno para ser agiles y conectar de verdad, grande para pasarlo increible.",
  },
  {
    icon: Utensils,
    title: "Experiencias autenticas",
    description: "Cenar en casa de una familia local, aprender a cocinar con una abuela vietnamita, pescar con un pescador en Filipinas.",
  },
  {
    icon: MapPin,
    title: "Flexibilidad real",
    description: "Tenemos un itinerario, pero si el grupo quiere quedarse un rato mas en ese bar escondido o explorar ese mercado, lo hacemos.",
  },
  {
    icon: Heart,
    title: "Conexiones genuinas",
    description: "Los mejores recuerdos no son los monumentos, son las personas. Tanto los locales que conoceras como tu grupo de viaje.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Nuestra filosofia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Como es viajar con nosotros
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Awayna nacio de dos mochilas gastadas y miles de kilometros recorridos. Sus fundadores, Pablo y Carlos, 
                pasaron anos viajando por el mundo mientras trabajaban en remoto, descubriendo que la mejor forma de 
                conocer un lugar es vivirlo como un local.
              </p>
              <p>
                Aprendieron que las mejores experiencias no estan en las guias turisticas. Estan en esa cena improvisada 
                con una familia tailandesa, en ese bar escondido que te recomienda el taxista, en perderte por callejones 
                sin nombre y acabar encontrando algo magico.
              </p>
              <p className="text-foreground font-medium">
                Esa es la experiencia que queremos compartir contigo. No somos una agencia de viajes tradicional. 
                Somos viajeros que organizan viajes para otros viajeros.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/founders-adventure.jpg"
                alt="Fundadores de Awayna viajando"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg max-w-xs">
              <p className="text-sm text-muted-foreground italic">
                "La diferencia entre un turista y un viajero es que el turista piensa en volver a casa desde que llega, 
                y el viajero puede que no vuelva nunca."
              </p>
              <p className="text-xs text-primary font-medium mt-2">- Paul Theroux</p>
            </div>
          </div>
        </div>

        {/* Philosophy Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyPoints.map((point) => (
            <div key={point.title} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Traveler vs Tourist Comparison */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-10">Turista vs Viajero Awayna</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg">X</span>
                </div>
                <h4 className="font-semibold text-muted-foreground">Turista tipico</h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 mt-1">-</span>
                  <span>Hoteles de cadena en zonas turisticas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 mt-1">-</span>
                  <span>Restaurantes con menu en 5 idiomas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 mt-1">-</span>
                  <span>Itinerarios rigidos y prisas constantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 mt-1">-</span>
                  <span>Grupos de 40+ personas con banderin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 mt-1">-</span>
                  <span>Fotos en los mismos sitios que todo el mundo</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">Viajero Awayna</h4>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Alojamientos con encanto en barrios locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Comida callejera y mercados autenticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Flexibilidad para improvisar y descubrir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Grupos de max 14 personas afines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Experiencias unicas que no salen en Instagram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

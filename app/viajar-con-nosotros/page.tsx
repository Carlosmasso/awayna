import Image from "next/image"
import Link from "next/link"
import { Users, Compass, Home, Utensils, MapPin, Heart, ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cómo es Viajar con Awayna | Filosofía de Viajes Auténticos",
  description: "Descubre cómo es viajar con Awayna. Somos viajeros, no turistas. Grupos reducidos, experiencias auténticas, conexiones genuinas. Vivir como un local, no como turista.",
  keywords: 'como viajar con awayna, filosofia viajes, experiencias autenticas, viajes locales, grupos reducidos',
  openGraph: {
    title: 'Cómo es Viajar con Awayna',
    description: 'Somos viajeros, no turistas. Descubre una nueva forma de viajar con Awayna.',
    type: 'website',
  },
}

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

const experiences = [
  "Cenas en casas de familias locales",
  "Clases de cocina tradicional",
  "Trekkings fuera de ruta con guias locales",
  "Noches en alojamientos unicos (casas flotantes, cabanas en la selva...)",
  "Visitas a mercados autenticos al amanecer",
  "Encuentros con artesanos y emprendedores locales",
  "Tiempo libre para explorar a tu ritmo",
  "Fiestas y celebraciones con el grupo",
]

export default function ViajarConNosotros() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/otros/founders-adventure.jpg"
              alt="Viajando con Awayna"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-6">
                Nuestra filosofia
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background tracking-tight mb-6 text-balance">
                Como es viajar con nosotros
              </h1>
              <p className="text-xl text-background/80 leading-relaxed mb-8">
                No somos una agencia de viajes. Somos viajeros que organizan viajes para otros viajeros. 
                Bienvenido a una nueva forma de descubrir el mundo.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/#viajes">
                  Ver proximos viajes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
                  De donde venimos
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Awayna nacio de dos mochilas gastadas y miles de kilometros recorridos. Pablo y Carlos, 
                    sus fundadores, pasaron anos viajando por el mundo mientras trabajaban en remoto desde 
                    cafeterias en Bali, coworkings en Chiang Mai y apartamentos compartidos en Lisboa.
                  </p>
                  <p>
                    Descubrieron que la mejor forma de conocer un lugar no es siguiendo una guia turistica, 
                    sino viviendo como viven los locales. Comiendo en el puesto callejero donde come el taxista, 
                    alojandose en el barrio donde viven las familias, y dejandose llevar por las recomendaciones 
                    de la gente que conocian por el camino.
                  </p>
                  <p>
                    Aprendieron que las mejores experiencias no se planifican, se encuentran. Estan en esa 
                    cena improvisada con una familia tailandesa, en ese bar escondido que te recomienda 
                    el dueno del hostal, en perderte por callejones sin nombre y acabar encontrando algo magico.
                  </p>
                  <p className="text-foreground font-semibold text-lg">
                    Esa es la experiencia que queremos compartir contigo.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/otros/ceo-1.jpg"
                      alt="Pablo - Cofundador"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground italic">
                      "Viajar me enseno que las mejores historias empiezan con un 'si' a lo desconocido."
                    </p>
                    <p className="text-xs text-primary font-medium mt-2">- Pablo, Cofundador</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-secondary p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground italic">
                      "Un buen viaje no se mide en fotos, se mide en historias que cuentas mil veces."
                    </p>
                    <p className="text-xs text-primary font-medium mt-2">- Carlos, Cofundador</p>
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/otros/ceo-2.jpg"
                      alt="Carlos - Cofundador"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Points */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                Nuestra forma de viajar
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estos son los pilares que definen cada viaje Awayna
              </p>
            </div>

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
          </div>
        </section>

        {/* Traveler vs Tourist */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
              <h2 className="text-3xl font-bold text-center mb-12">Turista vs Viajero Awayna</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">X</span>
                    </div>
                    <h3 className="text-xl font-semibold text-muted-foreground">Turista tipico</h3>
                  </div>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1 text-lg">-</span>
                      <span>Hoteles de cadena en zonas turisticas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1 text-lg">-</span>
                      <span>Restaurantes con menu en 5 idiomas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1 text-lg">-</span>
                      <span>Itinerarios rigidos y prisas constantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1 text-lg">-</span>
                      <span>Grupos de 40+ personas con banderin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1 text-lg">-</span>
                      <span>Fotos en los mismos sitios que todo el mundo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1 text-lg">-</span>
                      <span>Volver a casa sin haber hablado con un local</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Viajero Awayna</h3>
                  </div>
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg font-bold">+</span>
                      <span>Alojamientos con encanto en barrios locales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg font-bold">+</span>
                      <span>Comida callejera y mercados autenticos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg font-bold">+</span>
                      <span>Flexibilidad para improvisar y descubrir</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg font-bold">+</span>
                      <span>Grupos de max 14 personas afines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg font-bold">+</span>
                      <span>Experiencias unicas que no salen en Instagram</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg font-bold">+</span>
                      <span>Conexiones reales con locales y companeros</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Experience */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
                  Que vas a vivir
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Cada viaje Awayna incluye experiencias que no encontraras en ninguna guia turistica. 
                  Momentos que se convierten en las historias que cuentas cuando vuelves.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experiences.map((experience) => (
                    <div key={experience} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{experience}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="/images/trip-vietnam.jpg"
                    alt="Experiencia Awayna"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl max-w-xs">
                  <p className="font-semibold text-lg mb-1">+2,500 viajeros</p>
                  <p className="text-primary-foreground/80 text-sm">ya han vivido la experiencia Awayna</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background tracking-tight mb-6">
              Listo para viajar de verdad?
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-10">
              Elige tu proximo destino y unete a un grupo de viajeros como tu. 
              La aventura empieza con un click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/#viajes">
                  Ver proximos viajes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent" asChild>
                <Link href="/sobre-nosotros">
                  Conoce al equipo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

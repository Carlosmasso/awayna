import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import Image from "next/image"
import { Heart, Globe, Users, Sparkles, MapPin, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Awayna",
  description: "Conoce a los fundadores de Awayna y nuestra mision de crear viajes en grupo unicos para jovenes aventureros.",
}

const values = [
  {
    icon: Heart,
    title: "Pasion por viajar",
    description: "Cada viaje que disenamos nace de nuestra propia experiencia y amor por descubrir nuevos lugares."
  },
  {
    icon: Users,
    title: "Comunidad real",
    description: "Creemos que las mejores aventuras se viven en grupo. Conectamos personas con ganas de explorar."
  },
  {
    icon: Sparkles,
    title: "Experiencias autenticas",
    description: "Huimos de lo turistico. Buscamos lo local, lo genuino, lo que realmente te cambia."
  },
  {
    icon: Globe,
    title: "Viajes responsables",
    description: "Respetamos las culturas locales y minimizamos nuestro impacto en cada destino que visitamos."
  },
]

const stats = [
  { value: "2.500+", label: "Viajeros felices" },
  { value: "6", label: "Destinos unicos" },
  { value: "4.9", label: "Valoracion media" },
  { value: "150+", label: "Viajes realizados" },
]

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Nuestra historia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Dos amigos, una mision: que viajes diferente
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Awayna nacio de una frustracion: viajar solo es caro, ir con agencias tradicionales es aburrido, 
                y organizar grupos es un caos. Asi que decidimos crear algo mejor.
              </p>
            </div>

            {/* Founders Photo */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founders-adventure.jpg"
                  alt="Fundadores de Awayna"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-lg border border-border">
                <p className="text-sm font-medium text-foreground">Vietnam, 2023 - Donde todo empezo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  De viajeros frustrados a crear la agencia que nos hubiera gustado encontrar
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Todo empezo en 2023, cuando nos conocimos en un viaje por el sudeste asiatico. 
                    Ambos habiamos reservado con una agencia tradicional y ambos estabamos decepcionados: 
                    itinerarios rigidos, grupos enormes y cero flexibilidad.
                  </p>
                  <p>
                    En una noche en Ha Long Bay, mientras el resto del grupo dormia, nos quedamos hablando 
                    de como serian los viajes perfectos. Grupos pequenos de gente afin, experiencias autenticas, 
                    coordinadores que sean viajeros de verdad, no guias con un script.
                  </p>
                  <p>
                    Seis meses despues, Awayna era una realidad. Nuestro primer viaje fue a Filipinas 
                    con 12 personas que confiaron en nosotros. Hoy, mas de 2.500 viajeros despues, 
                    seguimos con la misma filosofia: viajar tiene que ser facil, divertido y transformador.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-background p-6 rounded-2xl text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conoce al equipo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Somos dos amigos que dejaron sus trabajos corporativos para dedicarse a lo que realmente les apasiona.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* CEO 1 */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/ceo-1.jpg"
                    alt="Pablo Rodriguez - Co-fundador de Awayna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">Pablo Rodriguez</h3>
                  <p className="text-primary font-medium mb-3">Co-fundador & CEO</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Iván es cercano y chill, con espíritu aventurero y curiosidad infinita. Desde pequeño devoraba documentales, y eso le empujó a dejar su trabajo para salir a conocer el mundo cámara en mano. La fotografía es su forma de mirar y contar lo que vive. Su primer viaje en solitario fue a la India, donde se formó como instructor de yoga, algo que hoy lleva consigo a cada destino. Cree firmemente que cuando hay buena vibra, todo lo demás fluye solo.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Madrid
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      47 paises
                    </span>
                  </div>
                </div>
              </div>

              {/* CEO 2 */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/ceo-2.jpg"
                    alt="Carlos Martinez - Co-fundador de Awayna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">Carlos Martinez</h3>
                  <p className="text-primary font-medium mb-3">Co-fundador & COO</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Ingeniero reconvertido en organizador de aventuras. Se encarga de que cada detalle 
                    de los viajes sea perfecto, desde el primer email hasta el ultimo atardecer. 
                    Experto en encontrar los restaurantes locales que no salen en ninguna guia 
                    y en crear playlists para las furgonetas.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Barcelona
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      38 paises
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lo que nos mueve
              </h2>
              <p className="text-lg text-background/70 max-w-2xl mx-auto">
                Estos son los principios que guian cada decision que tomamos en Awayna.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/10">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-background/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestra historia en fechas
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
                
                {[
                  { year: "2023", title: "El encuentro", description: "Pablo y Carlos se conocen en un viaje por Vietnam y nace la idea de Awayna." },
                  { year: "2024", title: "Primer viaje", description: "Filipinas con 12 valientes que confiaron en dos desconocidos con un sueno." },
                  { year: "2024", title: "Expansion", description: "Anadimos Tailandia, Vietnam y Japon al catalogo. Mas de 500 viajeros en el primer ano." },
                  { year: "2025", title: "Nuevos horizontes", description: "Llegamos a Islandia y Costa Rica. El equipo crece a 8 personas." },
                  { year: "2026", title: "Hoy", description: "Mas de 2.500 viajeros, 6 destinos y una comunidad que no para de crecer." },
                ].map((item, index) => (
                  <div key={item.year} className={`relative flex items-center mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                      <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                        <span className="text-primary font-bold">{item.year}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 -translate-x-1.5 z-10" />
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quieres ser parte de la proxima aventura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Echa un vistazo a nuestros proximos viajes y reserva tu plaza. 
              Te prometemos que no sera un viaje mas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/#viajes">
                  Ver proximos viajes
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="mailto:hola@awayna.com">
                  Contactar con nosotros
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

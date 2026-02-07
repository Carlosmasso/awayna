import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Heart,
  MapPin,
  Sparkles,
  Users
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Awayna - Fundadores de Viajes Auténticos",
  description:
    "Conoce a Iván y Alejandro, los fundadores de Awayna. Descubre nuestra misión de crear viajes en grupo únicos para jóvenes aventureros. +2,500 viajeros felices.",
  keywords:
    "sobre awayna, fundadores viajes, historia awayna, equipo awayna, viajes experienciales",
  openGraph: {
    title: "Sobre Nosotros | Awayna",
    description:
      "Conoce la historia detrás de Awayna y nuestro equipo apasionado por viajar.",
    type: "website",
  },
};

const values = [
  {
    icon: Heart,
    title: "Pasion por viajar",
    description:
      "Cada viaje que disenamos nace de nuestra propia experiencia y amor por descubrir nuevos lugares.",
  },
  {
    icon: Users,
    title: "Comunidad real",
    description:
      "Creemos que las mejores aventuras se viven en grupo. Conectamos personas con ganas de explorar.",
  },
  {
    icon: Sparkles,
    title: "Experiencias autenticas",
    description:
      "Huimos de lo turistico. Buscamos lo local, lo genuino, lo que realmente te cambia.",
  },
  {
    icon: Globe,
    title: "Viajes responsables",
    description:
      "Respetamos las culturas locales y minimizamos nuestro impacto en cada destino que visitamos.",
  },
];

const stats = [
  { value: "2.500+", label: "Viajeros felices" },
  { value: "6", label: "Destinos unicos" },
  { value: "4.9", label: "Valoracion media" },
  { value: "150+", label: "Viajes realizados" },
];

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {/* Founders Section */}
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl  mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Menos turismo. Más viaje.
              </h2>
              {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Somos dos amigos que dejaron sus trabajos corporativos para
                dedicarse a lo que realmente les apasiona.
              </p> */}
              <div className="space-y-4 text-muted-foreground leading-relaxed ">
                <p>
                  Viajar para nosotros no va de tachar lugares en un mapa, sino
                  de vivirlos de verdad. Nos gusta movernos con calma,
                  mezclarnos con la gente local, probar sabores nuevos y dejar
                  que el destino marque el ritmo. Buscamos aventuras, sí, pero
                  también momentos tranquilos, risas compartidas y esa sensación
                  de estar justo donde tienes que estar.
                </p>
                <p>
                  Viajamos con buena vibra, mente abierta y muchas ganas de
                  descubrir el mundo desde dentro. Nos gusta mostrar los
                  destinos tal y como son, sin filtros forzados ni prisas,
                  poniendo el foco en las experiencias, las personas y los
                  pequeños detalles que hacen cada viaje único. Porque cuando
                  conectas con el lugar y con el grupo, el viaje se transforma
                  en algo que se queda contigo para siempre.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* CEO 1 */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/personal/ivan.jpg"
                    alt="Iván Merenciano - Co-fundador de Awayna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Iván Merenciano
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Líder de expedición
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Iván es cercano y chill, con espíritu aventurero y
                    curiosidad infinita. Desde pequeño devoraba documentales, y
                    eso le empujó a dejar su trabajo para salir a conocer el
                    mundo cámara en mano. La fotografía es su forma de mirar y
                    contar lo que vive. Su primer viaje en solitario fue a la
                    India, donde se formó como instructor de yoga, algo que hoy
                    lleva consigo a cada destino. Cree firmemente que cuando hay
                    buena vibra, todo lo demás fluye solo.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Albacete
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      8 países
                    </span>
                  </div>
                </div>
              </div>

              {/* CEO 2 */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/personal/alex.jpeg"
                    alt="Alejandro Pérez - Co-fundador de Awayna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Alejandro Pérez
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Líder de expedición
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Alex es sencillo y muy claro con lo que quiere en la vida.
                    Ama la naturaleza, el aire libre y descubrir nuevas
                    culturas, sobre todo si hay buena comida de por medio. Es
                    hablador, divertido y con alma de explorador, necesita
                    recorrer cada rincón de los destinos que visita. Tiene
                    energía de sobra, así que el deporte siempre va en la
                    mochila. Parece que improvisa y se deja llevar, pero en el
                    fondo todo lo tiene bastante bien pensado. Un compañero de
                    viaje fácil, curioso y con muy buen rollo.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Albacete
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      5 países
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        {/* <section className="py-20 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lo que nos mueve
              </h2>
              <p className="text-lg text-background/70 max-w-2xl mx-auto">
                Estos son los principios que guian cada decision que tomamos en
                Awayna.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/10"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-background/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline Section */}
        {/* <section className="py-20">
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
                  {
                    year: "2023",
                    title: "El encuentro",
                    description:
                      "Pablo y Carlos se conocen en un viaje por Vietnam y nace la idea de Awayna.",
                  },
                  {
                    year: "2024",
                    title: "Primer viaje",
                    description:
                      "Filipinas con 12 valientes que confiaron en dos desconocidos con un sueno.",
                  },
                  {
                    year: "2024",
                    title: "Expansion",
                    description:
                      "Anadimos Tailandia, Vietnam y Japon al catalogo. Mas de 500 viajeros en el primer ano.",
                  },
                  {
                    year: "2025",
                    title: "Nuevos horizontes",
                    description:
                      "Llegamos a Islandia y Costa Rica. El equipo crece a 8 personas.",
                  },
                  {
                    year: "2026",
                    title: "Hoy",
                    description:
                      "Mas de 2.500 viajeros, 6 destinos y una comunidad que no para de crecer.",
                  },
                ].map((item, index) => (
                  <div
                    key={`${item.year}-${index}`}
                    className={`relative flex items-center mb-8 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}
                    >
                      <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                        <span className="text-primary font-bold">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 -translate-x-1.5 z-10" />
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quieres ser parte de la proxima aventura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Echa un vistazo a nuestros proximos viajes y reserva tu plaza. Te
              prometemos que no sera un viaje mas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href="/#viajes">Ver proximos viajes</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent"
                asChild
              >
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
  );
}

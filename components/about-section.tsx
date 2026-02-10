import { Heart, Users, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Quiénes somos
          </h2>

          {/* Founders */}
          <div className="flex flex-col sm:flex-row gap-12 items-center justify-center mb-8">
            <div className="relative w-36 h-36 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/personal/ivan.jpg"
                alt="Iván Merenciano"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-36 h-36 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/personal/alex.jpeg"
                alt="Alejandro Pérez"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somos dos viajeros apasionados que transformaron su amor por
              descubrir el mundo en una forma de viajar diferente. En Awayna
              creamos experiencias auténticas donde lo importante no es solo el
              destino, sino las personas que conoces y los momentos que
              compartes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Viajamos con calma, mezclándonos con la gente local y buscando
              esos pequeños detalles que hacen cada viaje único. Porque cuando
              conectas con el lugar y con el grupo, el viaje se transforma en
              algo que se queda contigo para siempre.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  Pasión por viajar
                </h3>
                <p className="text-sm text-muted-foreground">
                  Experiencias auténticas y reales
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  Grupos reducidos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Conexiones genuinas entre viajeros
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  Viaje responsable
                </h3>
                <p className="text-sm text-muted-foreground">
                  Respeto por culturas locales
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/sobre-nosotros">Conoce más sobre nosotros</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Calendar, Plane, Users, Compass, Repeat } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Funciona | Awayna - Proceso de Reserva",
  description:
    "Descubre cómo funciona el proceso de viajar con Awayna. Desde la reserva hasta el final del viaje, te acompañamos en cada paso de tu aventura.",
  keywords: "cómo funciona awayna, proceso reserva, viajes grupo, pasos reserva",
  openGraph: {
    title: "Cómo Funciona | Awayna",
    description: "El proceso de viajar con Awayna paso a paso",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Reserva tu viaje",
    description:
      "Una vez hayas decidido tu destino, contacta con nosotros y lo dejamos cerrado.",
  },
  {
    number: "02",
    icon: Plane,
    title: "¡Es hora de comprar tus vuelos!",
    description:
      "No te preocupes, si no sabes cual elegir habla con nosotros y los elegimos juntos. Si lo prefieres, podemos cuadrar tus vuelos con los viajeros de tu zona.",
  },
  {
    number: "03",
    icon: Users,
    title: "Vamos a conocernos",
    description:
      "30 días antes de que comience la aventura, crearemos un grupo de whatsapp con todos los integrantes de la expedición, donde estaremos nosotros para solucionar todas vuestras dudas/preocupaciones.",
  },
  {
    number: "04",
    icon: Compass,
    title: "Llegó el momento",
    description:
      "Llegó el día más esperado, una vez juntos comienza la aventura. Si aún estas algo nervios@, los nervios desaparecerán cuando nos conozcamos. Haremos todo lo posible para cumplir el itinerario original pero es posible por motivos que se escapan de nuestro control tengamos que ser flexibles con el plan inicial. ¿Alguna propuesta? Siempre son bienvenidas y se decidirán con el grupo.",
  },
  {
    number: "05",
    icon: Repeat,
    title: "Repite",
    description:
      "Ya sabes lo que es viajar con nosotros, ve pensando tu próxima fecha y destino para volver a vernos.",
  },
];

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Cómo funciona Awayna?
              </h1>
              <p className="text-lg text-muted-foreground">
                Te acompañamos en cada paso de tu aventura. Desde el momento en
                que reservas hasta que vuelves con recuerdos inolvidables.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="max-w-6xl mx-auto">
              {/* First row - 3 columns */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {steps.slice(0, 3).map((step) => (
                  <div
                    key={step.number}
                    className="relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second row - 2 columns */}
              <div className="grid md:grid-cols-2 gap-8">
                {steps.slice(3, 5).map((step) => (
                  <div
                    key={step.number}
                    className="relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                ¿Listo para comenzar tu aventura?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#viajes"
                  className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver destinos disponibles
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-colors"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

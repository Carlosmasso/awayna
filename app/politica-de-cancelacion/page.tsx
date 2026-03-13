import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarX, ShieldCheck, AlertCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cancelación | Awayna",
  description:
    "Consulta nuestra política de cancelación. Conoce los plazos, condiciones y qué ocurre con tu reserva si necesitas cancelar tu viaje con Awayna.",
  keywords: "política cancelación awayna, cancelar viaje, devolución reserva, condiciones viaje",
  openGraph: {
    title: "Política de Cancelación | Awayna",
    description: "Todo lo que necesitas saber sobre cancelaciones en Awayna.",
    type: "website",
  },
};

const steps = [
  {
    icon: ShieldCheck,
    label: "Al reservar",
    sublabel: "Hoy",
    description:
      "Pagas la reserva más la fianza (40% del precio total). Tu plaza queda confirmada y el viaje arranca.",
    highlight: false,
  },
  {
    icon: Clock,
    label: "Hasta 30 días antes",
    sublabel: "Plazo de cancelación",
    description:
      "Puedes cancelar tu viaje en cualquier momento antes de esta fecha. No tendrás que abonar el resto del importe. Eso sí, la reserva y la fianza no son reembolsables.",
    highlight: true,
  },
  {
    icon: CalendarX,
    label: "30 días antes del viaje",
    sublabel: "Pago final",
    description:
      "Se realiza el cobro del 60% restante del precio total. A partir de este momento el viaje está completamente confirmado y pagado.",
    highlight: false,
  },
];

export default function PoliticaCancelacionPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Política de cancelación
            </h1>
            <p className="text-lg text-muted-foreground">
              Queremos que viajes con tranquilidad. Por eso nuestras condiciones son claras y sin letra pequeña.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border hidden sm:block" />

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex gap-5 rounded-2xl border p-6 ${
                      step.highlight
                        ? "border-primary/40 bg-primary/5"
                        : "border-border bg-card"
                    }`}
                  >
                    {/* Icon circle */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        step.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
                        {step.sublabel}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.label}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Summary box */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">

            {/* Key info */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Resumen</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">Al reservar</strong> pagas el 40% del precio total (reserva + fianza). Tu plaza queda bloqueada.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">30 días antes del viaje</strong> se realiza el pago del 60% restante para confirmar definitivamente tu plaza.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">Si cancelas antes de los 30 días</strong>, no tendrás que pagar el importe restante, pero la reserva y la fianza ya abonadas no son reembolsables.
                  </span>
                </li>
              </ul>
            </div>

            {/* Warning */}
            <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-5">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                Una vez pasados los 30 días antes del viaje y realizado el pago final, el importe completo no es reembolsable. Si tienes alguna duda o situación especial, escríbenos antes de tomar ninguna decisión.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center rounded-2xl bg-secondary/40 border border-border px-8 py-12">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                ¿Tienes alguna duda?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo está disponible para ayudarte antes de que tomes ninguna decisión.
              </p>
              <Button asChild size="lg">
                <Link href="/contacto">Contactar con Awayna</Link>
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

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Awayna - Preguntas Frecuentes",
  description:
    "Resolvemos todas tus dudas antes de viajar con Awayna. Grupos, alojamientos, visados, equipaje, seguro de viaje y mucho más.",
  keywords:
    "preguntas frecuentes awayna, faq viajes grupo, dudas viajes, info viajes awayna",
  openGraph: {
    title: "FAQ | Awayna - Preguntas Frecuentes",
    description:
      "Todo lo que necesitas saber antes de viajar con Awayna.",
    type: "website",
  },
};

const faqs = [
  {
    question: "¿Qué tipo de experiencias viviremos?",
    answer:
      "No hacemos viajes para tachar sitios. Hacemos viajes para sentirlos.\n\nMezclamos cultura local, naturaleza potente, gastronomía real y experiencias que no se compran en una excursión suelta. Dormiremos en lugares especiales, compartiremos momentos que no estaban en el guion y entenderemos el destino con contexto.\n\nNo es turismo. Es vivir el viaje desde dentro. Y en grupo.",
  },
  {
    question: "¿Hay que vacunarse?",
    answer:
      "Depende del destino y de tu situación personal.\n\nNormalmente no hay vacunas obligatorias para viajeros desde España, pero puede haber recomendaciones según la ruta y la duración. Nuestro consejo: cita en un centro de vacunación internacional 4–6 semanas antes y viajas con la cabeza tranquila.",
  },
  {
    question: "¿Puedo alargar el viaje por mi cuenta?",
    answer:
      "Sí. Y casi siempre pasa.\n\nPuedes quedarte más días antes o después del viaje en grupo. Te damos recomendaciones, zonas que merecen la pena y tips prácticos para que lo montes fácil.\n\nLas noches extra y cambios de vuelos no están incluidos, pero no te dejamos solo organizándolo.",
  },
  {
    question: "¿Necesito visado?",
    answer:
      "Depende de tu nacionalidad y del país al que viajemos.\n\nLas normas cambian, así que siempre recomendamos revisar la información oficial antes de salir. En casi todos los casos necesitarás pasaporte con mínimo 6 meses de validez.\n\nSi tienes dudas, te orientamos antes de reservar.",
  },
  {
    question: "¿Cómo son los alojamientos?",
    answer:
      "Buscamos sitios con buena energía.\n\nHoteles bien ubicados, cómodos y con personalidad. Nada impersonal ni masificado. Y en muchos viajes incluimos alojamientos que forman parte de la experiencia.\n\nHabitaciones compartidas (dobles o triples). Si quieres individual, puedes pedir suplemento si hay disponibilidad.",
  },
  {
    question: "¿Es un viaje muy físico?",
    answer:
      "Es activo, pero no extremo.\n\nHabrá caminatas, días intensos y experiencias movidas, pero está pensado para personas con condición física normal. No necesitas ser atleta, pero sí venir con ganas.\n\nSi tienes alguna lesión o condición médica, cuéntanoslo antes.",
  },
  {
    question: "¿Qué tamaño tienen los grupos?",
    answer:
      "Grupos reducidos.\n\nEso significa mejor logística, más conexión, más flexibilidad y más verdad en la experiencia. No viajamos en masa. Viajamos en equipo.",
  },
  {
    question: "¿Tendré tiempo libre?",
    answer:
      "Sí.\n\nEl viaje está organizado, pero siempre dejamos espacios para que explores a tu ritmo, descanses o hagas planes alternativos. Es un equilibrio entre vivirlo juntos y tener tu momento.",
  },
  {
    question: "¿Qué tipo de gente viene?",
    answer:
      "Gente con mentalidad viajera.\n\nPersonas abiertas, respetuosas, con ganas de compartir y salir de su zona cómoda. Muchos vienen solos. Casi todos se van con amigos.",
  },
  {
    question: "¿El viaje es responsable?",
    answer:
      "Sí.\n\nTrabajamos con proveedores locales, evitamos actividades que impliquen explotación animal y buscamos que el impacto sea positivo. Viajar bien también es viajar con conciencia.",
  },
  {
    question: "¿Qué está incluido en el precio?",
    answer:
      "Incluimos lo importante: alojamientos, actividades clave, acompañamiento del equipo, parte del transporte interno y experiencias que forman parte de la esencia del viaje.\n\nLos vuelos internacionales, algunas comidas y gastos personales suelen ir aparte (lo detallamos siempre en cada viaje).",
  },
  {
    question: "¿Cómo son las comidas durante el viaje?",
    answer:
      "Habrá comidas incluidas y otras libres.\n\nNos gusta que pruebes la gastronomía local real, tanto en grupo como a tu aire. Comer bien es parte del viaje. Y sí, siempre recomendamos sitios que merecen la pena.",
  },
  {
    question: "¿Puedo ir si viajo solo?",
    answer:
      "De hecho, es lo más habitual.\n\nLa mayoría se apunta sin conocer a nadie. El grupo se crea solo cuando todos están en la misma vibra: descubrir, compartir y vivir la experiencia.",
  },
  {
    question: "¿Hay coordinador durante todo el viaje?",
    answer:
      "Sí.\n\nViajarás con alguien del equipo Awayna que acompaña al grupo, coordina la logística y cuida la experiencia. Además, trabajamos con guías locales en muchas actividades.\n\nNo vas solo. Vas acompañado.",
  },
  {
    question: "¿Cómo son los transportes internos?",
    answer:
      "Usamos diferentes medios según el destino: vehículos privados, trenes, barcos, vuelos internos...\n\nBuscamos equilibrio entre comodidad y autenticidad. A veces habrá trayectos largos, pero forman parte de la aventura.",
  },
  {
    question: "¿Hay límite de edad?",
    answer:
      "No tenemos una edad exacta obligatoria, pero la mayoría de viajeros suele estar entre los 25 y 45 años.\n\nMás que la edad, importa la actitud.",
  },
  {
    question: "¿Necesito seguro de viaje?",
    answer:
      "Sí, es obligatorio viajar con seguro.\n\nPuedes contratar el que prefieras o añadir el que recomendamos. Lo importante es que viajes cubierto ante cualquier imprevisto.",
  },
  {
    question: "¿Qué pasa si no conozco a nadie del grupo?",
    answer:
      "Perfecto.\n\nVienes abierto, y el resto también. El viaje está diseñado para generar conexión desde el día uno. Lo raro es no hacer grupo.",
  },
  {
    question: "¿Qué equipaje necesito?",
    answer:
      "Dependerá del destino, pero siempre enviamos una guía práctica antes del viaje con recomendaciones claras: tipo de ropa, calzado, accesorios útiles y lo que no hace falta cargar.\n\nMenos maleta. Más experiencia.",
  },
  {
    question: "¿Y si tengo dudas antes de reservar?",
    answer:
      "Nos escribes.\n\nPreferimos resolver todo antes de que te apuntes. Queremos que vengas convencido, no con preguntas en la cabeza.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber antes de viajar con Awayna.
              Si no encuentras tu respuesta, escríbenos.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-border rounded-2xl bg-card overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="font-semibold text-foreground text-base">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="h-px bg-border mb-4" />
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center rounded-2xl bg-secondary/40 border border-border px-8 py-12">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                ¿Tienes alguna otra pregunta?
              </h2>
              <p className="text-muted-foreground mb-6">
                Escríbenos y te respondemos antes de que te decidas.
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

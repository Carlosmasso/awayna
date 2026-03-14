import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.faq" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

const faqsEs = [
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

const faqsEn = [
  {
    question: "What kind of experiences will we have?",
    answer:
      "We don't travel to check boxes. We travel to feel things.\n\nWe mix local culture, powerful nature, real gastronomy, and experiences you can't buy on a day tour. We'll sleep in special places, share moments that weren't on any script, and truly understand the destination.\n\nThis isn't tourism. It's living the journey from the inside. As a group.",
  },
  {
    question: "Do I need vaccinations?",
    answer:
      "It depends on the destination and your personal health situation.\n\nGenerally there are no mandatory vaccines for travelers from Spain, but there may be recommendations depending on the route and duration. Our advice: visit a travel health clinic 4–6 weeks before departure and travel with peace of mind.",
  },
  {
    question: "Can I extend the trip on my own?",
    answer:
      "Yes. And it almost always happens.\n\nYou can stay extra days before or after the group trip. We give you recommendations, areas worth visiting, and practical tips to make it easy to arrange.\n\nExtra nights and flight changes aren't included, but we won't leave you alone figuring it out.",
  },
  {
    question: "Do I need a visa?",
    answer:
      "It depends on your nationality and the country we're traveling to.\n\nRules change, so we always recommend checking official information before departure. In almost all cases you'll need a passport valid for at least 6 months.\n\nIf you have questions, we'll guide you before you book.",
  },
  {
    question: "What are the accommodations like?",
    answer:
      "We look for places with good energy.\n\nWell-located, comfortable hotels with personality. Nothing impersonal or overcrowded. And on many trips we include accommodations that are part of the experience themselves.\n\nShared rooms (double or triple). If you want a single room, you can request a supplement if available.",
  },
  {
    question: "Is the trip very physically demanding?",
    answer:
      "It's active, but not extreme.\n\nThere will be hikes, intense days and action-packed experiences, but it's designed for people with normal physical fitness. You don't need to be an athlete, but you should come with energy.\n\nIf you have an injury or medical condition, let us know beforehand.",
  },
  {
    question: "How large are the groups?",
    answer:
      "Small groups.\n\nThat means better logistics, deeper connections, more flexibility, and a more authentic experience. We don't travel in masses. We travel as a team.",
  },
  {
    question: "Will I have free time?",
    answer:
      "Yes.\n\nThe trip is organized, but we always leave space for you to explore at your own pace, rest, or make alternative plans. It's a balance between experiencing things together and having your own moments.",
  },
  {
    question: "What kind of people come on these trips?",
    answer:
      "People with a traveler's mindset.\n\nOpen, respectful people who want to share and step outside their comfort zone. Many come alone. Almost all leave as friends.",
  },
  {
    question: "Is the travel responsible?",
    answer:
      "Yes.\n\nWe work with local providers, avoid activities involving animal exploitation, and aim for a positive impact. Traveling well also means traveling consciously.",
  },
  {
    question: "What's included in the price?",
    answer:
      "We include the important things: accommodation, key activities, team support, part of the internal transport, and experiences that are core to the trip.\n\nInternational flights, some meals, and personal expenses are usually not included (we always detail this for each trip).",
  },
  {
    question: "What are meals like during the trip?",
    answer:
      "Some meals are included and others are free choice.\n\nWe love for you to try real local food, both as a group and on your own. Eating well is part of the journey. And yes, we always recommend places worth visiting.",
  },
  {
    question: "Can I join if I'm traveling solo?",
    answer:
      "Actually, that's the most common way.\n\nMost people sign up without knowing anyone. The group forms naturally when everyone shares the same vibe: discovering, sharing, and living the experience.",
  },
  {
    question: "Is there a coordinator throughout the entire trip?",
    answer:
      "Yes.\n\nYou'll travel with someone from the Awayna team who accompanies the group, coordinates logistics, and looks after the experience. We also work with local guides for many activities.\n\nYou're not alone. You're accompanied.",
  },
  {
    question: "What are internal transports like?",
    answer:
      "We use different modes depending on the destination: private vehicles, trains, boats, internal flights...\n\nWe look for a balance between comfort and authenticity. Sometimes there will be long journeys, but they're part of the adventure.",
  },
  {
    question: "Is there an age limit?",
    answer:
      "We don't have a strict age requirement, but most travelers tend to be between 25 and 45 years old.\n\nMore than age, what matters is attitude.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "Yes, travel insurance is required.\n\nYou can get whichever you prefer or add the one we recommend. The important thing is that you travel covered against any unexpected events.",
  },
  {
    question: "What if I don't know anyone in the group?",
    answer:
      "Perfect.\n\nYou come open, and so does everyone else. The trip is designed to build connection from day one. Not forming a group is the exception, not the rule.",
  },
  {
    question: "What luggage do I need?",
    answer:
      "It depends on the destination, but we always send a practical guide before the trip with clear recommendations: type of clothing, footwear, useful accessories, and what you don't need to carry.\n\nLess luggage. More experience.",
  },
  {
    question: "What if I have questions before booking?",
    answer:
      "Write to us.\n\nWe prefer to resolve everything before you sign up. We want you to come convinced, not with questions still in your head.",
  },
];

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.faq" });
  const faqs = locale === "en" ? faqsEn : faqsEs;
  const contactHref = locale === "en" ? "/en/contacto" : "/contacto";

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </section>

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

            <div className="mt-16 text-center rounded-2xl bg-secondary/40 border border-border px-8 py-12">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("ctaTitle")}
              </h2>
              <p className="text-muted-foreground mb-6">{t("ctaDesc")}</p>
              <Button asChild size="lg">
                <Link href={contactHref}>{t("ctaButton")}</Link>
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

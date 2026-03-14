import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Calendar, Plane, Users, Compass, Repeat } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.howItWorks" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

const stepIcons = [Calendar, Plane, Users, Compass, Repeat];

export default async function ComoFunciona({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.howItWorks" });

  const stepsEs = [
    {
      number: "01",
      title: "Reserva tu viaje",
      description:
        "Una vez hayas decidido tu destino, contacta con nosotros y lo dejamos cerrado.",
    },
    {
      number: "02",
      title: "¡Es hora de comprar tus vuelos!",
      description:
        "No te preocupes, si no sabes cual elegir habla con nosotros y los elegimos juntos. Si lo prefieres, podemos cuadrar tus vuelos con los viajeros de tu zona.",
    },
    {
      number: "03",
      title: "Vamos a conocernos",
      description:
        "30 días antes de que comience la aventura, crearemos un grupo de whatsapp con todos los integrantes de la expedición, donde estaremos nosotros para solucionar todas vuestras dudas/preocupaciones.",
    },
    {
      number: "04",
      title: "Llegó el momento",
      description:
        "Llegó el día más esperado, una vez juntos comienza la aventura. Si aún estas algo nervios@, los nervios desaparecerán cuando nos conozcamos. Haremos todo lo posible para cumplir el itinerario original pero es posible por motivos que se escapan de nuestro control tengamos que ser flexibles con el plan inicial. ¿Alguna propuesta? Siempre son bienvenidas y se decidirán con el grupo.",
    },
    {
      number: "05",
      title: "Repite",
      description:
        "Ya sabes lo que es viajar con nosotros, ve pensando tu próxima fecha y destino para volver a vernos.",
    },
  ];

  const stepsEn = [
    {
      number: "01",
      title: "Book your trip",
      description:
        "Once you've decided on your destination, contact us and we'll get it locked in.",
    },
    {
      number: "02",
      title: "Time to buy your flights!",
      description:
        "Don't worry, if you're not sure which to choose, talk to us and we'll figure it out together. If you prefer, we can coordinate flights with other travelers from your area.",
    },
    {
      number: "03",
      title: "Let's get to know each other",
      description:
        "30 days before the adventure begins, we'll create a WhatsApp group with all expedition members, where we'll be available to resolve all your questions and concerns.",
    },
    {
      number: "04",
      title: "The moment is here",
      description:
        "The most anticipated day has arrived. Once we're all together, the adventure begins. Any nerves will disappear as soon as we meet. We'll do our best to follow the original itinerary but sometimes flexibility is needed. Any suggestions? Always welcome and decided as a group.",
    },
    {
      number: "05",
      title: "Do it again",
      description:
        "Now you know what it's like to travel with us. Start thinking about your next date and destination and we'll see you again.",
    },
  ];

  const steps = locale === "en" ? stepsEn : stepsEs;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("title")}
              </h1>
              <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {steps.slice(0, 3).map((step, i) => {
                  const Icon = stepIcons[i];
                  return (
                    <div
                      key={step.number}
                      className="relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {steps.slice(3, 5).map((step, i) => {
                  const Icon = stepIcons[i + 3];
                  return (
                    <div
                      key={step.number}
                      className="relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                {t("ctaText")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#viajes"
                  className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {t("viewDestinations")}
                </a>
                <a
                  href={locale === "en" ? "/en/contacto" : "/contacto"}
                  className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-colors"
                >
                  {t("contactUs")}
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

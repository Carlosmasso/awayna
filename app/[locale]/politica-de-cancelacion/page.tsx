import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarX, ShieldCheck, AlertCircle, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.cancellation" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

export default async function PoliticaCancelacionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.cancellation" });
  const contactHref = locale === "en" ? "/en/contacto" : "/contacto";

  const steps = [
    {
      icon: ShieldCheck,
      label: t("step1Label"),
      sublabel: t("step1Sub"),
      description: t("step1Desc"),
      highlight: false,
    },
    {
      icon: Clock,
      label: t("step2Label"),
      sublabel: t("step2Sub"),
      description: t("step2Desc"),
      highlight: true,
    },
    {
      icon: CalendarX,
      label: t("step3Label"),
      sublabel: t("step3Sub"),
      description: t("step3Desc"),
      highlight: false,
    },
  ];

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

        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
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

        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">{t("summaryTitle")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {(["summary1", "summary2", "summary3"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-5">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                {t("warning")}
              </p>
            </div>

            <div className="text-center rounded-2xl bg-secondary/40 border border-border px-8 py-12">
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("ctaTitle")}</h2>
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

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.cookies" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.cookies" });
  const contactHref = locale === "en" ? "/en/contacto" : "/contacto";

  const cookieTypes = [
    {
      type: t("cookie1Type"),
      required: true,
      description: t("cookie1Desc"),
      examples:
        locale === "en"
          ? [
              "Session and navigation management",
              "Remembering basic preferences (dark mode, language)",
              "Security and fraud prevention",
            ]
          : [
              "Gestión de sesión y navegación",
              "Recordar preferencias básicas (modo oscuro, idioma)",
              "Seguridad y prevención de fraude",
            ],
    },
    {
      type: t("cookie2Type"),
      required: false,
      description: t("cookie2Desc"),
      examples:
        locale === "en"
          ? [
              "Google Analytics: page views, time on site, traffic source",
              "Performance and error analysis",
            ]
          : [
              "Google Analytics: páginas vistas, tiempo en sitio, origen del tráfico",
              "Análisis de rendimiento y errores",
            ],
    },
    {
      type: t("cookie3Type"),
      required: false,
      description: t("cookie3Desc"),
      examples:
        locale === "en"
          ? [
              "Meta Pixel (Facebook / Instagram Ads)",
              "Google Ads / remarketing",
              "Conversion tracking",
            ]
          : [
              "Meta Pixel (Facebook / Instagram Ads)",
              "Google Ads / remarketing",
              "Seguimiento de conversiones",
            ],
    },
    {
      type: t("cookie4Type"),
      required: false,
      description: t("cookie4Desc"),
      examples:
        locale === "en"
          ? [
              "YouTube (embedded videos)",
              "Google Maps",
              "Social media share buttons",
            ]
          : [
              "YouTube (vídeos embebidos)",
              "Google Maps",
              "Botones de compartir en redes sociales",
            ],
    },
  ];

  const browsers = [
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" },
    { name: "Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
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
            <p className="text-lg text-muted-foreground">{t("updated")}</p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">{t("introText")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{t("whatTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("whatText")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-5">{t("typesTitle")}</h2>
              <div className="space-y-4">
                {cookieTypes.map((cookie) => (
                  <div key={cookie.type} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-foreground">{cookie.type}</h3>
                      <span
                        className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                          cookie.required
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {cookie.required ? t("alwaysActive") : t("optional")}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {cookie.description}
                    </p>
                    <ul className="space-y-1">
                      {cookie.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{t("durationTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">{t("durationText")}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">{t("sessionLabel")}</strong> {t("sessionText")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">{t("persistentLabel")}</strong> {t("persistentText")}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{t("manageTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("manageText")}</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {browsers.map((browser) => (
                  <li key={browser.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <a
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-4">{t("manageNote")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{t("legalTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("legalText")}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{t("updatesTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("updatesText")}</p>
            </div>

            <div className="rounded-2xl bg-secondary/40 border border-border px-8 py-10 text-center">
              <h2 className="text-xl font-bold text-foreground mb-2">{t("ctaTitle")}</h2>
              <p className="text-muted-foreground mb-5">{t("ctaDesc")}</p>
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3 hover:bg-primary/90 transition-colors"
              >
                {t("ctaButton")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

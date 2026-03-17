import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { phones } from "@/lib/info";
import { getTranslations } from "next-intl/server";
import { getLocalizedDestinations } from "@/lib/destinations-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

export default async function Contacto({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  const destinations = getLocalizedDestinations(locale);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("title")}
                </h1>
                <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {t("emailLabel")}
                  </h3>
                  <a
                    href="mailto:info@awayna.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@awayna.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {t("whatsappLabel")}
                  </h3>
                  {phones.map(({ number }) => (
                    <a
                      key={number}
                      href={`https://wa.me/${number.replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </div>
              <ContactForm
                destinations={destinations
                  .filter((d) => !d.comingSoon)
                  .map((d) => ({ slug: d.slug, name: d.name }))}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

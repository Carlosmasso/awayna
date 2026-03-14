import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { phones } from "@/lib/info";
import { getTranslations } from "next-intl/server";
import { destinations } from "@/lib/destinations-data";

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

              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("emailLabel")}</h3>
                  <a href="mailto:info@awayna.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@awayna.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("whatsappLabel")}</h3>
                  {phones.map(({ number }) => (
                    <a key={number} href={`https://wa.me/${number.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {number}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("locationLabel")}</h3>
                  <p className="text-sm text-muted-foreground">{t("location")}</p>
                </div>
              </div>

              <form className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">{t("nameLabel")}</label>
                      <Input id="nombre" type="text" placeholder={t("namePlaceholder")} required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="block text-sm font-medium text-foreground mb-2">{t("surnameLabel")}</label>
                      <Input id="apellidos" type="text" placeholder={t("surnamePlaceholder")} required className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{t("emailInputLabel")}</label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">{t("phoneLabel")}</label>
                    <Input id="telefono" type="tel" placeholder={t("phonePlaceholder")} className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="destino" className="block text-sm font-medium text-foreground mb-2">{t("destinationLabel")}</label>
                    <select id="destino" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">{t("destinationPlaceholder")}</option>
                      {destinations.filter(d => !d.comingSoon).map(d => (
                        <option key={d.slug} value={d.slug}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">{t("messageLabel")}</label>
                    <textarea id="mensaje" rows={6} placeholder={t("messagePlaceholder")} required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t("sendButton")}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">{t("privacyNote")}</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

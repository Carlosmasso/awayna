import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import { Instagram, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return { title: t("metaTitle"), description: t("metaDesc") };
}

export default async function SobreNosotros({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("headline")}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("desc1")}</p>
                <p>{t("desc2")}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Iván */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/personal/ivan.jpg"
                    alt="Iván Martínez - Co-fundador de Awayna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">Iván Martínez</h3>
                  <p className="text-primary font-medium mb-3">{t("ivanTitle")}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("ivanBio")}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Albacete
                    </span>
                    <a
                      href="https://instagram.com/immtheartist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                      @immtheartist
                    </a>
                  </div>
                </div>
              </div>

              {/* Alejandro */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/personal/alex.jpeg"
                    alt="Alejandro Pérez - Co-fundador de Awayna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">Alejandro Pérez</h3>
                  <p className="text-primary font-medium mb-3">{t("alexTitle")}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("alexBio")}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Albacete
                    </span>
                    <a
                      href="https://instagram.com/_alexperez5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                      @_alexperez5
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {locale === "en" ? "Want to join the next adventure?" : "¿Quieres ser parte de la próxima aventura?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {locale === "en"
                ? "Check out our upcoming trips and reserve your spot. We promise it won't be just another trip."
                : "Echa un vistazo a nuestros próximos viajes y reserva tu plaza. Te prometemos que no será un viaje más."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/#viajes">{locale === "en" ? "View upcoming trips" : "Ver próximos viajes"}</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href={locale === "en" ? "/en/contacto" : "/contacto"}>
                  {locale === "en" ? "Contact us" : "Contactar con nosotros"}
                </Link>
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

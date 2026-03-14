import { Heart, Users, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section className="py-16 sm:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            {t("title")}
          </h2>

          {/* Founders */}
          <div className="flex flex-col sm:flex-row gap-12 items-center justify-center mb-8">
            <div className="relative w-36 h-36 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/personal/ivan.jpg"
                alt="Iván Martínez"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>

            <div className="relative w-36 h-36 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/personal/alex.jpeg"
                alt="Alejandro Pérez"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("desc1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              {t("desc2")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  {t("passion")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("passionSub")}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  {t("groups")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("groupsSub")}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  {t("responsible")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("responsibleSub")}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/sobre-nosotros">{t("cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Info, Users, Car } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function DestinationFondoComun() {
  const t = await getTranslations("destPage")
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {t("fondoComunTitle")}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {t.rich("fondoComunDesc", {
                  strong: (chunks) => <strong className="text-foreground font-semibold">{chunks}</strong>,
                })}
              </p>

              <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                {t("fondoComunCovers")}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 bg-background/60 rounded-xl p-3">
                  <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {t("fondoComunActivities")}
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-background/60 rounded-xl p-3">
                  <Car className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {t("fondoComunTransport")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

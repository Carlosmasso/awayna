import { Sun, FileText, Syringe, Coins, Languages, Clock } from "lucide-react"
import type { Destination } from "@/lib/destinations-data"
import { getTranslations } from "next-intl/server"

interface DestinationPracticalInfoProps {
  destination: Destination
}

const infoItems = [
  { key: "bestTime", icon: Sun, labelKey: "bestTime" },
  { key: "visa", icon: FileText, labelKey: "visa" },
  { key: "vaccines", icon: Syringe, labelKey: "vaccines" },
  { key: "currency", icon: Coins, labelKey: "currency" },
  { key: "language", icon: Languages, labelKey: "language" },
  { key: "timeZone", icon: Clock, labelKey: "timeZone" },
] as const

export async function DestinationPracticalInfo({ destination }: DestinationPracticalInfoProps) {
  const t = await getTranslations("destPage")
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {t("practicalTitle")}
          </h2>
          <p className="text-muted-foreground">
            {t("practicalSubtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {infoItems.map((item) => {
            const Icon = item.icon
            const value = destination.practicalInfo[item.key]

            return (
              <div 
                key={item.key}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 h-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t(item.labelKey as "bestTime" | "visa" | "vaccines" | "currency" | "language" | "timeZone")}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { X, Check, CalendarDays, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { sendBookingEmail } from "@/app/actions/send-email"
import type { Destination, TripDate } from "@/lib/destinations-data"

interface BookingModalProps {
  destination: Destination
  tripDate: TripDate
  onClose?: () => void
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

const step1Schema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
})

const step2Schema = z.object({
  participants: z.string(),
  specialRequests: z.string().optional(),
})

const fullSchema = step1Schema.merge(step2Schema)
type FormValues = z.infer<typeof fullSchema>

export function BookingModal({ destination, tripDate, onClose }: BookingModalProps) {
  const t = useTranslations("booking")
  const [step, setStep] = React.useState(1)
  const [success, setSuccess] = React.useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(fullSchema),
    defaultValues: { participants: "1" },
  })

  const handleNext = async () => {
    const valid = await trigger(["fullName", "email", "phone"])
    if (valid) setStep(2)
  }

  const onSubmit = async (data: FormValues) => {
    const result = await sendBookingEmail({
      ...data,
      destinationName: destination.name,
      destinationDuration: destination.duration,
      tripStartDate: formatDate(tripDate.startDate),
      tripEndDate: formatDate(tripDate.endDate),
      tripPrice: tripDate.price,
      tripOriginalPrice: tripDate.originalPrice,
    })
    if (result.success) {
      setSuccess(true)
    }
  }

  const values = getValues()
  const steps = [t("step1"), t("step2"), t("step3")]

  return (
    <div
      className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold">{t("title")}</h2>
          <button
            onClick={() => onClose?.()}
            className="hover:bg-primary-foreground/20 rounded-lg p-1.5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Trip summary strip */}
        <div className="bg-secondary/20 border-b border-border/40 px-6 py-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/80">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="font-medium">{destination.name}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-primary shrink-0" />
            {formatDate(tripDate.startDate)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
            {destination.duration}
          </span>
          <span className="font-bold text-primary ml-auto">{tripDate.price}€</span>
        </div>

        {success ? (
          /* Success state */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{t("successTitle")}</h3>
            <p className="text-muted-foreground">
              {t("successMessage")} <span className="font-semibold text-foreground">{destination.name}</span>.
            </p>
            <p className="text-sm text-muted-foreground">{t("successNote")}</p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
              onClick={() => onClose?.()}
            >
              {t("close")}
            </Button>
          </div>
        ) : (
          <>
            {/* Step indicators */}
            <div className="px-6 pt-5 pb-2">
              <div className="flex items-center gap-2">
                {steps.map((label, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        i + 1 < step ? "bg-primary text-primary-foreground" :
                        i + 1 === step ? "bg-primary text-primary-foreground" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {i + 1 < step ? <Check className="h-3 w-3" /> : i + 1}
                      </div>
                      <span className={`text-xs hidden sm:inline ${i + 1 === step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-px transition-colors ${i + 1 < step ? "bg-primary" : "bg-border"}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-5 space-y-4">

              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("fullName")}</label>
                    <Input type="text" placeholder={t("namePlaceholder")} {...register("fullName")} className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("email")}</label>
                    <Input type="email" placeholder="tu@email.com" {...register("email")} className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("phone")}</label>
                    <Input type="tel" placeholder={t("phonePlaceholder")} {...register("phone")} className="w-full" />
                  </div>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2"
                    onClick={handleNext}
                  >
                    {t("next")}
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("participants")}</label>
                    <select
                      {...register("participants")}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? t("person") : t("people")}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("specialRequests")}</label>
                    <textarea
                      {...register("specialRequests")}
                      placeholder={t("specialRequestsPlaceholder")}
                      rows={4}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                      {t("back")}
                    </Button>
                    <Button type="button" size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={() => setStep(3)}>
                      {t("next")}
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="bg-secondary/20 rounded-xl border border-border/50 divide-y divide-border/50 text-sm overflow-hidden">
                    {[
                      [t("summaryName"), values.fullName],
                      [t("summaryEmail"), values.email],
                      [t("summaryPhone"), values.phone],
                      [t("summaryDestination"), destination.name],
                      [t("summaryDuration"), destination.duration],
                      [t("summaryDate"), `${formatDate(tripDate.startDate)} → ${formatDate(tripDate.endDate)}`],
                      [t("summaryPrice"), `${tripDate.price}€${tripDate.originalPrice ? ` (antes ${tripDate.originalPrice}€)` : ""}`],
                      [t("summaryParticipants"), `${values.participants} ${Number(values.participants) === 1 ? t("person") : t("people")}`],
                      ...(values.specialRequests ? [[t("summaryRequests"), values.specialRequests]] : []),
                    ].map(([label, value]) => (
                      <div key={label} className="flex gap-3 px-4 py-2.5">
                        <span className="font-medium text-foreground/70 shrink-0 w-28">{label}</span>
                        <span className="text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{t("summaryNote")}</p>
                  <div className="flex gap-3 mt-2">
                    <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(2)}>
                      {t("back")}
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      {isSubmitting ? t("sending") : t("send")}
                    </Button>
                  </div>
                </>
              )}

            </form>
          </>
        )}
      </div>
    </div>
  )
}
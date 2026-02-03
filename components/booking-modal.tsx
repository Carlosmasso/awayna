"use client"

import React from "react"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBooking } from "@/components/booking-context"

export function BookingModal() {
  const { isOpen, closeBooking, bookingData } = useBooking()
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    destination: bookingData?.destination || "",
    date: bookingData?.dateId || "",
    participants: "1",
    specialRequests: "",
  })

  React.useEffect(() => {
    if (isOpen) {
      setStep(1)
      setFormData(prev => ({
        ...prev,
        destination: bookingData?.destination || "",
        date: bookingData?.dateId || "",
      }))
    }
  }, [isOpen, bookingData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Enviar por WhatsApp
      const message = `Hola! Me gustaría reservar un viaje con Awayna. Datos: ${formData.fullName}, ${formData.email}, ${formData.phone}, Destino: ${formData.destination}, Fecha: ${formData.date}, Participantes: ${formData.participants}`
      const whatsappUrl = `https://wa.me/+34XXXXXXXXX?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      closeBooking()
      setStep(1)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
        participants: "1",
        specialRequests: "",
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Reserva tu viaje</h2>
          <button
            onClick={() => closeBooking()}
            className="hover:bg-primary-foreground/20 rounded-lg p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 px-6 pt-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex-1 h-2 rounded-full transition-all ${
              s <= step ? "bg-primary" : "bg-border"
            }`} />
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Nombre completo</label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Tu nombre"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+34 XXX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Destino</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-lg border border-border bg-background"
                >
                  <option value="">Selecciona un destino</option>
                  <option value="filipinas">Filipinas</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="tailandia">Tailandia</option>
                  <option value="japon">Japon</option>
                  <option value="islandia">Islandia</option>
                  <option value="costa-rica">Costa Rica</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fecha preferida</label>
                <Input
                  type="month"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Numero de participantes</label>
                <select
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-lg border border-border bg-background"
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Solicitudes especiales</label>
                <textarea
                  name="specialRequests"
                  placeholder="Cuéntanos si tienes alguna necesidad especial o pregunta..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background resize-none"
                />
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h3 className="font-medium mb-2">Resumen</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Nombre:</strong> {formData.fullName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Destino:</strong> {formData.destination}</p>
                  <p><strong>Participantes:</strong> {formData.participants}</p>
                </div>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex-1"
              >
                Atras
              </Button>
            )}
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {step === 3 ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Reservar por WhatsApp
                </>
              ) : (
                "Siguiente"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

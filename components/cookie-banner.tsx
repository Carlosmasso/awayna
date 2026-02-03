"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("awayna-cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        setTimeout(() => setIsAnimating(true), 50)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("awayna-cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }))
    closeBanner()
  }

  const handleAcceptNecessary = () => {
    localStorage.setItem("awayna-cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }))
    closeBanner()
  }

  const closeBanner = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative bg-foreground text-background rounded-2xl p-6 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleAcceptNecessary}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-background/10 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Content */}
            <div className="flex-1 pr-8 md:pr-0">
              <h3 className="text-lg font-semibold mb-2">
                Tu privacidad importa
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                Usamos cookies para mejorar tu experiencia, analizar el trafico y personalizar el contenido. 
                Al aceptar, nos ayudas a ofrecerte los mejores viajes.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                variant="outline"
                onClick={handleAcceptNecessary}
                className="border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                Solo necesarias
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Aceptar todas
              </Button>
            </div>
          </div>

          {/* Minimal link */}
          <div className="mt-4 pt-4 border-t border-background/10">
            <a 
              href="/politica-cookies" 
              className="text-xs text-background/50 hover:text-background/70 transition-colors"
            >
              Mas informacion sobre nuestra politica de cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getLocalizedDestinations } from "@/lib/destinations-data"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"

export function Header() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const otherLocale = locale === "es" ? "en" : "es"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const destinations = getLocalizedDestinations(locale)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-primary shadow-lg" 
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? "/logos/awayna-blanco.svg" : "/logos/awayna-rojo.svg"}
              alt="Awayna"
              width={140}
              height={50}
              className="h-15 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`flex items-center gap-1 ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : ""}`}
                >
                  <span>{t("destinations")}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {destinations.map((dest) => (
                  <DropdownMenuItem key={dest.slug} asChild>
                    <Link href={`/destinos/${dest.slug}`} className="flex items-center justify-between">
                      {dest.name}
                      {dest.comingSoon && (
                        <span className="text-xs text-primary font-medium ml-2">{t("comingSoon")}</span>
                      )}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className={scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : ""} asChild>
              <Link href="/sobre-nosotros">{t("about")}</Link>
            </Button>
            
            <Button variant="ghost" className={scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : ""} asChild>
              <Link href="/contacto">{t("contact")}</Link>
            </Button>

            {/* Language switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className={`ml-1 flex items-center gap-1 text-sm font-semibold px-2.5 py-1.5 rounded-lg border transition-colors ${
                scrolled
                  ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${scrolled ? "border-primary-foreground/20" : "border-border/50"}`}>
            <div className="flex flex-col gap-2">
              <div className={`px-3 py-2 text-sm font-medium ${scrolled ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t("destinations")}</div>
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinos/${dest.slug}`}
                  className={`px-6 py-2 text-sm rounded-lg flex items-center justify-between ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dest.name}
                  {dest.comingSoon && (
                    <span className="text-xs text-primary font-medium">{t("comingSoon")}</span>
                  )}
                </Link>
              ))}
              <div className={`border-t my-2 ${scrolled ? "border-primary-foreground/20" : "border-border/50"}`} />
              <Link href="/como-funciona" className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-2 ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>
                <Compass className="h-4 w-4" />
                Cómo funciona Awayna
              </Link>
              <Link href="/sobre-nosotros" className={`px-3 py-2 text-sm font-medium rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>
                {t("about")}
              </Link>
              <Link href="/contacto" className={`px-3 py-2 text-sm font-medium rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>
                {t("contact")}
              </Link>
              <div className={`border-t my-2 ${scrolled ? "border-primary-foreground/20" : "border-border/50"}`} />
              <Link
                href={pathname}
                locale={otherLocale}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-2 ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`}
              >
                <span className={`text-xs px-2 py-0.5 rounded border font-bold ${scrolled ? "border-primary-foreground/40" : "border-border"}`}>
                  {otherLocale.toUpperCase()}
                </span>
                {otherLocale === "en" ? "Switch to English" : "Cambiar a Español"}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

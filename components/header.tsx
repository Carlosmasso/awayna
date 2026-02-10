"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
                  <span>Destinos</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/destinos/filipinas">Filipinas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinos/vietnam">Vietnam</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinos/tailandia">Tailandia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinos/japon">Japon</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinos/islandia">Islandia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/destinos/costa-rica">Costa Rica</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className={scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : ""} asChild>
              <Link href="/sobre-nosotros">Conócenos</Link>
            </Button>
            
            <Button variant="ghost" className={scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : ""} asChild>
              <Link href="/contacto">Contacto</Link>
            </Button>
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
              <div className={`px-3 py-2 text-sm font-medium ${scrolled ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Destinos</div>
              <Link href="/destinos/filipinas" className={`px-6 py-2 text-sm rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>Filipinas</Link>
              <Link href="/destinos/vietnam" className={`px-6 py-2 text-sm rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>Vietnam</Link>
              <Link href="/destinos/tailandia" className={`px-6 py-2 text-sm rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>Tailandia</Link>
              <Link href="/destinos/japon" className={`px-6 py-2 text-sm rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>Japon</Link>
              <Link href="/destinos/islandia" className={`px-6 py-2 text-sm rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>Islandia</Link>
              <Link href="/destinos/costa-rica" className={`px-6 py-2 text-sm rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>Costa Rica</Link>
              <div className={`border-t my-2 ${scrolled ? "border-primary-foreground/20" : "border-border/50"}`} />
              <Link href="/#como-funciona" className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-2 ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>
                <Compass className="h-4 w-4" />
                Viajar con nosotros
              </Link>
              <Link href="/sobre-nosotros" className={`px-3 py-2 text-sm font-medium rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>
                Conócenos
              </Link>
              <Link href="/contacto" className={`px-3 py-2 text-sm font-medium rounded-lg ${scrolled ? "text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

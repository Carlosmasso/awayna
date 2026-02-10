import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react"

const footerLinks = {
  soporte: [
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
    { name: "Politica de cancelacion", href: "#" },
    { name: "Terminos y condiciones", href: "#" },
    // { name: "Privacidad", href: "#" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logos/awayna-peach.svg"
                alt="Awayna"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Viajes en grupo para jovenes aventureros. Descubre el mundo con gente como tu y crea recuerdos que duraran toda la vida.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@awayna.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Madrid, Espana</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Info</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2026 Awayna. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              Terminos
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

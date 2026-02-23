import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { phones } from "@/lib/info";

export const metadata: Metadata = {
  title: "Contacto | Awayna - Escríbenos",
  description:
    "¿Tienes dudas sobre nuestros viajes? Contáctanos y resolveremos todas tus preguntas. Estamos aquí para ayudarte a planear tu próxima aventura.",
  keywords: "contacto awayna, consultas viajes, información viajes grupo",
  openGraph: {
    title: "Contacto | Awayna",
    description: "Escríbenos y te ayudaremos con tu próximo viaje",
    type: "website",
  },
};

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Hablemos de tu próximo viaje
                </h1>
                <p className="text-lg text-muted-foreground">
                  ¿Tienes alguna duda? Escríbenos y te responderemos lo antes
                  posible. Estamos aquí para ayudarte a vivir la aventura que
                  siempre has soñado.
                </p>
              </div>

              {/* Información de contacto */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:hola@awayna.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@awayna.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  {phones.map(({number}) => (
                    <a
                      key={number}
                      href={`https://wa.me/${number.replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {number}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">
                    Madrid, España
                  </p>
                </div>
              </div>

              {/* Formulario */}
              <form className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nombre *
                      </label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="apellidos"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Apellidos *
                      </label>
                      <Input
                        id="apellidos"
                        type="text"
                        placeholder="Tus apellidos"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+34 123 456 789"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="destino"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Destino de interés
                    </label>
                    <select
                      id="destino"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecciona un destino</option>
                      <option value="tailandia">Tailandia</option>
                      <option value="vietnam">Vietnam</option>
                      <option value="filipinas">Filipinas</option>
                      <option value="japon">Japón</option>
                      <option value="islandia">Islandia</option>
                      <option value="costa-rica">Costa Rica</option>
                      <option value="otro">Otro destino</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      rows={6}
                      placeholder="Cuéntanos qué necesitas..."
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Enviar mensaje
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de
                    privacidad
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

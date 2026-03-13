import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Awayna",
  description:
    "Información sobre el uso de cookies en awayna.com. Qué son, qué tipos usamos y cómo puedes gestionarlas.",
  keywords: "política cookies, cookies awayna, privacidad, gdpr",
  openGraph: {
    title: "Política de Cookies | Awayna",
    description: "Cómo usamos las cookies en awayna.com.",
    type: "website",
  },
};

const cookieTypes = [
  {
    type: "Cookies técnicas o esenciales",
    required: true,
    description:
      "Son imprescindibles para que el sitio web funcione correctamente. Sin ellas, ciertas partes de la web no funcionarían. No requieren tu consentimiento.",
    examples: [
      "Gestión de sesión y navegación",
      "Recordar preferencias básicas (modo oscuro, idioma)",
      "Seguridad y prevención de fraude",
    ],
  },
  {
    type: "Cookies analíticas",
    required: false,
    description:
      "Nos permiten entender cómo los visitantes interactúan con la web: qué páginas visitan, cuánto tiempo permanecen, desde dónde llegan. Con esta información mejoramos el sitio. Los datos son anónimos y agregados.",
    examples: [
      "Google Analytics: páginas vistas, tiempo en sitio, origen del tráfico",
      "Análisis de rendimiento y errores",
    ],
  },
  {
    type: "Cookies de marketing o publicitarias",
    required: false,
    description:
      "Se utilizan para mostrarte anuncios relevantes en otras webs y redes sociales basados en tus intereses. También nos ayudan a medir la efectividad de nuestras campañas.",
    examples: [
      "Meta Pixel (Facebook / Instagram Ads)",
      "Google Ads / remarketing",
      "Seguimiento de conversiones",
    ],
  },
  {
    type: "Cookies de terceros",
    required: false,
    description:
      "Algunas funcionalidades del sitio (vídeos embebidos, mapas, botones de redes sociales) pueden instalar cookies de terceros. No controlamos directamente estas cookies; te recomendamos revisar las políticas de cada servicio.",
    examples: [
      "YouTube (vídeos embebidos)",
      "Google Maps",
      "Botones de compartir en redes sociales",
    ],
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Política de cookies
            </h1>
            <p className="text-lg text-muted-foreground">
              Última actualización: marzo de 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">

            {/* Intro */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                En <strong className="text-foreground">Awayna</strong> usamos cookies y tecnologías similares en nuestra web (<strong className="text-foreground">awayna.com</strong>). Esta página explica qué son, qué tipos utilizamos y cómo puedes controlarlas. Queremos ser transparentes al respecto porque creemos que tú debes decidir.
              </p>
            </div>

            {/* What are cookies */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">¿Qué son las cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, móvil o tablet) cuando visitas una web. Sirven para que el sitio recuerde información sobre tu visita: preferencias, configuración o actividad. Algunas son necesarias para que la web funcione; otras son opcionales y requieren tu consentimiento.
              </p>
            </div>

            {/* Cookie types */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-5">Tipos de cookies que usamos</h2>
              <div className="space-y-4">
                {cookieTypes.map((cookie) => (
                  <div key={cookie.type} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-foreground">{cookie.type}</h3>
                      <span
                        className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                          cookie.required
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {cookie.required ? "Siempre activas" : "Opcionales"}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {cookie.description}
                    </p>
                    <ul className="space-y-1">
                      {cookie.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How long */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">¿Cuánto tiempo permanecen?</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Según su duración, las cookies pueden ser:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong className="text-foreground">De sesión:</strong> se eliminan automáticamente cuando cierras el navegador.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong className="text-foreground">Persistentes:</strong> permanecen en tu dispositivo durante un período determinado (días, meses o hasta que las elimines manualmente).</span>
                </li>
              </ul>
            </div>

            {/* How to manage */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">¿Cómo gestionar o eliminar las cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tienes el control total sobre las cookies. Puedes aceptarlas, rechazarlas o configurarlas en cualquier momento desde el banner de cookies que aparece al entrar en la web, o directamente desde la configuración de tu navegador:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {[
                  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" },
                  { name: "Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
                  { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
                ].map((browser) => (
                  <li key={browser.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <a
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                Ten en cuenta que bloquear o eliminar ciertas cookies puede afectar al funcionamiento del sitio.
              </p>
            </div>

            {/* Legal basis */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Base legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                El uso de cookies en esta web está regulado por el <strong className="text-foreground">Reglamento General de Protección de Datos (RGPD)</strong> de la Unión Europea y la <strong className="text-foreground">Ley de Servicios de la Sociedad de la Información (LSSI)</strong>. Las cookies técnicas no requieren consentimiento; las analíticas y de marketing sí.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Actualizaciones de esta política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta política de cookies para reflejar cambios en las cookies que utilizamos o por otros motivos operativos, legales o normativos. Cuando hagamos cambios, actualizaremos la fecha en la parte superior de esta página.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-secondary/40 border border-border px-8 py-10 text-center">
              <h2 className="text-xl font-bold text-foreground mb-2">¿Tienes preguntas?</h2>
              <p className="text-muted-foreground mb-5">
                Si quieres saber más sobre cómo tratamos tus datos o tienes cualquier duda sobre esta política, escríbenos.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3 hover:bg-primary/90 transition-colors"
              >
                Contactar con Awayna
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

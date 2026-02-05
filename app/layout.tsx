import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

export const metadata: Metadata = {
  title: 'Awayna | Viajes en Grupo para Aventureros 25-45 años',
  description: 'Descubre el mundo con gente como tu. Awayna organiza viajes en grupo auténticos para jóvenes aventureros de 25 a 45 años. Experiencias reales, conexiones genuinas.',
  generator: 'v0.app',
  keywords: ['viajes en grupo', 'viajes aventura', 'viajes experienciales', 'tours para jóvenes adultos', 'travel groups', 'gap year', 'viajes colaborativos'],
  authors: [{ name: 'Awayna', url: 'https://awayna.com' }],
  creator: 'Awayna Team',
  publisher: 'Awayna',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://awayna.com',
    siteName: 'Awayna',
    title: 'Awayna | Viajes en Grupo Auténticos para Aventureros',
    description: 'Viaja con gente como tú. Grupos reducidos, experiencias reales, conexiones genuinas. Descubre destinos como Tailandia, Vietnam, Filipinas, Japón, Islandia y Costa Rica.',
    images: [
      {
        url: '/images/hero-adventure.jpg',
        width: 1200,
        height: 630,
        alt: 'Awayna - Viajes en Grupo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awayna | Viajes en Grupo Auténticos',
    description: 'Descubre el mundo con gente como tu. Grupos reducidos, experiencias reales.',
    images: ['/images/hero-adventure.jpg'],
    creator: '@awayna_viajes',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: 'https://awayna.com',
    languages: {
      es: 'https://awayna.com',
      en: 'https://awayna.com/en',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://awayna.com" />
        <link rel="alternate" hrefLang="es" href="https://awayna.com" />
        <link rel="alternate" hrefLang="en" href="https://awayna.com/en" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

export const metadata: Metadata = {
  title: 'Awayna | Viajes en Grupo para Aventureros',
  description: 'Descubre el mundo con gente como tu. Awayna organiza viajes en grupo para jovenes aventureros de 25 a 45 anos.',
  generator: 'v0.app',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

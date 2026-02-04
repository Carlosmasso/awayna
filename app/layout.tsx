import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

// Import New Order font from Google Fonts
import localFont from 'next/font/local'

const newOrder = localFont({
  src: [
    {
      path: '../public/fonts/new-order-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/new-order-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-new-order',
})

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
      <body className={`${newOrder.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

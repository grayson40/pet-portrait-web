import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PetPortraitAI - Perfect Pet Photos',
  description: 'Capture perfect photos of your pets with AI-powered features, smart sound system, and automatic caption generation.',
  openGraph: {
    title: 'PetPortraitAI - Perfect Pet Photos',
    description: 'Capture perfect photos of your pets with AI-powered features',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 
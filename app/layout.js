import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Aura Ceilings — Bespoke Stretch & Lighting Ceilings, UK',
  description: 'Flawless stretch & integrated lighting ceilings installed in 1 day. No dust, no mess, premium certified materials. Fixed quote, free home survey.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased bg-mist text-ink">
        {children}
      </body>
    </html>
  )
}

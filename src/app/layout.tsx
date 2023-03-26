import './globals.css'

import Navigation from '@/app/navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Footer from '@/app/Footer'

export const metadata:Metadata = {
  title: {
    default: 'BPHN Public Dashboard',
    template: '%s | Badan Pembinaan Hukum Nasional'
  },
  description: 'Public Dashboard terkait Pembinaan Hukum Nasional',
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

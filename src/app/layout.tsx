import './globals.css'

import Navigation from '@/app/navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Footer from '@/app/Footer'

export const metadata:Metadata = {
  title: {
    default: 'Data Legislasi',
    template: '%s | a NextJS 13 appDir demo'
  },
  description: 'Data Legislasi - a NextJS 13 appDir demo (beta)',
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

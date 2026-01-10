import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Concordia House - Student Accommodation in Komani',
  description: 'Exclusive student residence in Komani, South Africa. NSFAS accredited (pending), modern facilities, 1.5km from Walter Sisulu University. Apply now for 2024.',
  keywords: 'student accommodation, Komani, Walter Sisulu University, NSFAS, student residence, Komani accommodation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-gray-50 antialiased`}>
        <Header />
        <main className="flex-grow relative">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}


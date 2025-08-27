import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HarTech Solutions - Empowering Your Business with Cutting-Edge Tech Solutions',
  description: 'Professional IT services, networking solutions, and tech support for businesses in Regina, SK. We speak human and IT.',
  keywords: 'IT services, networking, system integration, managed IT, small business IT, Regina Saskatchewan',
  authors: [{ name: 'HarTech Solutions' }],
  metadataBase: new URL('https://hartechsolutions.ca'),
  openGraph: {
    title: 'HarTech Solutions - Professional IT Services',
    description: 'Empowering your business with cutting-edge tech solutions. We speak human and IT.',
    url: 'http://hartechsolutions.ca',
    siteName: 'HarTech Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HarTech Solutions - IT Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HarTech Solutions - Professional IT Services',
    description: 'Empowering your business with cutting-edge tech solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Calc App - Modern Calculator',
  description: 'A sleek and modern calculator app with light and dark mode support. Perform basic math operations with a beautiful, user-friendly interface.',
  keywords: ['calculator', 'math', 'arithmetic', 'dark mode', 'light mode'],
  authors: [{ name: 'Calc App Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/calculator-icon.svg',
    apple: '/calculator-icon.svg'
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Calc App - Modern Calculator',
    description: 'A sleek and modern calculator app with light and dark mode support',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary',
    title: 'Calc App - Modern Calculator',
    description: 'A sleek and modern calculator app with light and dark mode support'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body 
        className={`${inter.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <ThemeToggle />
            <main className="flex-1 flex items-center justify-center p-4">
              {children}
            </main>
            <footer className="text-center py-4 text-sm text-slate-600 dark:text-slate-400">
              <p>&copy; 2024 Calc App. Built with Next.js</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

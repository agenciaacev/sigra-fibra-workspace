import type { Metadata } from 'next'
import 'aos/dist/aos.css'
import './globals.css'
import LayoutShell from '@/components/LayoutShell'
import AosInit from '@/components/AosInit'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'siga-fibra',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AosInit />
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  )
}

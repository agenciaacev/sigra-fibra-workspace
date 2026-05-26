import type { Metadata } from 'next'
import 'aos/dist/aos.css'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
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
          <Navbar />
          <div className="pt-[67px]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCheckout = pathname?.includes('/checkout')

  return (
    <>
      {!isCheckout && <Navbar />}
      <div className={isCheckout ? '' : 'pt-[67px]'}>{children}</div>
      {!isCheckout && <Footer />}
    </>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import HeroBanner, { BannerSlide } from '@/components/shared/HeroBanner'
import QuickLinksSection from '@/components/home/QuickLinksSection'
import CtaBanner from '@/components/home/CtaBanner'
const banner1 = '/img/1.jpg'
const banner2 = '/img/2.jpg'
const banner3 = '/img/3.jpg'
const banner4 = '/img/4.jpg'

export default function PFHome() {
  const router = useRouter()

  const slides: BannerSlide[] = [
    {
      image: banner1,
      imageAlt: 'Oferta Internet Fibra 600Mb',
      onClick: () => router.push('/pessoa-fisica/internet-fibra'),
    },
    {
      image: banner2,
      imageAlt: 'Plano 1 Giga',
      onClick: () => router.push('/pessoa-fisica/internet-fibra'),
    },
    {
      image: banner3,
      imageAlt: 'Planos de Celular',
      onClick: () => router.push('/pessoa-fisica/celular/pre-pago'),
    },
     {
      image: banner4,
      imageAlt: 'Promoção Especial',
      onClick: () => router.push('/pessoa-fisica/celular/pre-pago'),
    },
  ]

  return (
    <div className="font-sans">
      <HeroBanner slides={slides} accentColor="#27CAA3" autoPlayInterval={6000} showArrows={false} />
      <QuickLinksSection />
      <CtaBanner />
    </div>
  )
}

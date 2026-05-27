'use client'

import { useRouter } from 'next/navigation'
import HeroBanner, { BannerSlide } from '@/components/shared/HeroBanner'
import QuickLinksEmpresa from '@/components/empresa/QuickLinksEmpresa'
import PlanosInternetEmpresaSection from '@/components/empresa/PlanosInternetEmpresaSection'
import ChipMovelEmpresaSection from '@/components/empresa/ChipMovelEmpresaSection'
import FixoEmpresaHomeSection from '@/components/empresa/FixoEmpresaHomeSection'
import CtaBannerEmpresa from '@/components/empresa/CtaBannerEmpresa'
const banner1 = '/img/1.jpg'
const banner2 = '/img/2.jpg'
const banner3 = '/img/3.jpg'
const banner4 = '/img/4.jpg'


export default function EmpresaHome() {
  const router = useRouter()


  const slides: BannerSlide[] = [
    
    {
      image: banner2,
      imageAlt: 'Plano 1 Giga',
      onClick: () => router.push('/pessoa-fisica/internet-fibra'),
    },
    {
      image: banner1,
      imageAlt: 'Oferta Internet Fibra 600Mb',
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
      <HeroBanner slides={slides} accentColor="#03C2C3" autoPlayInterval={6000} showArrows={false} />
      <QuickLinksEmpresa />
      <PlanosInternetEmpresaSection />
      <ChipMovelEmpresaSection />
      <FixoEmpresaHomeSection />
      <CtaBannerEmpresa />
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import HeroBanner, { BannerSlide } from '@/components/shared/HeroBanner'

export default function HomeBanner() {
  const router = useRouter()

  const slides: BannerSlide[] = [
    { image: '/img/banners/residencial/amigoindica.png',   imageAlt: 'Amigo Indica',    onClick: () => router.push('/pessoa-fisica/amigo-indica')    },
    { image: '/img/banners/residencial/internetfibra.png', imageAlt: 'Internet Fibra',  onClick: () => router.push('/pessoa-fisica/internet-fibra')  },
  ]

  return (
    <HeroBanner slides={slides} accentColor="#27CAA3" autoPlayInterval={6000} showArrows={false} aspectRatio="19/4" />
  )
}

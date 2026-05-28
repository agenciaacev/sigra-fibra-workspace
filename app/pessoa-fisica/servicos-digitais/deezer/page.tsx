import HeroPrimeVideo from '@/components/primevideo/HeroPrimeVideo'
import CatalogoPrimeVideo from '@/components/primevideo/CatalogoPrimeVideo'
import BeneficiosPrimeVideo from '@/components/primevideo/BeneficiosPrimeVideo'
import AtivacaoPrimeVideo from '@/components/primevideo/AtivacaoPrimeVideo'

export default function PrimeVideo() {
  return (
    <div className="font-sans">
      <HeroPrimeVideo />
      <CatalogoPrimeVideo />
      <BeneficiosPrimeVideo />
      <AtivacaoPrimeVideo />
    </div>
  )
}

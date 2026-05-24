import HeroInternetFibra from '@/components/internet-fibra/HeroInternetFibra'
import PlanosInternetSection from '@/components/home/PlanosInternetSection'
import DiferenciaisInternetFibra from '@/components/internet-fibra/DiferenciaisInternetFibra'

export default function InternetFibra() {
  return (
    <div className="font-sans">
      <HeroInternetFibra />
      <div id="planos">
        <PlanosInternetSection />
      </div>
      <DiferenciaisInternetFibra />
    </div>
  )
}

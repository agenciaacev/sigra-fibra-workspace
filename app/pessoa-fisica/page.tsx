import HomeBanner from '@/components/home/HomeBanner'
import QuickLinksSection from '@/components/home/QuickLinksSection'
import PlanosInternetSection from '@/components/home/PlanosInternetSection'
import StreamingSection from '@/components/home/StreamingSection'
import AppEcosystemSection from '@/components/home/AppEcosystemSection'
import AmigoIndicaSection from '@/components/home/AmigoIndicaSection'
import ChipMovelSection from '@/components/home/ChipMovelSection'
import CtaBanner from '@/components/home/CtaBanner'

export default function PFHome() {
  return (
    <div className="font-sans">
      <HomeBanner />
      <QuickLinksSection />
      <PlanosInternetSection />
      <StreamingSection />
      <AppEcosystemSection />
      <AmigoIndicaSection />
      <ChipMovelSection />
      <CtaBanner />
    </div>
  )
}

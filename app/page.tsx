import HomeBanner from '@/components/home/HomeBanner'
import QuickLinksSection from '@/components/home/QuickLinksSection'
import PlanosInternetSection from '@/components/home/PlanosInternetSection'
import StreamingSection from '@/components/home/StreamingSection'
import ChipMovelSection from '@/components/home/ChipMovelSection'
import CtaBanner from '@/components/home/CtaBanner'

export default function PFHome() {
  return (
    <div className="font-sans">
      <HomeBanner />
      <QuickLinksSection />
      <PlanosInternetSection />
      <StreamingSection />
      <ChipMovelSection />
      <CtaBanner />
    </div>
  )
}

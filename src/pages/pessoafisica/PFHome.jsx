import HeroSection from '../../components/home/HeroSection'
import QuickLinksSection from '../../components/home/QuickLinksSection'
import CtaBanner from '../../components/home/CtaBanner'

export default function PFHome() {
  return (
    <div className="font-sans">
      <HeroSection />
      <QuickLinksSection />
      <CtaBanner />
    </div>
  )
}

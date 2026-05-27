import HeroFixo from '@/components/fixo/HeroFixo'
import BeneficiosFixoSection from '@/components/fixo/BeneficiosFixoSection'
import PortabilidadeFixoSection from '@/components/fixo/PortabilidadeFixoSection'
import FaqFixoSection from '@/components/fixo/FaqFixoSection'

export default function Fixo() {
  return (
    <div className="font-sans">
      <HeroFixo />
      <BeneficiosFixoSection />
      <PortabilidadeFixoSection />
      <FaqFixoSection />
    </div>
  )
}

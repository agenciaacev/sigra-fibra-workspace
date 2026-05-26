import HeroMovel from '@/components/movel/HeroMovel'
import PlanosMovelSection from '@/components/movel/PlanosMovelSection'
import BeneficiosMovelSection from '@/components/movel/BeneficiosMovelSection'
import PortabilidadeSection from '@/components/movel/PortabilidadeSection'

export default function TelefoniaCelular() {
  return (
    <div className="font-sans">
      <HeroMovel />
      <PlanosMovelSection />
      <BeneficiosMovelSection />
      <PortabilidadeSection />
    </div>
  )
}

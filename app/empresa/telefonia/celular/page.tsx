import HeroMovelEmpresa from '@/components/movel/HeroMovelEmpresa'
import PlanosMovelSectionEmpresa from '@/components/movel/PlanosMovelSectionEmpresa'
import BeneficiosMovelSectionEmpresa from '@/components/movel/BeneficiosMovelSectionEmpresa'
import PortabilidadeSectionEmpresa from '@/components/movel/PortabilidadeSectionEmpresa'

export default function TelefoniaCelular() {
  return (
    <div className="font-sans">
      <HeroMovelEmpresa />
      <PlanosMovelSectionEmpresa />
      <BeneficiosMovelSectionEmpresa />
      <PortabilidadeSectionEmpresa />
    </div>
  )
}

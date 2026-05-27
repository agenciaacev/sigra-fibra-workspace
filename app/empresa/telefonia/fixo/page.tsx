import HeroFixoEmpresa from '@/components/fixo/HeroFixoEmpresa'
import BeneficiosFixoEmpresaSection from '@/components/fixo/BeneficiosFixoEmpresaSection'
import ComoContratarFixoEmpresa from '@/components/fixo/ComoContratarFixoEmpresa'
import FaqFixoEmpresaSection from '@/components/fixo/FaqFixoEmpresaSection'

export default function TelefoniaFixo() {
  return (
    <div className="font-sans">
      <HeroFixoEmpresa />
      <BeneficiosFixoEmpresaSection />
      <ComoContratarFixoEmpresa />
      <FaqFixoEmpresaSection />
    </div>
  )
}

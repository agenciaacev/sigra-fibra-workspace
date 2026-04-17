import HeroLinkDedicado from '../../components/linkdedicado/HeroLinkDedicado'
import DiferenciaisLinkDedicado from '../../components/linkdedicado/DiferenciaisLinkDedicado'
import InfraestruturaLinkDedicado from '../../components/linkdedicado/InfraestruturaLinkDedicado'
import DorLinkDedicado from '../../components/linkdedicado/DorLinkDedicado'
import CtaLinkDedicado from '../../components/linkdedicado/CtaLinkDedicado'

export default function LinkDedicado() {
  return (
    <div className="font-sans">
      <HeroLinkDedicado />
      <DiferenciaisLinkDedicado />
      <InfraestruturaLinkDedicado />
      <DorLinkDedicado />
      <CtaLinkDedicado />
    </div>
  )
}

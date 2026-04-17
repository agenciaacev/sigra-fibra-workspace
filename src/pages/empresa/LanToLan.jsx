import HeroLanToLan from '../../components/lantolan/HeroLanToLan'
import DiferenciaisLanToLan from '../../components/lantolan/DiferenciaisLanToLan'
import InfraestruturaLanToLan from '../../components/lantolan/InfraestruturaLanToLan'
import DorLanToLan from '../../components/lantolan/DorLanToLan'
import CtaLanToLan from '../../components/lantolan/CtaLanToLan'

export default function LanToLan() {
  return (
    <div className="font-sans">
      <HeroLanToLan />
      <DiferenciaisLanToLan />
      <InfraestruturaLanToLan />
      <DorLanToLan />
      <CtaLanToLan />
    </div>
  )
}

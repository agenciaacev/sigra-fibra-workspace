import HeroHboMax from '../../components/hbomax/HeroHboMax'
import ApresentacaoHboMax from '../../components/hbomax/ApresentacaoHboMax'
import PlanosHboMax from '../../components/hbomax/PlanosHboMax'
import VantagensHboMax from '../../components/hbomax/VantagensHboMax'
import CatalogoHboMax from '../../components/hbomax/CatalogoHboMax'
import BeneficiosSigaHboMax from '../../components/hbomax/BeneficiosSigaHboMax'
import ComoAcessarHboMax from '../../components/hbomax/ComoAcessarHboMax'

export default function HboMax() {
  return (
    <div className="font-sans">
      <HeroHboMax />
      <ApresentacaoHboMax />
      <PlanosHboMax />
      <VantagensHboMax />
      <CatalogoHboMax />
      <BeneficiosSigaHboMax />
      <ComoAcessarHboMax />
    </div>
  )
}

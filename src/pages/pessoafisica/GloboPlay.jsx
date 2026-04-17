import HeroGloboPlay from '../../components/globoplay/HeroGloboPlay'
import PlanosGloboPlay from '../../components/globoplay/PlanosGloboPlay'
import BeneficiosSigaGloboPlay from '../../components/globoplay/BeneficiosSigaGloboPlay'
import ConteudoFamiliaGloboPlay from '../../components/globoplay/ConteudoFamiliaGloboPlay'
import VantagensGloboPlay from '../../components/globoplay/VantagensGloboPlay'
import CatalogoGloboPlay from '../../components/globoplay/CatalogoGloboPlay'
import ComoAcessarGloboPlay from '../../components/globoplay/ComoAcessarGloboPlay'

export default function GloboPlay() {
  return (
    <div className="font-sans">
      <HeroGloboPlay />
      <PlanosGloboPlay />
      <BeneficiosSigaGloboPlay />
      <ConteudoFamiliaGloboPlay />
      <VantagensGloboPlay />
      <CatalogoGloboPlay />
      <ComoAcessarGloboPlay />
    </div>
  )
}

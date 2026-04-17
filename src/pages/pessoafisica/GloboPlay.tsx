import HeroGloboPlay from '../../components/globoplay/HeroGloboPlay'
import PlanosGloboPlay from '../../components/globoplay/PlanosGloboPlay'
import ConteudoFamiliaGloboPlay from '../../components/globoplay/ConteudoFamiliaGloboPlay'
import CatalogoGloboPlay from '../../components/globoplay/CatalogoGloboPlay'
import VantagensGloboPlay from '../../components/globoplay/VantagensGloboPlay'
import BeneficiosSigaGloboPlay from '../../components/globoplay/BeneficiosSigaGloboPlay'
import ComoAcessarGloboPlay from '../../components/globoplay/ComoAcessarGloboPlay'

export default function GloboPlay() {
  return (
    <div className="font-sans">
      <HeroGloboPlay />
      <PlanosGloboPlay />
      <ConteudoFamiliaGloboPlay />
      <CatalogoGloboPlay />
      <VantagensGloboPlay />
      <BeneficiosSigaGloboPlay />
      <ComoAcessarGloboPlay />
    </div>
  )
}

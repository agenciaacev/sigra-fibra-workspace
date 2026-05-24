import HeroHipervelocidade from '@/components/hipervelocidade/HeroHipervelocidade'
import PlanosHiper from '@/components/hipervelocidade/PlanosHiper'
import ParaQuemHiper from '@/components/hipervelocidade/ParaQuemHiper'

export default function Hipervelocidade() {
  return (
    <div className="font-sans">
      <HeroHipervelocidade />
      <div id="planos-hiper">
        <PlanosHiper />
      </div>
      <ParaQuemHiper />
    </div>
  )
}

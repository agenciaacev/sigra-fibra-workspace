import React from 'react'
import HeroDisneyPlus from '../../components/disneyplus/HeroDisneyPlus'
import ApresentacaoDisneyPlus from '../../components/disneyplus/ApresentacaoDisneyPlus'
import PlanosDisneyPlus from '../../components/disneyplus/PlanosDisneyPlus'
import CatalogoDisneyPlus from '../../components/disneyplus/CatalogoDisneyPlus'
import EsportesDisneyPlus from '../../components/disneyplus/EsportesDisneyPlus'
import AtivacaoDisneyPlus from '../../components/disneyplus/AtivacaoDisneyPlus'
import FaqDisneyPlus from '../../components/disneyplus/FaqDisneyPlus'

export default function DisneyPlus() {
  return (
    <div className="font-sans">
      <HeroDisneyPlus />
      <ApresentacaoDisneyPlus />
      <PlanosDisneyPlus />
      <CatalogoDisneyPlus />
      <EsportesDisneyPlus />
      <AtivacaoDisneyPlus />
      <FaqDisneyPlus />
    </div>
  )
}

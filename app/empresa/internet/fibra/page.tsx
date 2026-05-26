import HeroInternetFibraEmpresa from '@/components/empresa/HeroInternetFibraEmpresa'
import PlanosInternetEmpresaSection from '@/components/empresa/PlanosInternetEmpresaSection'
import DiferenciaisInternetFibraEmpresa from '@/components/empresa/DiferenciaisInternetFibraEmpresa'

export default function EmpInternetFibra() {
  return (
    <div className="font-sans">
      <HeroInternetFibraEmpresa />
      <div id="planos">
        <PlanosInternetEmpresaSection />
      </div>
      <DiferenciaisInternetFibraEmpresa />
    </div>
  )
}

import HeroEmpresa from '../../components/empresa/HeroEmpresa'
import QuickLinksEmpresa from '../../components/empresa/QuickLinksEmpresa'
import CtaBannerEmpresa from '../../components/empresa/CtaBannerEmpresa'

export default function EmpresaHome() {
  return (
    <div className="font-sans">
      <HeroEmpresa />
      <QuickLinksEmpresa />
      <CtaBannerEmpresa />
    </div>
  )
}

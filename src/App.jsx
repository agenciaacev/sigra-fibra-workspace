import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

// Pessoa Física pages
import PFHome from './pages/pessoafisica/PFHome'
import InternetFibra from './pages/pessoafisica/InternetFibra'
import Fixo from './pages/pessoafisica/Fixo'
import Hipervelocidade from './pages/pessoafisica/Hipervelocidade'
import PrePago from './pages/pessoafisica/PrePago'
import Recarga from './pages/pessoafisica/Recarga'
import ControlePos from './pages/pessoafisica/ControlePos'
import DisneyPlus from './pages/pessoafisica/DisneyPlus'
import Deezer from './pages/pessoafisica/Deezer'
import GloboPlay from './pages/pessoafisica/GloboPlay'
import SkyMais from './pages/pessoafisica/SkyMais'
import HboMax from './pages/pessoafisica/HboMax'
import VejaMaisFerramentas from './pages/pessoafisica/VejaMaisFerramentas'
import CanaisAtendimentoPF from './pages/pessoafisica/CanaisAtendimento'
import SuporteTecnicoPF from './pages/pessoafisica/SuporteTecnico'
import AutoatendimentoPF from './pages/pessoafisica/Autoatendimento'

// Empresa pages
import EmpresaHome from './pages/empresa/EmpresaHome'
import EmpInternetFibra from './pages/empresa/EmpInternetFibra'
import EmpFixo from './pages/empresa/EmpFixo'
import EmpHipervelocidade from './pages/empresa/EmpHipervelocidade'
import LinkDedicado from './pages/empresa/LinkDedicado'
import LanToLan from './pages/empresa/LanToLan'
import AppsPlanos from './pages/empresa/AppsPlanos'
import TelefoniaFixo from './pages/empresa/TelefoniaFixo'
import TelefoniaCelular from './pages/empresa/TelefoniaCelular'
import Kaspersky from './pages/empresa/Kaspersky'
import Ubook from './pages/empresa/Ubook'
import CanaisAtendimentoEmp from './pages/empresa/CanaisAtendimento'
import SuporteTecnicoEmp from './pages/empresa/SuporteTecnico'
import AutoatendimentoEmp from './pages/empresa/Autoatendimento'
import BaixeApp from './pages/empresa/BaixeApp'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-[67px]">
        <Routes>
          <Route path="/" element={<Navigate to="/pessoa-fisica" replace />} />
          <Route path="/pessoa-fisica" element={<PFHome />} />
          <Route path="/pessoa-fisica/internet-fibra" element={<InternetFibra />} />
          <Route path="/pessoa-fisica/fixo" element={<Fixo />} />
          <Route path="/pessoa-fisica/hipervelocidade" element={<Hipervelocidade />} />
          <Route path="/pessoa-fisica/celular/pre-pago" element={<PrePago />} />
          <Route path="/pessoa-fisica/celular/recarga" element={<Recarga />} />
          <Route path="/pessoa-fisica/celular/controle-pos" element={<ControlePos />} />
          <Route path="/pessoa-fisica/servicos-digitais/disney-plus" element={<DisneyPlus />} />
          <Route path="/pessoa-fisica/servicos-digitais/deezer" element={<Deezer />} />
          <Route path="/pessoa-fisica/servicos-digitais/globoplay" element={<GloboPlay />} />
          <Route path="/pessoa-fisica/servicos-digitais/sky-mais" element={<SkyMais />} />
          <Route path="/pessoa-fisica/servicos-digitais/hbo-max" element={<HboMax />} />
          <Route path="/pessoa-fisica/servicos-digitais/veja-mais" element={<VejaMaisFerramentas />} />
          <Route path="/pessoa-fisica/atendimento/canais" element={<CanaisAtendimentoPF />} />
          <Route path="/pessoa-fisica/atendimento/suporte-tecnico" element={<SuporteTecnicoPF />} />
          <Route path="/pessoa-fisica/atendimento/autoatendimento" element={<AutoatendimentoPF />} />
          <Route path="/empresa" element={<EmpresaHome />} />
          <Route path="/empresa/internet/fibra" element={<EmpInternetFibra />} />
          <Route path="/empresa/internet/fixo" element={<EmpFixo />} />
          <Route path="/empresa/internet/hipervelocidade" element={<EmpHipervelocidade />} />
          <Route path="/empresa/internet/link-dedicado" element={<LinkDedicado />} />
          <Route path="/empresa/internet/lan-to-lan" element={<LanToLan />} />
          <Route path="/empresa/internet/apps-planos" element={<AppsPlanos />} />
          <Route path="/empresa/telefonia/fixo" element={<TelefoniaFixo />} />
          <Route path="/empresa/telefonia/celular" element={<TelefoniaCelular />} />
          <Route path="/empresa/servicos-digitais/kaspersky" element={<Kaspersky />} />
          <Route path="/empresa/servicos-digitais/ubook" element={<Ubook />} />
          <Route path="/empresa/atendimento/canais" element={<CanaisAtendimentoEmp />} />
          <Route path="/empresa/atendimento/suporte-tecnico" element={<SuporteTecnicoEmp />} />
          <Route path="/empresa/atendimento/autoatendimento" element={<AutoatendimentoEmp />} />
          <Route path="/empresa/atendimento/baixe-app" element={<BaixeApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

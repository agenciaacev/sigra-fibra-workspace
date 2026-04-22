import { useNavigate } from 'react-router-dom'
import HeroBanner, { BannerSlide } from '../../components/shared/HeroBanner'
import QuickLinksEmpresa from '../../components/empresa/QuickLinksEmpresa'
import CtaBannerEmpresa from '../../components/empresa/CtaBannerEmpresa'
import banner1 from '../../assets/img/1.jpg'
import banner2 from '../../assets/img/2.jpg'
import banner3 from '../../assets/img/3.jpg'
import banner4 from '../../assets/img/4.jpg'


export default function EmpresaHome() {
  const navigate = useNavigate()


  const slides: BannerSlide[] = [
    
    {
      image: banner2,
      imageAlt: 'Plano 1 Giga',
      onClick: () => navigate('/pessoa-fisica/internet-fibra'),
    },
    {
      image: banner1,
      imageAlt: 'Oferta Internet Fibra 600Mb',
      onClick: () => navigate('/pessoa-fisica/internet-fibra'),
    },
    {
      image: banner3,
      imageAlt: 'Planos de Celular',
      onClick: () => navigate('/pessoa-fisica/celular/pre-pago'),
    },
     {
      image: banner4,
      imageAlt: 'Promoção Especial',
      onClick: () => navigate('/pessoa-fisica/celular/pre-pago'),
    },
  ]

  return (
    <div className="font-sans">
      <HeroBanner slides={slides} accentColor="#03C2C3" autoPlayInterval={6000} showArrows={false} />
      <QuickLinksEmpresa />
      <CtaBannerEmpresa />
    </div>
  )
}

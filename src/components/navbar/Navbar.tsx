import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import LocationBadge from './LocationBadge'
import SegmentToggle from './SegmentToggle'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import { pfNavConfig, empresaNavConfig } from './navConfig'

type Segment = 'pf' | 'empresa'

export default function Navbar() {
  const [segment, setSegment] = useState<Segment>('pf')
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.startsWith('/empresa')) setSegment('empresa')
    else setSegment('pf')
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleSegmentChange = (seg: Segment) => {
    setSegment(seg)
    setOpenMenu(null)
    setMobileOpen(false)
    navigate(seg === 'pf' ? '/pessoa-fisica' : '/empresa')
  }

  const config = segment === 'pf' ? pfNavConfig : empresaNavConfig
  const basePath = segment === 'pf' ? '/pessoa-fisica' : '/empresa'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 1px 0 #e5e5e5' }}
      >
        <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #27CAA3, #03C2C3)' }} />

        <div className="flex items-center h-[64px] px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto gap-3 lg:gap-6">
          <Logo onClick={() => { setOpenMenu(null); setMobileOpen(false); navigate(basePath) }} />

          <div className="hidden lg:flex items-center gap-3 flex-1">
            <div className="w-px h-6 bg-gray-200 shrink-0" />
            <SegmentToggle active={segment} onChange={handleSegmentChange} />
            <div className="w-px h-6 bg-gray-200 shrink-0" />
            <div className="flex items-center gap-1">
              {config.map((item) => (
                <NavMenu
                  key={item.id}
                  item={item}
                  basePath={basePath}
                  isOpen={openMenu === item.id}
                  onToggle={(id) => setOpenMenu(openMenu === id ? null : id)}
                  onClose={() => setOpenMenu(null)}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 lg:hidden" />
          <div className="hidden md:block"><LocationBadge /></div>

          <button
            onClick={() => navigate(basePath + '/atendimento/canais')}
            className="hidden lg:block shrink-0 text-xs font-bold px-5 py-2.5 rounded-full text-white transition-all duration-200"
            style={{ background: '#27CAA3' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#03C2C3')}
            onMouseLeave={e => (e.currentTarget.style.background = '#27CAA3')}
          >
            Fale conosco
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl gap-1.5 transition-all duration-200"
            style={{ background: mobileOpen ? '#f0f0f0' : 'transparent' }}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {openMenu && <div className="fixed inset-0 z-40" onClick={() => setOpenMenu(null)} />}

      <MobileMenu
        open={mobileOpen}
        segment={segment}
        config={config}
        basePath={basePath}
        onSegmentChange={handleSegmentChange}
        onClose={() => setMobileOpen(false)}
        onNavigate={(path) => { navigate(path); setMobileOpen(false) }}
      />
    </>
  )
}

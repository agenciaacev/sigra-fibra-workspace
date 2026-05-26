'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pfLinks = [
  {
    title: 'Internet & Telefonia',
    links: [
      { label: 'Internet Fibra', to: '/pessoa-fisica/internet-fibra' },
      { label: 'Hipervelocidade', to: '/pessoa-fisica/hipervelocidade' },
      { label: 'Telefone Fixo', to: '/pessoa-fisica/fixo' },
    ],
  },
  {
    title: 'Celular',
    links: [
      { label: 'Pré Pago', to: '/pessoa-fisica/celular/pre-pago' },
      { label: 'Recarga', to: '/pessoa-fisica/celular/recarga' },
      { label: 'Controle e Pós', to: '/pessoa-fisica/celular/controle-pos' },
    ],
  },
  {
    title: 'Serviços Digitais',
    links: [
      { label: 'Disney+', to: '/pessoa-fisica/servicos-digitais/disney-plus' },
      { label: 'Globoplay', to: '/pessoa-fisica/servicos-digitais/globoplay' },
      { label: 'HBO Max', to: '/pessoa-fisica/servicos-digitais/hbo-max' },
      { label: 'SKY+', to: '/pessoa-fisica/servicos-digitais/sky-mais' },
      { label: 'Deezer', to: '/pessoa-fisica/servicos-digitais/deezer' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Canais de Atendimento', to: '/pessoa-fisica/atendimento/canais' },
      { label: 'Suporte Técnico', to: '/pessoa-fisica/atendimento/suporte-tecnico' },
      { label: 'Autoatendimento WhatsApp', to: '/pessoa-fisica/atendimento/autoatendimento' },
    ],
  },
]

const empresaLinks = [
  {
    title: 'Internet Empresarial',
    links: [
      { label: 'Internet Fibra', to: '/empresa/internet/fibra' },
      { label: 'Link Dedicado', to: '/empresa/internet/link-dedicado' },
      { label: 'Lan To Lan', to: '/empresa/internet/lan-to-lan' },
      { label: 'Hipervelocidade', to: '/empresa/internet/hipervelocidade' },
    ],
  },
  {
    title: 'Telefonia',
    links: [
      { label: 'Telefone Fixo', to: '/empresa/telefonia/fixo' },
      { label: 'Celular Corporativo', to: '/empresa/telefonia/celular' },
    ],
  },
  {
    title: 'Serviços Digitais',
    links: [
      { label: 'Kaspersky', to: '/empresa/servicos-digitais/kaspersky' },
      { label: 'Ubook', to: '/empresa/servicos-digitais/ubook' },
      { label: 'Apps dos Planos', to: '/empresa/internet/apps-planos' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Canais de Atendimento', to: '/empresa/atendimento/canais' },
      { label: 'Suporte Técnico', to: '/empresa/atendimento/suporte-tecnico' },
      { label: 'Autoatendimento WhatsApp', to: '/empresa/atendimento/autoatendimento' },
      { label: 'Baixe nosso App', to: '/empresa/atendimento/baixe-app' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const pathname = usePathname()
  const isEmpresa = pathname?.startsWith('/empresa')
  const columns = isEmpresa ? empresaLinks : pfLinks

  return (
    <footer style={{ background: 'var(--footer-bg)', transition: 'background 0.3s' }}>
      {/* Top accent bar */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #27CAA3, #03C2C3)' }} />

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <div className="mb-4">
                <Image
                  src="/img/logosiga.png"
                  alt="Siga Fibra"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: 'var(--footer-text-sub)' }}>
                Conectando pessoas e empresas com velocidade, confiança e tecnologia de ponta.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#6b7280' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(39,202,163,0.15)'
                    ;(e.currentTarget as HTMLElement).style.color = '#27CAA3'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                    ;(e.currentTarget as HTMLElement).style.color = '#6b7280'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Segment badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold self-start"
              style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.2)', color: '#27CAA3' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#27CAA3' }} />
              {isEmpresa ? 'Segmento Empresarial' : 'Segmento Pessoa Física'}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#27CAA3' }}>
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.to}
                        className="text-sm transition-colors duration-150"
                        style={{ color: 'var(--footer-text-sub)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div className="lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#27CAA3' }}>
              Fale Conosco
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/5500000000000" className="flex items-start gap-3 group">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150"
                    style={{ background: 'rgba(39,202,163,0.1)' }}
                  >
                    <svg width="15" height="15" fill="#27CAA3" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--footer-text-sub)' }}>WhatsApp</p>
                    <p className="text-sm font-semibold transition-colors duration-150" style={{ color: 'var(--footer-text)' }}>
                      (00) 00000-0000
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:contato@sigafibra.com.br" className="flex items-start gap-3 group">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(39,202,163,0.1)' }}
                  >
                    <svg width="15" height="15" fill="none" stroke="#27CAA3" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--footer-text-sub)' }}>E-mail</p>
                    <p className="text-sm font-semibold transition-colors duration-150" style={{ color: 'var(--footer-text)' }}>
                      contato@sigafibra.com.br
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(39,202,163,0.1)' }}
                >
                  <svg width="15" height="15" fill="none" stroke="#27CAA3" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--footer-text-sub)' }}>Localização</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--footer-text-sub)' }}>
                    Atendemos em toda a região com cobertura de fibra óptica
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--footer-border)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'var(--footer-text-sub)' }}>
            © {new Date().getFullYear()} Siga Fibra. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs transition-colors duration-150" style={{ color: 'var(--footer-text-sub)' }}>
              Política de Privacidade
            </a>
            <span className="w-px h-3" style={{ background: 'var(--footer-border)' }} />
            <a href="#" className="text-xs transition-colors duration-150" style={{ color: 'var(--footer-text-sub)' }}>
              Termos de Uso
            </a>
            <span className="w-px h-3" style={{ background: 'var(--footer-border)' }} />
            <Link
              href={isEmpresa ? '/pessoa-fisica' : '/empresa'}
              className="text-xs transition-colors duration-150"
              style={{ color: '#27CAA3' }}
            >
              {isEmpresa ? 'Ir para Pessoa Física' : 'Ir para Empresas'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

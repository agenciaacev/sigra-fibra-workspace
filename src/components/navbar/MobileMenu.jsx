import { useState } from 'react'

export default function MobileMenu({ open, segment, config, basePath, onSegmentChange, onClose, onNavigate }) {
  const [expandedItem, setExpandedItem] = useState(null)
  const [expandedSub, setExpandedSub] = useState(null)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden" style={{ top: '67px' }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="absolute top-0 left-0 right-0 bg-white overflow-y-auto"
        style={{ maxHeight: 'calc(100vh - 67px)' }}>

        <div className="px-4 py-4">

          {/* Segment toggle */}
          <div className="flex items-center bg-gray-100 rounded-full p-1 mb-5">
            {['pf', 'empresa'].map(seg => (
              <button
                key={seg}
                onClick={() => onSegmentChange(seg)}
                className="flex-1 py-2.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={segment === seg ? { background: '#27CAA3', color: '#fff' } : { color: '#555' }}
              >
                {seg === 'pf' ? 'Pessoa Física' : 'Empresa'}
              </button>
            ))}
          </div>

          {/* Nav items */}
          {config.map((item) => {
            const isMega = item.children && item.children[0]?.children
            const isExpanded = expandedItem === item.id

            return (
              <div key={item.id} className="mb-1">
                <button
                  onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-150"
                  style={isExpanded ? { background: '#f5f5f5', color: '#27CAA3' } : { color: '#333' }}
                >
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="mt-1 ml-2 pl-3 border-l-2 flex flex-col gap-0.5 pb-2" style={{ borderColor: '#27CAA3' }}>
                    {isMega ? (
                      item.children.map((cat) => {
                        const catExpanded = expandedSub === cat.id
                        return (
                          <div key={cat.id}>
                            <button
                              onClick={() => setExpandedSub(catExpanded ? null : cat.id)}
                              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                              style={{ color: '#27CAA3' }}
                            >
                              {cat.label}
                              <svg className={`w-3.5 h-3.5 transition-transform ${catExpanded ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {catExpanded && (
                              <div className="ml-2 flex flex-col gap-0.5">
                                {cat.children.map(child => (
                                  <button
                                    key={child.label}
                                    onClick={() => onNavigate(basePath + child.to)}
                                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all"
                                    style={child.highlight ? { color: '#27CAA3', fontWeight: 600 } : { color: '#444' }}
                                    onTouchStart={e => e.currentTarget.style.background = '#f5f5f5'}
                                    onTouchEnd={e => e.currentTarget.style.background = 'transparent'}
                                  >
                                    {child.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })
                    ) : (
                      item.children.map(child => (
                        <button
                          key={child.label}
                          onClick={() => onNavigate(basePath + child.to)}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all"
                          style={child.highlight ? { color: '#27CAA3', fontWeight: 600 } : { color: '#444' }}
                          onTouchStart={e => e.currentTarget.style.background = '#f5f5f5'}
                          onTouchEnd={e => e.currentTarget.style.background = 'transparent'}
                        >
                          {child.label}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            )
          })}

          {/* CTA */}
          <div className="mt-5 pt-5 border-t border-gray-100">
            <button
              onClick={() => onNavigate(basePath + '/atendimento/canais')}
              className="w-full font-bold py-4 rounded-2xl text-sm uppercase tracking-wide text-white"
              style={{ background: '#27CAA3' }}
            >
              Fale conosco
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'

function ChevronDown({ open }) {
  return (
    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function FlatItem({ item, basePath, onClose }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => { navigate(basePath + item.to); onClose() }}
      className="w-full text-left px-4 py-2.5 text-sm rounded-xl transition-colors duration-150 hover:bg-gray-50"
      style={item.highlight ? { color: '#27CAA3', fontWeight: 600 } : { color: '#333' }}
    >
      {item.label}
    </button>
  )
}

function CategoryColumn({ category, basePath, onClose }) {
  const navigate = useNavigate()
  return (
    <div className="min-w-[190px]">
      <div className="flex items-center gap-2 px-3 pb-3 mb-1 border-b border-gray-100">
        <span className="w-1 h-4 rounded-full shrink-0" style={{ background: '#27CAA3' }} />
        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#27CAA3' }}>
          {category.label}
        </p>
      </div>
      <div className="flex flex-col gap-0.5 pt-1">
        {category.children.map((item) => (
          <button
            key={item.label}
            onClick={() => { navigate(basePath + item.to); onClose() }}
            className="text-left px-3 py-2.5 text-sm rounded-xl transition-colors duration-150 hover:bg-gray-50"
            style={item.highlight ? { color: '#27CAA3', fontWeight: 600 } : { color: '#333' }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function NavMenu({ item, basePath, isOpen, onToggle, onClose }) {
  const isMega = item.children && item.children[0]?.children

  return (
    <div className="relative">
      <button
        onClick={() => onToggle(item.id)}
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
        style={isOpen ? { color: '#27CAA3', background: '#f5f5f5' } : { color: '#333' }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = '#f5f5f5' }}
        onMouseLeave={e => { if (!isOpen) e.currentTarget.style.background = 'transparent' }}
      >
        {item.label}
        <ChevronDown open={isOpen} />
      </button>

      {isOpen && (
        <div
          className={`absolute top-[calc(100%+10px)] left-0 bg-white rounded-2xl z-50 ${isMega ? 'flex gap-8 p-6' : 'flex flex-col gap-0.5 p-3 min-w-[240px]'}`}
          style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            border: '1px solid #e5e5e5',
            animation: 'dropIn 0.16s cubic-bezier(0.16,1,0.3,1)'
          }}
        >
          <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #27CAA3, #03C2C3)' }} />
          {isMega
            ? item.children.map(cat => <CategoryColumn key={cat.id} category={cat} basePath={basePath} onClose={onClose} />)
            : item.children.map(child => <FlatItem key={child.label} item={child} basePath={basePath} onClose={onClose} />)
          }
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}

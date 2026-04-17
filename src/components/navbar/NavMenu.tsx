import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { NavItem, NavChild } from './navConfig'

interface NavMenuProps {
  item: NavItem
  basePath: string
  isOpen: boolean
  onToggle: (id: string) => void
  onClose: () => void
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function NavMenu({ item, basePath, isOpen, onToggle, onClose }: NavMenuProps) {
  const navigate = useNavigate()
  const children = item.children as NavChild[]

  return (
    <div className="relative">
      <button
        onClick={() => onToggle(item.id)}
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
        style={isOpen ? { color: '#27CAA3', background: '#f5f5f5' } : { color: '#333' }}
        onMouseEnter={e => { if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5' }}
        onMouseLeave={e => { if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
      >
        {item.label}
        <ChevronDown open={isOpen} />
      </button>

      {isOpen && (
        <div
          className="absolute top-[calc(100%+10px)] left-0 bg-white rounded-2xl z-50 flex flex-col gap-0.5 p-3 min-w-[220px]"
          style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            border: '1px solid #e5e5e5',
            animation: 'dropIn 0.16s cubic-bezier(0.16,1,0.3,1)'
          }}
        >
          <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #27CAA3, #03C2C3)' }} />

          {children.map((child) => (
            <button
              key={child.label}
              onClick={() => { navigate(basePath + child.to); onClose() }}
              className="w-full text-left px-4 py-2.5 text-sm rounded-xl transition-colors duration-150 hover:bg-gray-50"
              style={child.highlight ? { color: '#27CAA3', fontWeight: 600 } : { color: '#333' }}
            >
              {child.label}
            </button>
          ))}
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

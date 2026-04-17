export default function SegmentToggle({ active, onChange }) {
  return (
    <div className="flex items-center shrink-0 border border-gray-200 rounded-full p-0.5 bg-white">
      <button
        onClick={() => onChange('pf')}
        className="px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200"
        style={active === 'pf' ? { background: '#27CAA3', color: '#fff' } : { color: '#555' }}
      >
        Pessoa Física
      </button>
      <button
        onClick={() => onChange('empresa')}
        className="px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200"
        style={active === 'empresa' ? { background: '#27CAA3', color: '#fff' } : { color: '#555' }}
      >
        Empresa
      </button>
    </div>
  )
}

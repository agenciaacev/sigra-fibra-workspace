export default function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-end gap-0.5 shrink-0 focus:outline-none" aria-label="Siga Fibra">
      <span className="text-[26px] font-extrabold leading-none" style={{ color: '#03C2C3', letterSpacing: '-1px' }}>
        siga
      </span>
      <span className="text-[9px] font-semibold tracking-[0.2em] uppercase mb-0.5 text-gray-400">
        fibra
      </span>
    </button>
  )
}

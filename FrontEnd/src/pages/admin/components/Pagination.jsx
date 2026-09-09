import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages, onPageChange, totalItems, startItem, endItem }) {
  const generatePages = () => {
    const pages = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      const s = Math.max(2, currentPage - 1)
      const e = Math.min(totalPages - 1, currentPage + 1)
      for (let i = s; i <= e; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
      <p className="text-[12.5px] text-[#0B2348]/40">
        Showing <span className="font-semibold text-[#0B2348]/60">{startItem}</span> to <span className="font-semibold text-[#0B2348]/60">{endItem}</span> of <span className="font-semibold text-[#0B2348]/60">{totalItems}</span> appointments
      </p>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="grid h-9 w-9 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/40 transition-colors hover:border-[#C47A0A] hover:text-[#C47A0A] disabled:opacity-30 disabled:hover:border-[#E9D8B8] disabled:hover:text-[#0B2348]/40"
        >
          <ChevronLeft size={16} />
        </button>
        {generatePages().map((p, i) =>
          p === '...' ? (
            <span key={`d-${i}`} className="px-1 text-[12px] text-[#0B2348]/30">...</span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`grid h-9 w-9 place-items-center rounded-lg text-[12.5px] font-semibold transition-colors ${
                currentPage === p
                  ? 'bg-[#C47A0A] text-white shadow-sm'
                  : 'border border-[#E9D8B8] text-[#0B2348]/50 hover:border-[#C47A0A] hover:text-[#C47A0A]'
              }`}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="grid h-9 w-9 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/40 transition-colors hover:border-[#C47A0A] hover:text-[#C47A0A] disabled:opacity-30 disabled:hover:border-[#E9D8B8] disabled:hover:text-[#0B2348]/40"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

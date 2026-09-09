import { Search, Download, ChevronDown } from 'lucide-react'
import { sessionTypes, statusOptions } from '../data'

export default function Filters({ typeFilter, setTypeFilter, statusFilter, setStatusFilter, search, setSearch }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Type Dropdown */}
      <div className="relative">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="h-10 appearance-none rounded-lg border border-[#E9D8B8] bg-white pl-3 pr-8 text-[13px] font-medium text-[#0B2348]/70 outline-none transition-colors focus:border-[#C47A0A] focus:ring-1 focus:ring-[#C47A0A]/20"
        >
          {sessionTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0B2348]/30" />
      </div>

      {/* Status Dropdown */}
      <div className="relative">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-10 appearance-none rounded-lg border border-[#E9D8B8] bg-white pl-3 pr-8 text-[13px] font-medium text-[#0B2348]/70 outline-none transition-colors focus:border-[#C47A0A] focus:ring-1 focus:ring-[#C47A0A]/20"
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0B2348]/30" />
      </div>

      {/* Date Picker */}
      <input
        type="text"
        defaultValue="May 16, 2024 - May 23, 2024"
        readOnly
        className="h-10 rounded-lg border border-[#E9D8B8] bg-white px-3 text-[13px] font-medium text-[#0B2348]/70 outline-none focus:border-[#C47A0A] focus:ring-1 focus:ring-[#C47A0A]/20"
      />

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <div className="relative min-w-[200px]">
        <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0B2348]/30" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="h-10 w-full rounded-lg border border-[#E9D8B8] bg-white pl-9 pr-3 text-[13px] text-[#0B2348]/70 outline-none placeholder:text-[#0B2348]/30 transition-colors focus:border-[#C47A0A] focus:ring-1 focus:ring-[#C47A0A]/20"
        />
      </div>

      {/* Export */}
      <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#C47A0A] px-4 text-[13px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-px hover:bg-[#b06d08]">
        <Download size={15} />
        Export
      </button>
    </div>
  )
}

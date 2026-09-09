import { Eye, MoreVertical } from 'lucide-react'

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-1.5">
      <button className="grid h-8 w-8 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/45 transition-colors hover:border-[#C47A0A] hover:text-[#C47A0A]">
        <Eye size={14} />
      </button>
      <button className="grid h-8 w-8 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/45 transition-colors hover:border-[#C47A0A] hover:text-[#C47A0A]">
        <MoreVertical size={14} />
      </button>
    </div>
  )
}

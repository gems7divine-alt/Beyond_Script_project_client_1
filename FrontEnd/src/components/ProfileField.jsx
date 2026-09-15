import { Pencil, Check, X } from 'lucide-react'
import { useState } from 'react'

export default function ProfileField({ icon: Icon, label, value, type = 'text' }) {
  const [editing, setEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  const handleSave = () => {
    setEditing(false)
  }

  const handleCancel = () => {
    setCurrentValue(value)
    setEditing(false)
  }

  return (
    <div className="mb-4 last:mb-0">
      <label className="mb-1.5 block text-[12px] font-semibold tracking-wide text-[#0B2348]/50 uppercase">
        {label}
      </label>

      {editing ? (
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C47A0A]/60">
              <Icon size={16} strokeWidth={1.8} />
            </span>
            <input
              type={type}
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              className="w-full rounded-xl border border-[#E9D8B8] bg-white py-2.5 pl-10 pr-3 text-[14px] font-medium text-[#0B2348] outline-none transition-colors focus:border-[#C47A0A]/50"
              autoFocus
            />
          </div>
          <button
            onClick={handleSave}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-100"
            aria-label="Save"
          >
            <Check size={16} strokeWidth={2} />
          </button>
          <button
            onClick={handleCancel}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
            aria-label="Cancel"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>
      ) : (
        <div className="group flex items-center justify-between rounded-xl border border-[#E9D8B8] bg-white px-3.5 py-2.5 transition-colors hover:border-[#C47A0A]/30">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 text-[#C47A0A]/60">
              <Icon size={16} strokeWidth={1.8} />
            </span>
            <span className="truncate text-[14px] font-medium text-[#0B2348]">
              {currentValue}
            </span>
          </div>
          <button
            onClick={() => setEditing(true)}
            className="flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-[12px] font-semibold text-[#C47A0A]/70 transition-colors hover:bg-[#F8EBCF]/50 hover:text-[#C47A0A]"
          >
            <Pencil size={13} strokeWidth={1.8} />
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

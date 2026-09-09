import { useState, useRef, useEffect } from 'react'
import { Bell, ChevronDown, Menu, User } from 'lucide-react'

export default function Header({ onMenuClick }) {
  const [profileOpen, setProfileOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setProfileOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="flex items-center justify-between border-b border-[#E9D8B8] bg-[#FCFAF5] px-4 py-4 sm:px-6 md:px-8">
      {/* Left */}
      <div>
        <button
          onClick={onMenuClick}
          className="mr-3 grid h-9 w-9 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/60 transition-colors hover:bg-[#F8EBCF]/30 xl:hidden"
        >
          <Menu size={18} />
        </button>
        <h1 className="text-lg font-bold text-[#0B2348] sm:text-xl">Welcome, Admin</h1>
        <p className="mt-0.5 text-[13px] text-[#0B2348]/45">
          Here&apos;s what&apos;s happening with your appointments today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button className="relative grid h-9 w-9 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/50 transition-colors hover:bg-[#F8EBCF]/30">
          <Bell size={17} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#C47A0A]" />
        </button>

        {/* Profile */}
        <div ref={ref} className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 rounded-lg border border-[#E9D8B8] px-3 py-1.5 transition-colors hover:bg-[#F8EBCF]/30"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F8EBCF] text-[#C47A0A]">
              <User size={14} strokeWidth={2} />
            </span>
            <span className="hidden text-[13px] font-semibold text-[#0B2348] sm:block">Admin</span>
            <ChevronDown size={14} className="text-[#0B2348]/40" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full z-30 mt-1.5 w-44 rounded-xl border border-[#E9D8B8] bg-white py-1.5 shadow-lg">
              <button className="w-full px-4 py-2 text-left text-[13px] font-medium text-[#0B2348]/70 transition-colors hover:bg-[#F8EBCF]/30">
                Profile Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-[13px] font-medium text-[#0B2348]/70 transition-colors hover:bg-[#F8EBCF]/30">
                Activity Log
              </button>
              <div className="my-1 h-px bg-[#E9D8B8]" />
              <button className="w-full px-4 py-2 text-left text-[13px] font-medium text-red-500 transition-colors hover:bg-red-50">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

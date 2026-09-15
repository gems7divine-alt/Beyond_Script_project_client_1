import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, BookOpen, CalendarDays, X } from 'lucide-react'
import HelpCard from './HelpCard.jsx'

const menuItems = [
  { label: 'My Profile', icon: User, to: '/profile' },
  { label: 'My Courses', icon: BookOpen, to: '/courses' },
  { label: 'My Appointments', icon: CalendarDays, to: '/appointment' },
]

export default function ProfileSidebar({ mobile = false, onClose }) {
  const location = useLocation()
  const activeItem = 'My Profile'

  const content = (
    <>
      {/* Logo area */}
      <div className="px-5 pb-2 pt-6">
        <div className="mb-1 flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C12 8 8 12 8 18C8 24 12 28 16 28C20 28 24 24 24 18C24 12 20 8 16 4Z" fill="#F8EBCF" stroke="#C47A0A" strokeWidth="1.5" />
            <path d="M16 8C14 11 12 14 12 18C12 22 14 25 16 25" stroke="#C47A0A" strokeWidth="1" fill="none" />
            <path d="M16 8C18 11 20 14 20 18C20 22 18 25 16 25" stroke="#C47A0A" strokeWidth="1" fill="none" />
          </svg>
          <div>
            <p className="font-serif text-[17px] font-bold leading-none tracking-wide text-[#0B2348]">BEYOND</p>
            <p className="font-serif text-[17px] font-bold leading-none text-[#C47A0A]">SCRIPT</p>
          </div>
        </div>
        <p className="mt-1.5 text-[10px] font-medium tracking-[0.15em] text-[#0B2348]/40 uppercase">
          REWRITE YOUR INNER STORY
        </p>
      </div>

      <div className="mx-5 my-3 h-px bg-[#E9D8B8]" />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="space-y-0.5">
          {menuItems.map((item) => {
            const isActive = item.label === activeItem
            const Icon = item.icon
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => mobile && onClose?.()}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#F8EBCF]/60 text-[#C47A0A]'
                      : 'text-[#0B2348]/70 hover:bg-[#F8EBCF]/30 hover:text-[#C47A0A]'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Help Card */}
      <div className="px-3 pb-5">
        <HelpCard />
      </div>

      {/* Mobile close */}
      {mobile && (
        <button
          onClick={onClose}
          className="mx-3 mb-4 flex items-center justify-center gap-2 rounded-lg border border-[#E9D8B8] py-2.5 text-[13px] font-semibold text-[#0B2348]/50 transition-colors hover:bg-[#F8EBCF]/30 xl:hidden"
        >
          <X size={16} />
          Close Menu
        </button>
      )}
    </>
  )

  if (mobile) {
    return <aside className="flex h-full w-72 flex-col">{content}</aside>
  }

  return (
    <aside className="hidden h-[calc(100vh-80px)] w-[275px] shrink-0 flex-col sticky top-[80px] xl:flex">
      <div className="flex h-full flex-col rounded-2xl border border-[#E9D8B8] bg-[#FCFAF5] shadow-soft">
        {content}
      </div>
    </aside>
  )
}

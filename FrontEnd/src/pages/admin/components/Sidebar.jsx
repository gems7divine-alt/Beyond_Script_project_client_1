import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Briefcase,
  CreditCard,
  BarChart3,
  Settings,
  UserCircle,
  LogOut,
  ChevronDown,
  X,
  Phone,
  Clock,
  PenLine,
  HeartHandshake,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/admin' },
  {
    label: 'Appointments',
    icon: CalendarDays,
    to: '/admin',
    sub: [
      { label: 'All Appointments', icon: CalendarDays },
      { label: 'Free Call Sessions', icon: Phone },
      { label: 'Paid 1 Hour Call Sessions', icon: Clock },
      { label: 'Handwriting Sessions', icon: PenLine },
      { label: 'Life Coaching Sessions', icon: HeartHandshake },
    ],
  },
  { label: 'Users', icon: Users, to: '/admin' },
  { label: 'Services', icon: Briefcase, to: '/admin' },
  { label: 'Payments', icon: CreditCard, to: '/admin' },
  { label: 'Reports', icon: BarChart3, to: '/admin' },
  { label: 'Settings', icon: Settings, to: '/admin' },
  { label: 'Profile', icon: UserCircle, to: '/admin' },
  { label: 'Logout', icon: LogOut, to: '/' },
]

export default function Sidebar({ mobile = false, onClose }) {
  const location = useLocation()
  const [appointmentsOpen, setAppointmentsOpen] = useState(true)
  const activeLabel = 'Dashboard'

  return (
    <aside
      className={`${
        mobile ? 'flex h-full w-72 flex-col' : 'hidden h-screen w-[275px] shrink-0 flex-col xl:flex'
      } border-r border-[#E9D8B8] bg-[#FCFAF5]`}
    >
      {/* Logo */}
      <div className="px-6 pb-2 pt-7">
        <div className="mb-1 flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C12 8 8 12 8 18C8 24 12 28 16 28C20 28 24 24 24 18C24 12 20 8 16 4Z" fill="#F8EBCF" stroke="#C47A0A" strokeWidth="1.5" />
            <path d="M16 8C14 11 12 14 12 18C12 22 14 25 16 25" stroke="#C47A0A" strokeWidth="1" fill="none" />
            <path d="M16 8C18 11 20 14 20 18C20 22 18 25 16 25" stroke="#C47A0A" strokeWidth="1" fill="none" />
          </svg>
          <div>
            <p className="font-serif text-lg font-bold leading-none tracking-wide text-[#0B2348]">BEYOND</p>
            <p className="font-serif text-lg font-bold leading-none text-[#C47A0A]">SCRIPT</p>
          </div>
        </div>
        <p className="mt-1.5 text-[10px] font-medium tracking-[0.15em] text-[#0B2348]/40 uppercase">
          REWRITE YOUR INNER STORY
        </p>
      </div>

      <div className="mx-6 my-3 h-px bg-[#E9D8B8]" />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = item.label === activeLabel
            const isSubActive = false
            const Icon = item.icon

            if (item.sub) {
              return (
                <li key={item.label}>
                  <button
                    onClick={() => setAppointmentsOpen(!appointmentsOpen)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors ${
                      isSubActive
                        ? 'bg-[#F8EBCF]/60 text-[#C47A0A]'
                        : 'text-[#0B2348]/70 hover:bg-[#F8EBCF]/30 hover:text-[#C47A0A]'
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                    <span className="flex-1 text-left">{item.label}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform ${appointmentsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {appointmentsOpen && (
                    <div className="relative ml-5 mt-0.5 space-y-0.5 border-l border-[#E9D8B8] pl-3">
                      {item.sub.map((sub) => {
                        const SubIcon = sub.icon
                        return (
                          <Link
                            key={sub.label}
                            to="/admin"
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] font-medium text-[#0B2348]/55 transition-colors hover:bg-[#F8EBCF]/30 hover:text-[#C47A0A]"
                          >
                            <SubIcon size={15} strokeWidth={1.8} />
                            {sub.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </li>
              )
            }

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

      {/* Quote Card */}
      <div className="mx-4 mb-5 rounded-xl border border-[#E9D8B8] bg-[#F8EBCF]/30 p-4">
        <svg width="24" height="18" viewBox="0 0 24 18" className="mb-2 text-[#C47A0A]/50">
          <path d="M0 18V12C0 5.4 3.6 1.2 10.8 0L11.4 2.4C7.8 3.6 5.4 6 4.8 10.8H9V18H0ZM13.2 18V12C13.2 5.4 16.8 1.2 24 0L24.6 2.4C21 3.6 18.6 6 18 10.8H22.2V18H13.2Z" fill="currentColor" />
        </svg>
        <p className="text-[12px] leading-relaxed font-medium text-[#0B2348]/60 italic">
          Every appointment<br />a step towards<br />transformation.
        </p>
        <svg width="40" height="16" viewBox="0 0 40 16" className="mt-2.5 text-[#C47A0A]/30">
          <path d="M0 12C8 4 16 0 20 0C24 0 32 4 40 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M5 14C10 8 15 5 20 5C25 5 30 8 35 14" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Mobile close */}
      {mobile && (
        <button
          onClick={onClose}
          className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-lg border border-[#E9D8B8] py-2.5 text-[13px] font-semibold text-[#0B2348]/50 transition-colors hover:bg-[#F8EBCF]/30 xl:hidden"
        >
          <X size={16} />
          Close Menu
        </button>
      )}
    </aside>
  )
}

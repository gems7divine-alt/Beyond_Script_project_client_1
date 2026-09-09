import { Calendar, Phone, Clock, PenLine, User } from 'lucide-react'

const iconMap = {
  Calendar: Calendar,
  Phone: Phone,
  Clock: Clock,
  Pen: PenLine,
  User: User,
}

const iconBgMap = {
  Calendar: 'bg-[#F8EBCF]/60 text-[#C47A0A]',
  Phone: 'bg-emerald-50 text-emerald-600',
  Clock: 'bg-purple-50 text-purple-600',
  Pen: 'bg-amber-50 text-amber-700',
  User: 'bg-blue-50 text-blue-600',
}

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon] || Calendar

  return (
    <div className="rounded-xl border border-[#E9D8B8] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="flex items-start gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${iconBgMap[stat.icon] || 'bg-[#F8EBCF]/60 text-[#C47A0A]'}`}>
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <p className="text-2xl font-bold tracking-tight text-[#0B2348]">{stat.number}</p>
          <p className="text-[13px] font-semibold text-[#0B2348]/75">{stat.title}</p>
          <p className="text-[11px] text-[#0B2348]/40">{stat.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

import { Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HelpCard() {
  return (
    <div className="rounded-2xl border border-[#E9D8B8] bg-[#FDF6EC]/60 p-5">
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#F8EBCF]">
        <Headphones size={20} className="text-[#C47A0A]" strokeWidth={1.8} />
      </div>
      <h3 className="mb-1 font-serif text-[15px] font-bold text-[#0B2348]">
        Need Help?
      </h3>
      <p className="mb-4 text-[12.5px] leading-relaxed text-[#0B2348]/55">
        We're here to support your transformation journey.
      </p>
      <Link
        to="/contact"
        className="inline-flex h-10 items-center gap-2 rounded-lg bg-gold-gradient px-5 text-[13px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
      >
        Contact Support
      </Link>
    </div>
  )
}

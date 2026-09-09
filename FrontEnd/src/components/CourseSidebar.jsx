import { Diamond } from 'lucide-react'
import { categories } from '../data/courses'

const priceOptions = [
  { id: 'all', label: 'All' },
  { id: 'free', label: 'Free' },
  { id: 'paid', label: 'Paid' },
]

export default function CourseSidebar({
  activeCategory,
  onCategoryChange,
  priceFilter,
  onPriceChange,
}) {
  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-[260px]">
      <div className="rounded-2xl border border-gold/10 bg-white p-5 shadow-soft">
        <h3 className="mb-4 font-serif text-lg font-bold text-navy">Categories</h3>
        <ul className="space-y-1">
          {categories.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => onCategoryChange(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                  activeCategory === id
                    ? 'bg-gold/10 text-gold'
                    : 'text-navy/70 hover:bg-gold/5 hover:text-navy'
                }`}
              >
                <Icon size={18} strokeWidth={2} />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-gold/10 bg-white p-5 shadow-soft">
        <h3 className="mb-4 font-serif text-lg font-bold text-navy">Price</h3>
        <div className="space-y-2.5">
          {priceOptions.map(({ id, label }) => (
            <label
              key={id}
              className="flex cursor-pointer items-center gap-3 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              <input
                type="radio"
                name="price-filter"
                checked={priceFilter === id}
                onChange={() => onPriceChange(id)}
                className="h-4 w-4 border-gold/30 text-gold accent-gold"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gold/10 bg-gradient-to-br from-gold/5 to-cream p-5 shadow-soft">
        <div className="mb-3 flex items-center gap-2 text-gold">
          <Diamond size={22} strokeWidth={2} />
          <h3 className="font-serif text-lg font-bold">Unlock Your Potential</h3>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-navy/60">
          Join thousands transforming their lives every day.
        </p>
        <button className="w-full rounded-xl bg-gold-gradient px-5 py-3 text-sm font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5">
          Start Your Journey
        </button>
      </div>
    </aside>
  )
}

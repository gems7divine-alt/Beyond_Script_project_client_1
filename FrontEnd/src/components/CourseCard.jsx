import { Clock, Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const badgeStyles = {
  Bestseller: 'bg-gold text-white',
  Popular: 'bg-emerald-500 text-white',
  New: 'bg-blue-500 text-white',
}

export default function CourseCard({ course }) {
  const { title, description, image, badge, rating, reviewCount, duration, price } = course

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-soft transition-shadow hover:shadow-panel"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
            <span className="font-serif text-5xl font-bold text-gold/20">
              {title.charAt(0)}
            </span>
          </div>
        )}

        {badge && (
          <span
            className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-bold ${badgeStyles[badge] || 'bg-gold text-white'}`}
          >
            {badge}
          </span>
        )}

        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-navy/40 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500"
        >
          <Heart size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="font-serif text-[15px] font-bold leading-snug text-navy">{title}</h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-navy/55">{description}</p>

        <div className="mt-1 flex items-center gap-3 text-xs text-navy/55">
          <span className="inline-flex items-center gap-1">
            <Star size={13} className="fill-gold text-gold" />
            <span className="font-semibold text-navy">{rating}</span>
            <span>({reviewCount})</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {duration}
          </span>
        </div>

        <div className="mt-1.5 border-t border-gold/10 pt-2.5">
          <span className="text-lg font-bold text-gold">
            ₹{price.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

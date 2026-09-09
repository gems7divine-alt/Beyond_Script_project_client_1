import { FileText, Heart, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WorkbookCard({ workbook }) {
  const { title, description, image, format, pages, price } = workbook

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-soft transition-shadow hover:shadow-panel"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50/80 to-amber-100">
            <div className="flex flex-col items-center gap-2">
              <BookOpen size={40} className="text-gold/25" strokeWidth={1.5} />
              <span className="font-serif text-lg font-bold text-gold/30">
                {title}
              </span>
            </div>
          </div>
        )}

        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-navy/40 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500"
        >
          <Heart size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="font-serif text-[15px] font-bold leading-snug text-navy">{title}</h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-navy/55">{description}</p>

        <div className="mt-1 flex items-center gap-3 text-xs text-navy/55">
          <span className="inline-flex items-center gap-1">
            <FileText size={13} className="text-gold" />
            {format === 'digital' ? 'Digital (PDF)' : 'Printable'}
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen size={12} />
            {pages} Pages
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

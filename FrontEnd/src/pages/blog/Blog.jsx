import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blog'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const POSTS_PER_PAGE = 6

const categoryBadgeStyles = {
  
  'self-awareness': 'bg-purple-50 text-purple-700',
  'personal-growth': 'bg-emerald-50 text-emerald-700',
  graphotherapy: 'bg-amber-50 text-amber-700',
}

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    return [...blogPosts]
  }, [])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generatePageNumbers = () => {
    const pages = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Hero Section */}
        <div className="relative mb-16 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <h1 className="mb-4 font-serif text-4xl font-bold text-navy md:text-5xl lg:text-[56px] lg:leading-tight">
              Insights for Your Inner Transformation
            </h1>
            <div className="mb-5 h-1 w-16 rounded-full bg-gold" />
            <p className="text-base leading-relaxed text-navy/60 md:text-lg">
              Thoughts, guidance, and tools to help you understand your subconscious,
              strengthen your mindset, and create a life of clarity and purpose.
            </p>
          </motion.div>

          {/* Decorative Leaf Illustration */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="hidden lg:block"
          >
            <svg
              width="220"
              height="160"
              viewBox="0 0 220 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gold/30"
            >
              <path
                d="M180 20C160 40 130 50 110 80C90 110 70 130 40 140"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M180 20C170 50 150 70 120 90C90 110 60 120 30 125"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M180 20C190 50 185 80 160 100C135 120 100 130 70 135"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Leaf shapes */}
              <ellipse cx="40" cy="140" rx="18" ry="8" transform="rotate(-30 40 140)" fill="currentColor" opacity="0.15" />
              <ellipse cx="70" cy="135" rx="16" ry="7" transform="rotate(-20 70 135)" fill="currentColor" opacity="0.12" />
              <ellipse cx="30" cy="125" rx="14" ry="6" transform="rotate(-40 30 125)" fill="currentColor" opacity="0.1" />
              <ellipse cx="110" cy="80" rx="20" ry="9" transform="rotate(-25 110 80)" fill="currentColor" opacity="0.18" />
              <ellipse cx="140" cy="55" rx="17" ry="7" transform="rotate(-15 140 55)" fill="currentColor" opacity="0.14" />
              <ellipse cx="160" cy="100" rx="18" ry="8" transform="rotate(-35 160 100)" fill="currentColor" opacity="0.12" />
              <ellipse cx="120" cy="90" rx="15" ry="6" transform="rotate(-28 120 90)" fill="currentColor" opacity="0.1" />
              <ellipse cx="180" cy="20" rx="12" ry="5" transform="rotate(-10 180 20)" fill="currentColor" opacity="0.2" />
            </svg>
          </motion.div>
        </div>

        {/* Latest Articles Header */}
        <div className="mb-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              Latest Articles
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-gold" />
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index % 3}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="group block overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-soft transition-shadow hover:shadow-panel"
                >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 transition-transform duration-500 group-hover:scale-105">
                      <span className="font-serif text-5xl font-bold text-gold/20">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <span
                    
                  >
                    {post.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-serif text-[17px] font-bold leading-snug text-navy">
                    {post.title}
                  </h3>

                  <p className="line-clamp-2 text-sm leading-relaxed text-navy/55">
                    {post.description}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-navy/50">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <span
                      className="grid h-9 w-9 place-items-center rounded-full border border-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-white"
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/10 bg-white py-20 text-center shadow-soft">
            <p className="font-serif text-xl font-bold text-navy">No articles found</p>
            <p className="mt-1 text-sm text-navy/50">Try adjusting your filters.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 text-navy/50 transition-colors hover:border-gold hover:text-gold disabled:opacity-40 disabled:hover:border-gold/20 disabled:hover:text-navy/50"
            >
              <ChevronLeft size={18} />
            </button>

            {generatePageNumbers().map((page, i) =>
              page === '...' ? (
                <span key={`dots-${i}`} className="px-1 text-sm text-navy/40">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`grid h-11 w-11 place-items-center rounded-full text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-gold text-white shadow-gold'
                      : 'border border-gold/20 text-navy/60 hover:border-gold hover:text-gold'
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 text-navy/50 transition-colors hover:border-gold hover:text-gold disabled:opacity-40 disabled:hover:border-gold/20 disabled:hover:text-navy/50"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

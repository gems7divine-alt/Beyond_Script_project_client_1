import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Feather,
  Phone,
} from 'lucide-react'
import { blogPosts } from '../../data/blog'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'intro':
      return (
        <p className="text-base leading-[1.8] text-navy/80 md:text-lg">
          {block.text}
        </p>
      )

    case 'text':
      return (
        <p className="text-[15px] leading-[1.8] text-navy/70 md:text-base">
          {block.text}
        </p>
      )

    case 'heading':
      return (
        <h2 className="mt-8 mb-4 font-serif text-xl font-bold text-navy md:text-2xl">
          {block.text}
        </h2>
      )

    case 'quote':
      return (
        <blockquote className="my-6 border-l-4 border-gold bg-gold/5 py-4 pl-5 pr-4">
          <p className="font-serif text-lg italic leading-relaxed text-navy/80 md:text-xl">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      )

    case 'list':
      return (
        <ul className="my-4 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] leading-[1.8] text-navy/70 md:text-base"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      )

    case 'cta':
      return (
        <div className="my-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-cream p-6 md:p-8">
          <h3 className="mb-3 font-serif text-xl font-bold text-navy md:text-2xl">
            {block.text}
          </h3>
          <p className="text-[15px] leading-relaxed text-navy/60 md:text-base">
            {block.subtext}
          </p>
          <Link
            to="/appointment"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 text-[15px] font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Book Your Analysis
          </Link>
        </div>
      )

    case 'author':
      return (
        <div className="mt-10 rounded-2xl border border-gold/10 bg-white p-6 shadow-soft md:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Feather size={16} className="text-gold" />
            <h4 className="font-serif text-lg font-bold text-navy">
              About the Author
            </h4>
          </div>
          <p className="mb-1 font-serif text-base font-bold text-navy">
            {block.name}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-navy/60">
            {block.bio}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-navy/50">
            {block.instagram && (
              <span className="inline-flex items-center gap-1.5 text-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                {block.instagram}
              </span>
            )}
            {block.whatsapp && (
              <span className="inline-flex items-center gap-1.5 text-gold">
                <Phone size={16} />
                {block.whatsapp}
              </span>
            )}
          </div>
        </div>
      )

    default:
      return null
  }
}

export default function BlogDetail() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px] py-20 text-center">
          <p className="font-serif text-2xl font-bold text-navy">
            Article not found
          </p>
          <Link
            to="/blog"
            className="mt-4 inline-flex items-center gap-2 text-gold hover:text-navy"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  const hasTamil = post.tamilContent && post.tamilContent.length > 0

  return (
    <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[800px] pb-16">
        {/* Back Link */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-navy"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Hero Image */}
        {post.image && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-8 overflow-hidden rounded-2xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        )}

        {/* Meta Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-4 flex flex-wrap items-center gap-4 text-sm text-navy/50"
        >
          <span className="rounded-md bg-gold/10 px-2.5 py-1 text-xs font-bold text-gold">
            {post.categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={14} />
            Written by: {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            Read Time: {post.readTime}
          </span>
        </motion.div>

        {/* English Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mb-6 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          {post.title}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mb-8 flex items-center gap-2"
        >
          <span className="h-[2px] w-10 bg-gold" />
          <Feather size={16} className="text-gold" />
        </motion.div>

        {/* English Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="space-y-4"
        >
          {post.content.map((block, i) => (
            <ContentBlock key={`en-${i}`} block={block} />
          ))}
        </motion.div>

        {/* Tamil Section */}
        {hasTamil && (
          <>
            <div className="my-12 flex items-center gap-4">
              <span className="h-[1px] flex-1 bg-gold/20" />
              <span className="rounded-full bg-gold/10 px-4 py-1.5 text-sm font-bold text-gold">
                தமிழ்
              </span>
              <span className="h-[1px] flex-1 bg-gold/20" />
            </div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 font-serif text-2xl font-bold leading-tight text-navy md:text-3xl"
            >
              {post.tamilTitle}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-2"
            >
              <span className="h-[2px] w-10 bg-gold" />
              <Feather size={16} className="text-gold" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {post.tamilContent.map((block, i) => (
                <ContentBlock key={`ta-${i}`} block={block} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

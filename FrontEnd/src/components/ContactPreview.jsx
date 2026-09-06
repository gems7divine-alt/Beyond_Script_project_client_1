import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Feather,
  Send,
  User,
  Mail,
  Tag,
  MessageSquare,
  Lock,
  Users,
  Heart,
  Leaf,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
)

const LeafBranch = ({ className, style }) => (
  <svg viewBox="0 0 120 200" fill="none" className={className} style={style}>
    <path d="M60 200 Q55 160 40 130 Q25 100 10 80 Q0 65 5 50 Q10 35 25 30 Q40 25 50 35 Q55 40 55 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M40 130 Q50 120 60 125 Q70 130 65 140 Q60 150 50 145 Q40 140 40 130Z" fill="currentColor" opacity="0.15" />
    <path d="M25 80 Q35 70 45 75 Q55 80 50 90 Q45 100 35 95 Q25 90 25 80Z" fill="currentColor" opacity="0.15" />
    <path d="M10 60 Q20 50 30 55 Q40 60 35 70 Q30 80 20 75 Q10 70 10 60Z" fill="currentColor" opacity="0.15" />
    <path d="M60 200 Q65 160 80 130 Q95 100 110 80 Q120 65 115 50 Q110 35 95 30 Q80 25 70 35 Q65 40 65 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M80 130 Q70 120 60 125 Q50 130 55 140 Q60 150 70 145 Q80 140 80 130Z" fill="currentColor" opacity="0.15" />
    <path d="M95 80 Q85 70 75 75 Q65 80 70 90 Q75 100 85 95 Q95 90 95 80Z" fill="currentColor" opacity="0.15" />
    <path d="M110 60 Q100 50 90 55 Q80 60 85 70 Q90 80 100 75 Q110 70 110 60Z" fill="currentColor" opacity="0.15" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: YoutubeIcon, label: 'YouTube' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
]

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mb-14 text-center">
          <LeafBranch className="pointer-events-none absolute -left-4 top-0 hidden h-48 w-auto text-gold/30 lg:block" />
          <LeafBranch className="pointer-events-none absolute -right-4 top-0 hidden h-48 w-auto text-gold/30 lg:block" style={{ transform: 'scaleX(-1)' }} />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-sm font-bold uppercase tracking-widest text-gold"
          >
            Contact Us
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mb-4 flex items-center justify-center gap-2"
          >
            <span className="h-[2px] w-8 bg-gold" />
            <Feather size={18} className="text-gold" />
            <span className="h-[2px] w-8 bg-gold" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mb-4 font-serif text-3xl font-bold text-navy md:text-4xl"
          >
            I&apos;d Love to Hear From You
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="h-[2px] w-8 bg-gold" />
            <Feather size={18} className="text-gold" />
            <span className="h-[2px] w-8 bg-gold" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="mx-auto max-w-xl text-sm leading-relaxed text-navy/60 md:text-base"
          >
            Have a question, need guidance, or ready to take the next step?
            <br />
            Fill out the form below and I&apos;ll get back to you soon.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-gold/10 bg-white p-6 shadow-soft md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <EnvelopeIcon />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                Send Me a Message
              </h3>
            </div>

            <div className="mb-5 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-gold" />
              <Feather size={14} className="text-gold" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/30" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="h-12 w-full rounded-xl border border-gold/15 bg-cream/50 pl-10 pr-4 text-sm text-navy placeholder:text-navy/30 focus:border-gold/40 focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/30" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="h-12 w-full rounded-xl border border-gold/15 bg-cream/50 pl-10 pr-4 text-sm text-navy placeholder:text-navy/30 focus:border-gold/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <Tag size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/30" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="h-12 w-full rounded-xl border border-gold/15 bg-cream/50 pl-10 pr-4 text-sm text-navy placeholder:text-navy/30 focus:border-gold/40 focus:outline-none"
                />
              </div>

              <div className="relative">
                <MessageSquare size={16} className="pointer-events-none absolute left-3.5 top-4 text-navy/30" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gold/15 bg-cream/50 pl-10 pr-4 pt-4 text-sm text-navy placeholder:text-navy/30 focus:border-gold/40 focus:outline-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-4 text-sm font-bold text-white shadow-gold transition-transform"
              >
                <Send size={18} strokeWidth={2} />
                Send Message
              </motion.button>
            </form>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-navy/40">
              <Lock size={13} />
              <span>Your information is safe and will never be shared.</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-gold/10 bg-white p-6 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <Users size={24} className="text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                  Stay Connected
                </h3>
              </div>

              <div className="mb-5 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-gold" />
                <Feather size={14} className="text-gold" />
              </div>

              <p className="mb-6 text-sm leading-relaxed text-navy/60">
                Follow me on social media for daily insights, tips, and inspiration.
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors hover:bg-gold hover:text-white"
                  >
                    <Icon />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gold/10 bg-gradient-to-br from-gold/5 to-cream p-6 shadow-soft">
              <div className="mb-4">
                <Leaf size={36} className="text-gold/40" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-navy/70">
                Every message matters.
                <br />
                I personally read and respond
                <br />
                to every inquiry with care and attention.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-gold/30" />
                <Heart size={14} className="text-gold" />
                <span className="h-[1px] w-8 bg-gold/30" />
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Visit Contact Page
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Feather,
  ChevronRight,
  Pen,
  User,
  Monitor,
  BookOpen,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
} from 'lucide-react'
import logo from '../assets/images/logo.png'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Workbook', to: '/workbooks' },
  { label: 'Appointment', to: '#' },
  { label: 'About Me', to: '/about' },
  { label: 'Blog', to: '#' },
  { label: 'Contact Us', to: '/contact' },
]

const services = [
  { label: 'Handwriting Analysis', icon: Pen },
  { label: 'Life Coaching', icon: User },
  { label: 'Online Courses', icon: Monitor },
  { label: 'Personalized Workbook', icon: BookOpen },
  { label: '1:1 Transformation Sessions', icon: Star },
]

const socialLinks = [
  { icon: InstagramIcon, label: '@beyondscript.coach' },
  { icon: FacebookIcon, label: 'Beyond Script' },
  { icon: YoutubeIcon, label: 'Beyond Script' },
  { icon: LinkedinIcon, label: 'Abiya Benodson' },
  { icon: PinterestIcon, label: '@beyondscript.coach' },
  { icon: TwitterIcon, label: '@beyondscript_co' },
  { icon: WhatsappIcon, label: '+91 97893 61361' },
  { icon: MailIcon, label: 'hello@beyondscript.in' },
]

const contactInfo = [
  { icon: Phone, text: '+91 97893 61361' },
  { icon: Mail, text: 'hello@beyondscript.in' },
  { icon: MapPin, text: 'Nagercoil, Kanyakumari\nTamil Nadu, India \u2013 629001' },
  { icon: Clock, text: 'Mon \u2013 Sat: 9:00 AM \u2013 7:00 PM\nSunday: Closed' },
]

export default function Footer() {
  return (
    <footer className="bg-cream">
      {/* Section 1: Newsletter */}
      <div className="mx-auto max-w-[1440px] px-4 pt-16 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-gold/10 bg-white p-8 shadow-soft md:p-10"
        >
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-6">
              <LeafBranch className="hidden h-32 w-auto text-gold/40 sm:block" />
              <div>
                <h2 className="mb-3 font-serif text-2xl font-bold text-navy md:text-3xl">
                  Let&apos;s Stay Connected
                </h2>
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-[2px] w-8 bg-gold" />
                  <Feather size={14} className="text-gold" />
                </div>
                <p className="max-w-md text-sm leading-relaxed text-navy/60">
                  Get inspiring insights, handwritten wisdom,
                  <br className="hidden md:block" />
                  and exclusive updates delivered to your inbox.
                </p>
              </div>
            </div>

            <div className="max-w-xs border-l-2 border-gold/20 pl-6">
              <span className="mb-2 block font-serif text-4xl text-gold/30">&ldquo;</span>
              <p className="mb-3 font-serif text-lg font-bold leading-snug text-navy">
                The best way to predict your future is to create it.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                &mdash; Abiya Benodson
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2: Footer Main */}
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Logo & Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img src={logo} alt="Beyond Script" className="mb-4 h-16 w-auto" />
            <p className="mb-4 text-xs leading-relaxed text-navy/60">
              Empowering individuals to uncover their true potential through handwriting
              insights, life coaching, and inner transformation.
            </p>
            <p className="mb-1 font-serif text-xl italic text-navy/70" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Abiya Benodson
            </p>
            <p className="mb-4 text-xs font-semibold text-gold">Life Transformation Coach</p>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold/40" />
              <Feather size={12} className="text-gold/40" />
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="mb-4 font-serif text-lg font-bold text-navy">Quick Links</h3>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <Feather size={12} className="text-gold" />
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-sm text-navy/60 transition-colors hover:text-gold"
                  >
                    <ChevronRight size={14} className="text-gold transition-transform group-hover:translate-x-1" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: My Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h3 className="mb-4 font-serif text-lg font-bold text-navy">My Services</h3>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <Feather size={12} className="text-gold" />
            </div>
            <ul className="space-y-2.5">
              {services.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <span className="flex items-center gap-2.5 text-sm text-navy/60 transition-colors hover:text-gold">
                    <Icon size={16} className="text-gold" strokeWidth={1.8} />
                    <span>{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Connect With Me */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h3 className="mb-4 font-serif text-lg font-bold text-navy">Connect With Me</h3>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <Feather size={12} className="text-gold" />
            </div>
            <ul className="space-y-2.5">
              {socialLinks.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <span className="flex items-center gap-2.5 text-sm text-navy/60 transition-colors hover:text-gold">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5: Get In Touch */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <h3 className="mb-4 font-serif text-lg font-bold text-navy">Get In Touch</h3>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <Feather size={12} className="text-gold" />
            </div>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <span className="whitespace-pre-line text-sm text-navy/60">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Bottom Bar */}
      <div className="border-t border-gold/10 bg-navy">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 py-6 sm:px-6 md:flex-row md:justify-between md:px-8 lg:px-10">
          <p className="text-center font-serif text-sm italic text-cream/70 md:text-left" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Your journey within
            <br />
            creates your reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cream/50">
            <span>&copy; 2024 Beyond Script. All Rights Reserved.</span>
            <span className="hidden text-cream/20 md:inline">|</span>
            <a href="#" className="transition-colors hover:text-cream/80">Privacy Policy</a>
            <span className="hidden text-cream/20 md:inline">|</span>
            <a href="#" className="transition-colors hover:text-cream/80">Terms &amp; Conditions</a>
          </div>

          <div className="flex items-center gap-2 text-xs text-cream/50">
            <Heart size={14} className="text-gold" fill="currentColor" />
            <span>Made with purpose &amp; passion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

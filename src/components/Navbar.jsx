import logo from '../assets/images/logo.png'
import { ChevronDown, Menu, User, UserPlus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Workbook', to: '/workbooks' },
  { label: 'Appointment', to: '#' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '#' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar({ variant = 'overlay' }) {
  const solid = variant === 'solid'
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('popstate', closeMenu)
    return () => window.removeEventListener('popstate', closeMenu)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`${
        solid
          ? 'sticky top-0 z-40 border-b border-gold/20 bg-cream'
          : 'absolute inset-x-0 bg-cream/90 backdrop-blur-sm'
      } top-0 z-20 px-4 py-3 sm:px-6 md:px-8 lg:px-10`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5">
        <a href="#" aria-label="Beyond Script home">
          <img
            src={logo}
            alt="Beyond Script logo"
            className="h-14 w-auto md:h-16 lg:h-[78px]"
          />
        </a>

        <nav className="ml-auto hidden items-center gap-6 xl:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`group relative inline-flex items-center gap-2 py-2 text-[15px] font-semibold text-navy transition-colors hover:text-gold ${
                label === 'Blog' ? 'text-gold' : ''
              }`}
            >
              <span>{label}</span>
              {label === 'Courses' && (
                <ChevronDown size={16} strokeWidth={2.3} />
              )}
              {label === 'Blog' && (
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="inline-flex h-12 items-center gap-3 rounded-md border border-gold bg-cream/75 px-4 text-[15px] font-semibold text-navy shadow-sm transition-colors hover:bg-white"
          >
            <User size={21} className="text-gold" strokeWidth={2} />
            Login
          </Link>

          <Link
            to="/register"
            className="inline-flex h-12 items-center gap-3 rounded-md bg-gold-gradient px-4 text-[15px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
          >
            <UserPlus size={21} strokeWidth={2} />
            Register
          </Link>

          <button
            aria-label="User profile"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-gold bg-cream/70 px-2 pr-4 text-gold transition-colors hover:bg-white md:gap-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold">
              <User size={20} strokeWidth={1.8} />
            </span>
            <span className="hidden text-left md:block">
              <span className="block text-[13px] font-medium leading-tight text-navy/60">
                Welcome back
              </span>
              <span className="block max-w-28 truncate text-[15px] font-bold leading-tight text-navy">
                User Name
              </span>
            </span>
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-gold bg-cream/75 text-gold transition-colors hover:bg-white md:hidden"
        >
          {menuOpen ? <X size={26} strokeWidth={1.8} /> : <Menu size={26} strokeWidth={1.8} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="sidebar"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex h-dvh flex-col overflow-hidden bg-cream md:hidden"
          >
            <div className="flex items-center justify-between border-b border-gold/15 px-5 py-3">
              <img
                src={logo}
                alt="Beyond Script logo"
                className="h-11 w-auto"
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-md border border-gold text-gold transition-colors hover:bg-white"
              >
                <X size={24} strokeWidth={1.8} />
              </button>
            </div>

            <div className="flex items-center gap-3 border-b border-gold/15 px-5 py-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold text-gold">
                <User size={21} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium leading-tight text-navy/60">
                  Welcome back
                </span>
                <span className="block max-w-44 truncate text-[16px] font-bold leading-tight text-navy">
                  User Name
                </span>
              </span>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map(({ label, to }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.05 }}
                >
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors ${
                      label === 'Blog'
                        ? 'text-gold'
                        : 'text-navy hover:bg-gold/10 hover:text-gold'
                    }`}
                  >
                    <span>{label}</span>
                    {label === 'Courses' && (
                      <ChevronDown size={17} strokeWidth={2.3} />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-2.5 border-t border-gold/15 px-5 py-4">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-3 rounded-md border border-gold bg-cream/75 px-4 text-[15px] font-semibold text-navy shadow-sm transition-colors hover:bg-white"
              >
                <User size={21} className="text-gold" strokeWidth={2} />
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-3 rounded-md bg-gold-gradient px-4 text-[15px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
              >
                <UserPlus size={21} strokeWidth={2} />
                Register
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

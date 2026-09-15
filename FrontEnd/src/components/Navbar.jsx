import logo from '../assets/images/logo.png'
import { Menu, User, UserPlus, X, ChevronDown, BookOpen, CalendarDays, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../data/authStore'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Workbook', to: '/workbooks' },
  { label: 'Appointment', to: '/appointment' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar({ variant = 'overlay' }) {
  const solid = variant === 'solid'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef(null)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const displayName = user?.name || user?.fullName || user?.username || 'User Name'

  const handleLogout = () => {
    logout()
    setProfileOpen(false)
    setMenuOpen(false)
    navigate('/')
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${
        solid || scrolled
          ? 'sticky top-0 z-40 border-b border-gold/20 bg-cream shadow-soft transition-shadow duration-300'
          : 'absolute inset-x-0 top-0 z-20 bg-cream/90 backdrop-blur-sm'
      } px-4 py-3 sm:px-6 md:px-8 lg:px-10`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 xl:gap-5">
        <a href="#" aria-label="Beyond Script home">
          <img
            src={logo}
            alt="Beyond Script logo"
            className="h-12 w-auto sm:h-14 md:h-16 lg:h-[72px]"
          />
        </a>

        <nav className="ml-auto hidden items-center gap-4 2xl:gap-6 xl:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => window.scrollTo(0, 0)}
              className={`group relative inline-flex items-center gap-2 py-2 text-[15px] font-semibold text-navy transition-colors hover:text-gold ${
                label === 'Blog' || label === 'Appointment' ? 'text-gold' : ''
              }`}
            >
              <span>{label}</span>


            </Link>
          ))}
        </nav>

        {/* Divider between nav links and auth buttons */}
        <span className="hidden h-8 w-[1px] bg-gold/25 xl:block" />

        <div className="hidden items-center gap-2 2xl:gap-3 md:flex">
          {!user && (
            <>
              <Link
                to="/login"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-gold bg-cream/75 px-3 2xl:gap-3 2xl:px-4 text-[15px] font-semibold text-navy shadow-sm transition-colors hover:bg-white"
              >
                <User size={21} className="text-gold" strokeWidth={2} />
                Login
              </Link>

              <Link
                to="/register"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-3 2xl:gap-3 2xl:px-4 text-[15px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
              >
                <UserPlus size={21} strokeWidth={2} />
                Register
              </Link>
            </>
          )}

          <Link
            to="/admin"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-gold-gradient px-3 2xl:gap-3 2xl:px-4 text-[15px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
          >
            <User size={21} strokeWidth={2} />
            Admin
          </Link>

          <div ref={profileRef} className="relative">
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              aria-label="User profile"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-gold bg-cream/70 px-2 pr-4 text-gold transition-colors hover:bg-white md:gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold">
                <User size={20} strokeWidth={1.8} />
              </span>
              <span className="hidden text-left md:block">
                <span className="block text-[13px] font-medium leading-tight text-navy/60">
                  {user ? 'Welcome back' : 'Guest'}
                </span>
                <span className="block max-w-28 truncate text-[15px] font-bold leading-tight text-navy">
                  {displayName}
                </span>
              </span>
              <ChevronDown
                size={14}
                className={`hidden transition-transform md:block ${profileOpen ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  key="profile-dropdown"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-gold/20 bg-white shadow-panel"
                >
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:bg-[#F8EBCF]/30 hover:text-gold"
                      >
                        <User size={16} className="text-gold" strokeWidth={1.8} />
                        Profile
                      </Link>
                      <Link
                        to="/courses"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:bg-[#F8EBCF]/30 hover:text-gold"
                      >
                        <BookOpen size={16} className="text-gold" strokeWidth={1.8} />
                        My Courses
                      </Link>
                      <Link
                        to="/appointment"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:bg-[#F8EBCF]/30 hover:text-gold"
                      >
                        <CalendarDays size={16} className="text-gold" strokeWidth={1.8} />
                        My Appointments
                      </Link>
                      <div className="mx-3 my-1 h-px bg-[#E9D8B8]" />
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2.5 px-4 py-3 text-[13.5px] font-semibold text-red-600 transition-colors hover:bg-red-50"
                      >
                        <LogOut size={16} strokeWidth={1.8} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:bg-[#F8EBCF]/30 hover:text-gold"
                      >
                        <User size={16} className="text-gold" strokeWidth={1.8} />
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:bg-[#F8EBCF]/30 hover:text-gold"
                      >
                        <UserPlus size={16} className="text-gold" strokeWidth={1.8} />
                        Register
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-gold bg-cream/75 text-gold transition-colors hover:bg-white xl:hidden"
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
            className="fixed inset-0 z-50 flex h-dvh flex-col overflow-hidden bg-cream xl:hidden"
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
                  {user ? 'Welcome back' : 'Guest'}
                </span>
                <span className="block max-w-44 truncate text-[16px] font-bold leading-tight text-navy">
                  {displayName}
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
                    onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }}
                    className={`flex items-center gap-3 rounded-md px-4 py-3 text-[15px] font-semibold transition-colors ${
                      label === 'Blog' || label === 'Appointment'
                        ? 'text-gold'
                        : 'text-navy hover:bg-gold/10 hover:text-gold'
                    }`}
                  >
                    <span>{label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto -translate-y-5 flex flex-col gap-2.5 border-t border-gold/15 px-5 py-4">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex h-11 items-center justify-center gap-3 rounded-xl border border-gold bg-cream/75 px-4 text-[15px] font-semibold text-navy shadow-sm transition-colors hover:bg-white"
                  >
                    <User size={20} className="text-gold" strokeWidth={2} />
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex h-11 items-center justify-center gap-3 rounded-xl bg-gold-gradient px-4 text-[15px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
                  >
                    <UserPlus size={20} strokeWidth={2} />
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="inline-flex h-11 items-center justify-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 text-[15px] font-semibold text-red-600 transition-colors hover:bg-red-100"
                >
                  <LogOut size={20} strokeWidth={2} />
                  Logout
                </button>
              )}
              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-3 rounded-xl bg-gold-gradient px-4 text-[15px] font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
              >
                <User size={20} strokeWidth={2} />
                Admin
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

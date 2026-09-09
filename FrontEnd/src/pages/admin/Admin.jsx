import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import AdminDashboard from './AdminDashboard'

const ADMIN_PASSWORD = '123456'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Admin() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  if (authenticated) {
    return <AdminDashboard />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setError('')
      setAuthenticated(true)
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center pb-16 pt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="mb-8 flex justify-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gold/15">
              <Lock size={36} className="text-gold" />
            </div>
          </div>

          <h1 className="mb-2 text-center font-serif text-3xl font-bold text-navy">
            Admin Access
          </h1>
          <p className="mb-8 text-center text-sm text-navy/50">
            Enter the admin password to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                placeholder="Enter password"
                className="w-full rounded-xl border border-gold/20 bg-white py-3.5 pl-4 pr-12 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 transition-colors hover:text-gold"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-2.5 text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3.5 text-[15px] font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Unlock
              <ArrowRight size={18} />
            </button>
          </form>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 block w-full text-center text-sm font-semibold text-navy/40 transition-colors hover:text-gold"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  MessageCircle,
  Upload,
  ChevronDown,
  Info,
  CheckCircle2,
  Lock,
} from 'lucide-react'
import { useAppointments } from '../../data/appointmentsStore'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const timeSlots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
]

export default function Appointment() {
  return (
    <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-3xl"
        >
          <h1 className="mb-4 font-serif text-4xl font-bold text-navy md:text-5xl">
            Book Your Appointment
          </h1>
          <p className="text-base leading-relaxed text-navy/60 md:text-lg">
            Choose the session that best fits your needs and book your appointment in
            just a few simple steps.
          </p>
        </motion.div>

        {/* Session Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Card 1: Free 10 Minutes Call */}
          <FreeCallCard />

          {/* Card 2: 1 or 2 Hours Call Session */}
          <PaidCallCard />

          {/* Card 3: Handwriting Analysis & Life Coaching */}
          <CoachingCard />
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gold/10 bg-white px-5 py-5 shadow-soft sm:flex-row sm:items-center sm:px-6"
        >
          <div className="flex items-start gap-3 text-sm text-navy/60 sm:items-center">
            <ShieldCheck size={20} className="shrink-0 text-emerald-500" />
            <span>
              Your information is safe with us. We never share your details with anyone.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-navy/60">
            <span>Need help?</span>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-gold transition-colors hover:text-gold/80"
            >
              <MessageCircle size={16} />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Card 1: Free 10 Minutes Call ────────────────────────────────── */

function FreeCallCard() {
  const { addAppointment } = useAppointments()
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment({
      name: form.name,
      email: '',
      sessionType: 'Free Call Session',
      date: form.date,
      time: form.time,
    })
    setSubmitted(true)
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-soft"
    >
      {/* Header */}
      <div className="px-6 pt-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
            1
          </span>
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
              <Phone size={22} />
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-navy">
                Free 10 Minutes Call
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-navy/55">
                A quick 10-minute call to understand your needs and how we can help.
              </p>
            </div>
          </div>
        </div>

        <span className="mb-4 inline-block rounded-md border border-gold/25 px-3 py-1 text-xs font-bold text-gold">
          FREE SESSION
        </span>

        {/* Info Banner */}
        <div className="mb-5 flex items-center gap-2 rounded-lg bg-gold/5 px-4 py-2.5 text-sm text-navy/60">
          <Info size={16} className="shrink-0 text-gold" />
          No payment required
        </div>
      </div>

      {/* Form */}
      <div className="border-t border-gold/10 px-6 py-5">
        <h4 className="mb-4 font-serif text-base font-bold text-gold">
          Book Your Free Call
        </h4>

        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 size={40} className="mb-3 text-emerald-500" />
            <p className="font-serif text-lg font-bold text-navy">Booking Confirmed!</p>
            <p className="mt-1 text-sm text-navy/55">
              You will receive a confirmation on your WhatsApp and Email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField
              label="Full Name"
              icon={<User size={16} />}
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange('name')}
              required
            />

            <PhoneField
              value={form.phone}
              onChange={handleChange('phone')}
              required
            />

            <DateField
              value={form.date}
              onChange={handleChange('date')}
              required
            />

            <TimeField
              value={form.time}
              onChange={handleChange('time')}
              required
            />

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3.5 text-[15px] font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Book Free Call
            </button>

            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2.5 text-xs text-navy/55">
              <CheckCircle2 size={15} className="shrink-0 text-emerald-500" />
              You will receive a confirmation on your WhatsApp and Email.
            </div>
          </form>
        )}
      </div>
    </motion.div>
  )
}

/* ─── Card 2: 1 or 2 Hours Call Session ───────────────────────────── */

function PaidCallCard() {
  const { addAppointment } = useAppointments()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    duration: '1',
  })

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment({
      name: form.name,
      email: '',
      sessionType: 'Paid 1 Hour Call Session',
      date: form.date,
      time: form.time,
    })
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      className="flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-soft"
    >
      {/* Header */}
      <div className="px-6 pt-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
            2
          </span>
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
              <Calendar size={22} />
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-navy">
                1 or 2 Hours Call Session
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-navy/55">
                In-depth one-on-one call session for personalized guidance and support.
              </p>
            </div>
          </div>
        </div>

        <span className="mb-5 inline-block rounded-md border border-gold/25 px-3 py-1 text-xs font-bold text-gold">
          PAID SESSION
        </span>
      </div>

      {/* Form */}
      <div className="border-t border-gold/10 px-6 py-5">
        <h4 className="mb-4 font-serif text-base font-bold text-gold">
          Book Your Call Session
        </h4>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            label="Full Name"
            icon={<User size={16} />}
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange('name')}
            required
          />

          <PhoneField
            value={form.phone}
            onChange={handleChange('phone')}
            required
          />

          <DateField
            value={form.date}
            onChange={handleChange('date')}
            required
          />

          <TimeField
            value={form.time}
            onChange={handleChange('time')}
            required
          />

          {/* Session Duration Toggle */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">
              Session Duration <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-3">
              {['1', '2'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, duration: val }))}
                  className={`flex-1 rounded-xl border py-3 text-sm font-semibold transition-colors ${
                    form.duration === val
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-gold/15 bg-white text-navy/60 hover:border-gold/30'
                  }`}
                >
                  {val} {val === '1' ? 'Hour' : 'Hours'}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-navy/45">Session Fee</p>
              <p className="font-serif text-2xl font-bold text-gold">₹2,499</p>
              <p className="text-xs text-navy/45">onwards</p>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 text-[15px] font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Proceed to Payment
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-navy/45">
            <Lock size={12} />
            Secure & Encrypted Payment
          </div>
        </form>
      </div>
    </motion.div>
  )
}

/* ─── Card 3: Handwriting Analysis & Life Coaching ────────────────── */

function CoachingCard() {
  const { addAppointment } = useAppointments()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    file: null,
  })
  const [fileName, setFileName] = useState('')

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setForm((prev) => ({ ...prev, file }))
      setFileName(file.name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment({
      name: form.name,
      email: '',
      sessionType: 'Handwriting Session',
      date: form.date,
      time: form.time,
    })
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      className="flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-soft"
    >
      {/* Header */}
      <div className="px-6 pt-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
            3
          </span>
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
              <Calendar size={22} />
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-navy">
                Handwriting Analysis & Life Coaching Session
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-navy/55">
                Get your handwriting analyzed and receive personalized life coaching for
                growth.
              </p>
            </div>
          </div>
        </div>

        <span className="mb-5 inline-block rounded-md border border-gold/25 px-3 py-1 text-xs font-bold text-gold">
          PAID SESSION
        </span>
      </div>

      {/* Form */}
      <div className="border-t border-gold/10 px-6 py-5">
        <h4 className="mb-4 font-serif text-base font-bold text-gold">
          Book Your Session
        </h4>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            label="Full Name"
            icon={<User size={16} />}
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange('name')}
            required
          />

          <PhoneField
            value={form.phone}
            onChange={handleChange('phone')}
            required
          />

          <DateField
            value={form.date}
            onChange={handleChange('date')}
            required
          />

          <TimeField
            value={form.time}
            onChange={handleChange('time')}
            required
          />

          {/* File Upload */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">
              Upload Handwritten Page <span className="text-red-500">*</span>
            </label>
            <div className="relative rounded-xl border-2 border-dashed border-gold/20 bg-gold/5 px-4 py-6 text-center transition-colors hover:border-gold/40">
              <Upload size={28} className="mx-auto mb-2 text-gold/40" />
              <p className="text-xs text-navy/50">
                Upload a clear image of your handwriting
              </p>
              <p className="mb-3 text-xs text-navy/40">(JPG, PNG or PDF – Max 10MB)</p>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gold/25 bg-white px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:bg-gold/5">
                Choose File
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </label>
              {fileName && (
                <p className="mt-2 truncate text-xs text-gold">{fileName}</p>
              )}
            </div>
          </div>

          {/* Price */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-navy/45">Session Fee</p>
              <p className="font-serif text-2xl font-bold text-gold">₹3,999</p>
              <p className="text-xs text-navy/45">onwards</p>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 text-[15px] font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Proceed to Payment
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-navy/45">
            <Lock size={12} />
            Secure & Encrypted Payment
          </div>
        </form>
      </div>
    </motion.div>
  )
}

/* ─── Shared Form Components ──────────────────────────────────────── */

function InputField({ label, icon, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white px-4 transition-colors focus-within:border-gold/40">
        <span className="shrink-0 text-navy/30">{icon}</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-12 w-full bg-transparent text-sm text-navy outline-none placeholder:text-navy/35"
        />
      </div>
    </div>
  )
}

function PhoneField({ value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        Mobile Number {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <div className="flex h-12 shrink-0 items-center gap-1.5 rounded-xl border border-gold/15 bg-white px-3">
          <span className="text-base">🇮🇳</span>
          <select className="bg-transparent text-sm font-medium text-navy outline-none">
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
            <option>+61</option>
            <option>+971</option>
          </select>
          <ChevronDown size={14} className="text-navy/40" />
        </div>
        <input
          type="tel"
          value={value}
          onChange={onChange}
          placeholder="Enter your mobile number"
          required={required}
          className="h-12 w-full rounded-xl border border-gold/15 bg-white px-4 text-sm text-navy outline-none placeholder:text-navy/35 focus:border-gold/40"
        />
      </div>
    </div>
  )
}

function DateField({ value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        Select Date <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white px-4 transition-colors focus-within:border-gold/40">
        <span className="shrink-0 text-navy/30">
          <Calendar size={16} />
        </span>
        <input
          type="date"
          value={value}
          onChange={onChange}
          required={required}
          className="h-12 w-full bg-transparent text-sm text-navy outline-none [color-scheme:light] placeholder:text-navy/35"
        />
      </div>
    </div>
  )
}

function TimeField({ value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        Select Time <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white px-4 transition-colors focus-within:border-gold/40">
        <span className="shrink-0 text-navy/30">
          <Clock size={16} />
        </span>
        <select
          value={value}
          onChange={onChange}
          required={required}
          className="h-12 w-full bg-transparent text-sm text-navy outline-none placeholder:text-navy/35"
        >
          <option value="">Select a time slot</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

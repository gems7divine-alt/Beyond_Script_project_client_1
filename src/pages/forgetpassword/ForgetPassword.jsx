import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import background from '../../assets/images/login-background.jpg'
import logo from '../../assets/images/logo.png'

const OTP_LENGTH = 6
const RESEND_SECONDS = 30
const FIXED_OTP = '123456'

const maskEmail = (value) => {
  const [name, domain] = value.split('@')
  if (!domain) return value
  const visible = name.slice(0, 2)
  return `${visible}${'*'.repeat(Math.max(name.length - 2, 1))}@${domain}`
}

export default function ForgetPassword() {
  const [step, setStep] = useState('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''))
  const [error, setError] = useState('')
  const [resendTimer, setResendTimer] = useState(0)

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const otpRefs = useRef([])

  useEffect(() => {
    if (resendTimer <= 0) return undefined

    const id = setInterval(() => {
      setResendTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [resendTimer])

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setError('')

    console.log({ email })

    setOtp(Array(OTP_LENGTH).fill(''))
    setStep('otp')
    setResendTimer(RESEND_SECONDS)
  }

  const handleOtpChange = (index, value) => {
    const digits = value.replace(/\D/g, '')

    if (digits.length > 1) {
      const chars = digits.slice(0, OTP_LENGTH).split('')
      const next = [...otp]

      chars.forEach((char, i) => {
        next[index + i] = char
      })

      setOtp(next)
      otpRefs.current[Math.min(index + chars.length, OTP_LENGTH - 1)]?.focus()
      return
    }

    const next = [...otp]
    next[index] = digits
    setOtp(next)
    setError('')

    if (digits && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleResend = () => {
    if (resendTimer > 0) return

    console.log({ email })

    setOtp(Array(OTP_LENGTH).fill(''))
    setError('')
    setResendTimer(RESEND_SECONDS)
    otpRefs.current[0]?.focus()
  }

  const handleVerifySubmit = (e) => {
    e.preventDefault()

    const code = otp.join('')

    if (code.length !== OTP_LENGTH) {
      setError(`Please enter all ${OTP_LENGTH} digits`)
      return
    }

    if (code !== FIXED_OTP) {
      setError('Invalid OTP. Please try again')
      return
    }

    console.log({ email, otp: code })

    setError('')
    setNewPassword('')
    setConfirmPassword('')
    setStep('reset')
  }

  const handleResetSubmit = (e) => {
    e.preventDefault()

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    console.log({ email, password: newPassword })

    setStep('done')
  }

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#fff9f2] px-5 py-6 md:px-10 lg:px-15"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '50% auto',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(255,249,242,0.55)_0%,rgba(255,249,242,0.3)_35%,rgba(255,249,242,0.08)_65%,rgba(255,249,242,0)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-[1440px] items-center justify-end">
        <div
          className="
            w-full max-w-[460px]
            rounded-2xl
            bg-cream/90
            p-6
            shadow-panel
            backdrop-blur-md
            sm:p-7
            md:p-8
            lg:-translate-x-[300px]
          "
        >
          <Link
            to="/"
            aria-label="Beyond Script home"
            className="flex justify-center"
          >
            <img
              src={logo}
              alt="Beyond Script logo"
              className="mb-4 h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          {step === 'done' ? (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <ShieldCheck size={32} className="text-gold" strokeWidth={1.8} />
              </div>

              <h1 className="mt-4 text-center font-serif text-[1.4rem] font-bold leading-tight text-navy sm:text-[1.5rem]">
                Password reset
              </h1>

              <p className="mt-2 text-center text-[15px] leading-relaxed text-navy/80">
                Your password has been reset successfully. You can now log in
                with your new password.
              </p>

              <Link
                to="/login"
                className="
                  mt-6 flex h-12 items-center justify-center
                  rounded-md
                  bg-gold-gradient
                  text-[17px]
                  font-semibold
                  text-white
                  shadow-gold
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  active:translate-y-0
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gold/40
                  focus:ring-offset-2
                "
              >
                Back to login
              </Link>
            </>
          ) : step === 'email' ? (
            <>
              <h1 className="text-center font-serif text-[1.4rem] font-bold leading-tight text-navy sm:text-[1.5rem]">
                Forgot your password?
              </h1>

              <p className="mt-2 text-center text-[15px] leading-relaxed text-navy/80">
                Enter your registered email and we&apos;ll send you a
                verification code
              </p>

              <form
                onSubmit={handleEmailSubmit}
                className="mt-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-navy"
                  >
                    Email address
                  </label>

                  <div
                    className="
                      flex h-12 items-center gap-3
                      rounded-md
                      border border-gold/60
                      bg-white
                      px-4
                      shadow-sm
                      transition-colors
                      focus-within:border-gold
                      focus-within:ring-1
                      focus-within:ring-gold/30
                    "
                  >
                    <Mail
                      size={20}
                      className="shrink-0 text-gold"
                      strokeWidth={1.8}
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      className="
                        w-full
                        bg-transparent
                        text-navy
                        outline-none
                        placeholder:text-navy/40
                      "
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm font-medium text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  className="
                    mt-1
                    h-12
                    rounded-md
                    bg-gold-gradient
                    text-[17px]
                    font-semibold
                    text-white
                    shadow-gold
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    active:translate-y-0
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gold/40
                    focus:ring-offset-2
                  "
                >
                  Send OTP
                </button>
              </form>

              <p className="mt-5 text-center text-[16px] text-navy/80">
                Remembered your password?{' '}
                <Link
                  to="/login"
                  className="
                    font-semibold
                    text-gold
                    transition-colors
                    hover:text-navy
                  "
                >
                  Login here
                </Link>
              </p>
            </>
          ) : step === 'otp' ? (
            <>
              <h1 className="text-center font-serif text-[1.4rem] font-bold leading-tight text-navy sm:text-[1.5rem]">
                Verify your email
              </h1>

              <p className="mt-2 text-center text-[15px] leading-relaxed text-navy/80">
                We sent a {OTP_LENGTH}-digit code to{' '}
                <span className="font-semibold text-navy">
                  {maskEmail(email)}
                </span>
              </p>

              <form
                onSubmit={handleVerifySubmit}
                className="mt-6 flex flex-col gap-4"
              >
                <div className="flex justify-between gap-2 sm:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        otpRefs.current[index] = el
                      }}
                      type="text"
                      inputMode="numeric"
                      autoComplete={index === 0 ? 'one-time-code' : 'off'}
                      maxLength={OTP_LENGTH}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      aria-label={`Digit ${index + 1}`}
                      className="
                        h-12 w-full
                        rounded-md
                        border border-gold/60
                        bg-white
                        text-center
                        text-lg
                        font-semibold
                        text-navy
                        shadow-sm
                        outline-none
                        transition-colors
                        focus:border-gold
                        focus:ring-1
                        focus:ring-gold/30
                      "
                    />
                  ))}
                </div>

                {error && (
                  <p className="text-sm font-medium text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  className="
                    mt-1
                    h-12
                    rounded-md
                    bg-gold-gradient
                    text-[17px]
                    font-semibold
                    text-white
                    shadow-gold
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    active:translate-y-0
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gold/40
                    focus:ring-offset-2
                  "
                >
                  Verify OTP
                </button>
              </form>

              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setStep('email')
                    setError('')
                  }}
                  className="
                    flex items-center gap-1
                    text-sm
                    font-semibold
                    text-navy/70
                    transition-colors
                    hover:text-gold
                  "
                >
                  <ArrowLeft size={16} strokeWidth={1.8} />
                  Change email
                </button>

                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendTimer > 0}
                  className="
                    text-sm
                    font-semibold
                    text-gold
                    transition-colors
                    hover:text-navy
                    disabled:cursor-not-allowed
                    disabled:text-navy/40
                    disabled:hover:text-navy/40
                  "
                >
                  {resendTimer > 0
                    ? `Resend OTP in ${resendTimer}s`
                    : 'Resend OTP'}
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center font-serif text-[1.4rem] font-bold leading-tight text-navy sm:text-[1.5rem]">
                Set a new password
              </h1>

              <p className="mt-2 text-center text-[15px] leading-relaxed text-navy/80">
                Your email is verified. Create a strong new password for your
                account
              </p>

              <form
                onSubmit={handleResetSubmit}
                className="mt-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="new-password"
                    className="text-sm font-semibold text-navy"
                  >
                    New password
                  </label>

                  <div
                    className="
                      flex h-12 items-center gap-3
                      rounded-md
                      border border-gold/60
                      bg-white
                      px-4
                      shadow-sm
                      transition-colors
                      focus-within:border-gold
                      focus-within:ring-1
                      focus-within:ring-gold/30
                    "
                  >
                    <Lock
                      size={20}
                      className="shrink-0 text-gold"
                      strokeWidth={1.8}
                    />

                    <input
                      id="new-password"
                      name="new-password"
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      autoComplete="new-password"
                      required
                      minLength={6}
                      className="
                        w-full
                        bg-transparent
                        text-navy
                        outline-none
                        placeholder:text-navy/40
                      "
                    />

                    <button
                      type="button"
                      aria-label={
                        showNewPassword ? 'Hide password' : 'Show password'
                      }
                      onClick={() => setShowNewPassword((prev) => !prev)}
                      className="
                        shrink-0
                        rounded
                        text-navy/50
                        transition-colors
                        hover:text-gold
                        focus:outline-none
                        focus:ring-2
                        focus:ring-gold/30
                      "
                    >
                      {showNewPassword ? (
                        <EyeOff size={20} strokeWidth={1.8} />
                      ) : (
                        <Eye size={20} strokeWidth={1.8} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="confirm-password"
                    className="text-sm font-semibold text-navy"
                  >
                    Confirm new password
                  </label>

                  <div
                    className="
                      flex h-12 items-center gap-3
                      rounded-md
                      border border-gold/60
                      bg-white
                      px-4
                      shadow-sm
                      transition-colors
                      focus-within:border-gold
                      focus-within:ring-1
                      focus-within:ring-gold/30
                    "
                  >
                    <Lock
                      size={20}
                      className="shrink-0 text-gold"
                      strokeWidth={1.8}
                    />

                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      autoComplete="new-password"
                      required
                      minLength={6}
                      className="
                        w-full
                        bg-transparent
                        text-navy
                        outline-none
                        placeholder:text-navy/40
                      "
                    />

                    <button
                      type="button"
                      aria-label={
                        showConfirmPassword ? 'Hide password' : 'Show password'
                      }
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="
                        shrink-0
                        rounded
                        text-navy/50
                        transition-colors
                        hover:text-gold
                        focus:outline-none
                        focus:ring-2
                        focus:ring-gold/30
                      "
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} strokeWidth={1.8} />
                      ) : (
                        <Eye size={20} strokeWidth={1.8} />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm font-medium text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  className="
                    mt-1
                    h-12
                    rounded-md
                    bg-gold-gradient
                    text-[17px]
                    font-semibold
                    text-white
                    shadow-gold
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    active:translate-y-0
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gold/40
                    focus:ring-offset-2
                  "
                >
                  Reset Password
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

// import { useState } from 'react'
// import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
// import { Link } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../../services/api'

// import background from '../../assets/images/login-background.jpg'
// import logo from '../../assets/images/logo.png'

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//  const handleSubmit = async (e) => {
//   e.preventDefault()

//   setError('')
//   setLoading(true)

//   try {
//     const data = await loginUser({
//       email,
//       password,
//     })

//     console.log('Login successful:', data)

//     // Save JWT token
//     localStorage.setItem(
//       'accessToken',
//       data.token
//     )

//     // Save user information
//     localStorage.setItem(
//       'user',
//       JSON.stringify(data.user)
//     )

//     // Navigate to home page
//     navigate('/')

//   } catch (error) {

//     console.error('Login failed:', error)

//     setError(
//       error.message ||
//       'Invalid email or password'
//     )

//   } finally {

//     setLoading(false)
//   }
// }

//   return (
//     <section
//       className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#fff9f2] px-5 py-6 md:px-10 lg:px-15"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: '50% auto',
//         backgroundPosition: 'left center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Background overlay */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(255,249,242,0.55)_0%,rgba(255,249,242,0.3)_35%,rgba(255,249,242,0.08)_65%,rgba(255,249,242,0)_100%)]" />

//       {/* Main container */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-[1440px] items-center justify-end">
        
//         {/* Login Card */}
//         <div
//           className="
//             w-full max-w-[460px]
//             rounded-2xl
//             bg-cream/90
//             p-6
//             shadow-panel
//             backdrop-blur-md
//             sm:p-7
//             md:p-8
//             lg:-translate-x-[300px]
//           "
//         >
//           {/* Logo */}
//           <Link
//             to="/"
//             aria-label="Beyond Script home"
//             className="flex justify-center"
//           >
//             <img
//               src={logo}
//               alt="Beyond Script logo"
//               className="mb-4 h-12 w-auto object-contain sm:h-14"
//             />
//           </Link>

//           {/* Heading */}
//           <h1 className="text-center font-serif text-[1.4rem] font-bold leading-tight text-navy sm:text-[1.5rem]">
//             Login to your account
//           </h1>

//           <p className="mt-2 text-center text-[15px] leading-relaxed text-navy/80">
//             Welcome back, please enter your details
//           </p>

//           {/* Login Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-6 flex flex-col gap-4"
//           >
//             {/* Email */}
//             <div className="flex flex-col gap-2">
//               <label
//                 htmlFor="email"
//                 className="text-sm font-semibold text-navy"
//               >
//                 Email address
//               </label>

//               <div
//                 className="
//                   flex h-12 items-center gap-3
//                   rounded-md
//                   border border-gold/60
//                   bg-white
//                   px-4
//                   shadow-sm
//                   transition-colors
//                   focus-within:border-gold
//                   focus-within:ring-1
//                   focus-within:ring-gold/30
//                 "
//               >
//                 <Mail
//                   size={20}
//                   className="shrink-0 text-gold"
//                   strokeWidth={1.8}
//                 />

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   autoComplete="email"
//                   required
//                   className="
//                     w-full
//                     bg-transparent
//                     text-navy
//                     outline-none
//                     placeholder:text-navy/40
//                   "
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="flex flex-col gap-2">
//               <label
//                 htmlFor="password"
//                 className="text-sm font-semibold text-navy"
//               >
//                 Password
//               </label>

//               <div
//                 className="
//                   flex h-12 items-center gap-3
//                   rounded-md
//                   border border-gold/60
//                   bg-white
//                   px-4
//                   shadow-sm
//                   transition-colors
//                   focus-within:border-gold
//                   focus-within:ring-1
//                   focus-within:ring-gold/30
//                 "
//               >
//                 <Lock
//                   size={20}
//                   className="shrink-0 text-gold"
//                   strokeWidth={1.8}
//                 />

//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   autoComplete="current-password"
//                   required
//                   className="
//                     w-full
//                     bg-transparent
//                     text-navy
//                     outline-none
//                     placeholder:text-navy/40
//                   "
//                 />

//                 <button
//                   type="button"
//                   aria-label={
//                     showPassword ? 'Hide password' : 'Show password'
//                   }
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="
//                     shrink-0
//                     text-navy/50
//                     transition-colors
//                     hover:text-gold
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-gold/30
//                     rounded
//                   "
//                 >
//                   {showPassword ? (
//                     <EyeOff size={20} strokeWidth={1.8} />
//                   ) : (
//                     <Eye size={20} strokeWidth={1.8} />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="flex justify-end">
//               <Link
//                 to="/forgot-password"
//                 className="
//                   text-sm
//                   font-semibold
//                   text-gold
//                   transition-colors
//                   hover:text-navy
//                 "
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="
//                 mt-1
//                 h-12
//                 rounded-md
//                 bg-gold-gradient
//                 text-[17px]
//                 font-semibold
//                 text-white
//                 shadow-gold
//                 transition-all
//                 duration-200
//                 hover:-translate-y-0.5
//                 hover:shadow-lg
//                 active:translate-y-0
//                 focus:outline-none
//                 focus:ring-2
//                 focus:ring-gold/40
//                 focus:ring-offset-2
//               "
//             >
//               Login
//             </button>
//           </form>

//           {/* Register */}
//           <p className="mt-5 text-center text-[16px] text-navy/80">
//             Don't have an account?{' '}
//             <Link
//               to="/register"
//               className="
//                 font-semibold
//                 text-gold
//                 transition-colors
//                 hover:text-navy
//               "
//             >
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { loginUser } from '../../services/api'

import background from '../../assets/images/login-background.jpg'
import logo from '../../assets/images/logo.png'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      const data = await loginUser({
        email,
        password,
      })

      console.log('Login successful:', data)

      // Save JWT token
      localStorage.setItem(
        'accessToken',
        data.token
      )

      // Save user information
      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      )

      // Navigate to home page
      navigate('/')

    } catch (error) {
      console.error('Login failed:', error)

      setError(
        error.message || 'Invalid email or password'
      )

    } finally {
      setLoading(false)
    }
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
      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(255,249,242,0.55)_0%,rgba(255,249,242,0.3)_35%,rgba(255,249,242,0.08)_65%,rgba(255,249,242,0)_100%)]" />

      {/* Main container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-[1440px] items-center justify-end">

        {/* Login Card */}
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

          {/* Logo */}
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

          {/* Heading */}
          <h1 className="text-center font-serif text-[1.4rem] font-bold leading-tight text-navy sm:text-[1.5rem]">
            Login to your account
          </h1>

          <p className="mt-2 text-center text-[15px] leading-relaxed text-navy/80">
            Welcome back, please enter your details
          </p>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4"
          >

            {/* Email */}
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
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
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

            {/* Password */}
            <div className="flex flex-col gap-2">

              <label
                htmlFor="password"
                className="text-sm font-semibold text-navy"
              >
                Password
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
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
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
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
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
                  {showPassword ? (
                    <EyeOff
                      size={20}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Eye
                      size={20}
                      strokeWidth={1.8}
                    />
                  )}
                </button>

              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div
                className="
                  rounded-md
                  border
                  border-red-200
                  bg-red-50
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-red-600
                "
              >
                {error}
              </div>
            )}

            {/* Forgot Password */}
            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="
                  text-sm
                  font-semibold
                  text-gold
                  transition-colors
                  hover:text-navy
                "
              >
                Forgot password?
              </Link>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
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
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

          </form>

          {/* Register */}
          <p className="mt-5 text-center text-[16px] text-navy/80">

            Don't have an account?{' '}

            <Link
              to="/register"
              className="
                font-semibold
                text-gold
                transition-colors
                hover:text-navy
              "
            >
              Register here
            </Link>

          </p>

        </div>
      </div>
    </section>
  )
}
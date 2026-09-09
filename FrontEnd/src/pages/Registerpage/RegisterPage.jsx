// import { useState } from 'react'
// import { Eye, EyeOff, Lock, Mail, UserRound } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'

// import { registerUser } from '../../services/api'

// import background from '../../assets/images/login-background.jpg'
// import logo from '../../assets/images/logo.png'

// export default function RegisterPage() {
//   // React Router navigation
//   const navigate = useNavigate()

//   // Form states
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   // UI states
//   const [showPassword, setShowPassword] = useState(false)
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   // Handle registration
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // Clear previous error
//     setError('')

//     // Start loading
//     setLoading(true)

//     try {
//       // Call Go/Gin backend
//       const response = await registerUser({
//         name: name.trim(),
//         email: email.trim(),
//         password,
//       })

//       console.log('Registration successful:', response)

//       // Registration successful
//       // Navigate to login page
//       navigate('/login')

//     } catch (error) {
//       console.error('Registration error:', error)

//       setError(
//         error.message || 'Registration failed. Please try again.'
//       )
//     } finally {
//       // Stop loading
//       setLoading(false)
//     }
//   }

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
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[linear-gradient(270deg,rgba(255,249,242,0.55)_0%,rgba(255,249,242,0.3)_35%,rgba(255,249,242,0.08)_65%,rgba(255,249,242,0)_100%)]
//         "
//       />

//       {/* Main container */}
//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-[calc(100vh-8rem)]
//           w-full
//           max-w-[1440px]
//           items-center
//           justify-end
//         "
//       >
//         {/* Register Card */}
//         <div
//           className="
//             w-full
//             max-w-[460px]
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
//           <h1
//             className="
//               text-center
//               font-serif
//               text-[1.4rem]
//               font-bold
//               leading-tight
//               text-navy
//               sm:text-[1.5rem]
//             "
//           >
//             Create your account
//           </h1>

//           <p
//             className="
//               mt-2
//               text-center
//               text-[15px]
//               leading-relaxed
//               text-navy/80
//             "
//           >
//             Join us, start your transformation journey
//           </p>

//           {/* Register Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-6 flex flex-col gap-4"
//           >
//             {/* Name */}
//             <div className="flex flex-col gap-2">
//               <label
//                 htmlFor="name"
//                 className="text-sm font-semibold text-navy"
//               >
//                 Name
//               </label>

//               <div
//                 className="
//                   flex
//                   h-12
//                   items-center
//                   gap-3
//                   rounded-md
//                   border
//                   border-gold/60
//                   bg-white
//                   px-4
//                   shadow-sm
//                   transition-colors
//                   focus-within:border-gold
//                   focus-within:ring-1
//                   focus-within:ring-gold/30
//                 "
//               >
//                 <UserRound
//                   size={20}
//                   className="shrink-0 text-gold"
//                   strokeWidth={1.8}
//                 />

//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter your name"
//                   autoComplete="name"
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
//                   flex
//                   h-12
//                   items-center
//                   gap-3
//                   rounded-md
//                   border
//                   border-gold/60
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
//                   flex
//                   h-12
//                   items-center
//                   gap-3
//                   rounded-md
//                   border
//                   border-gold/60
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
//                   autoComplete="new-password"
//                   required
//                   minLength={6}
//                   className="
//                     w-full
//                     bg-transparent
//                     text-navy
//                     outline-none
//                     placeholder:text-navy/40
//                   "
//                 />

//                 {/* Show / Hide Password */}
//                 <button
//                   type="button"
//                   aria-label={
//                     showPassword
//                       ? 'Hide password'
//                       : 'Show password'
//                   }
//                   onClick={() =>
//                     setShowPassword((prev) => !prev)
//                   }
//                   className="
//                     shrink-0
//                     rounded
//                     text-navy/50
//                     transition-colors
//                     hover:text-gold
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-gold/30
//                   "
//                 >
//                   {showPassword ? (
//                     <EyeOff
//                       size={20}
//                       strokeWidth={1.8}
//                     />
//                   ) : (
//                     <Eye
//                       size={20}
//                       strokeWidth={1.8}
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Error message */}
//             {error && (
//               <div
//                 className="
//                   rounded-md
//                   border
//                   border-red-200
//                   bg-red-50
//                   px-3
//                   py-2
//                   text-center
//                   text-sm
//                   font-medium
//                   text-red-600
//                 "
//               >
//                 {error}
//               </div>
//             )}

//             {/* Register Button */}
//             <button
//               type="submit"
//               disabled={loading}
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
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//                 disabled:hover:translate-y-0
//               "
//             >
//               {loading
//                 ? 'Creating account...'
//                 : 'Register'}
//             </button>
//           </form>

//           {/* Login Link */}
//           <p
//             className="
//               mt-5
//               text-center
//               text-[16px]
//               text-navy/80
//             "
//           >
//             Already have an account?{' '}

//             <Link
//               to="/login"
//               className="
//                 font-semibold
//                 text-gold
//                 transition-colors
//                 hover:text-navy
//               "
//             >
//               Login here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'
import { Eye, EyeOff, Lock, Mail, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { registerUser } from '../../services/api'

import background from '../../assets/images/login-background.jpg'
import logo from '../../assets/images/logo.png'

export default function RegisterPage() {
  const navigate = useNavigate()

  // Form states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // UI states
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Handle registration
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      // Send registration data to Go/Gin backend
      const response = await registerUser({
        name: name.trim(),
        email: email.trim(),
        password,
      })

      console.log('Registration successful:', response)

      // Registration successful
      // Navigate to login page
      navigate('/login')
    } catch (error) {
      console.error('Registration error:', error)

      setError(
        error.message || 'Registration failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#fff9f2] px-4 py-6 sm:px-6 md:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'calc(60% - 50px) 150%',
        backgroundPosition: 'center left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(270deg,rgba(255,249,242,0.55)_0%,rgba(255,249,242,0.3)_35%,rgba(255,249,242,0.08)_65%,rgba(255,249,242,0)_100%)]
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-8rem)]
          w-full
          max-w-[1440px]
          items-center
          justify-center
          lg:justify-end
        "
      >
        {/* Register Card */}
        <div
          className="
            w-full
            max-w-[460px]
            rounded-2xl
            bg-cream/90
            p-6
            shadow-panel
            backdrop-blur-md
            sm:p-7
            md:p-8
            lg:mr-[12%]
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
          <h1
            className="
              text-center
              font-serif
              text-[1.4rem]
              font-bold
              leading-tight
              text-navy
              sm:text-[1.5rem]
            "
          >
            Create your account
          </h1>

          <p
            className="
              mt-2
              text-center
              text-[15px]
              leading-relaxed
              text-navy/80
            "
          >
            Join us, start your transformation journey
          </p>

          {/* Register Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-navy"
              >
                Name
              </label>

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-gold/60
                  bg-white
                  px-4
                  shadow-sm
                  transition-colors
                  focus-within:border-gold
                  focus-within:ring-1
                  focus-within:ring-gold/30
                "
              >
                <UserRound
                  size={20}
                  className="shrink-0 text-gold"
                  strokeWidth={1.8}
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  autoComplete="name"
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
                  flex
                  h-12
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-gold/60
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
                  flex
                  h-12
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-gold/60
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

                {/* Show / Hide Password */}
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
                    flex h-10 w-10 shrink-0 items-center justify-center
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

            {/* Error message */}
            {error && (
              <div
                className="
                  rounded-md
                  border
                  border-red-200
                  bg-red-50
                  px-3
                  py-2
                  text-center
                  text-sm
                  font-medium
                  text-red-600
                "
              >
                {error}
              </div>
            )}

            {/* Register Button */}
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
                disabled:hover:translate-y-0
              "
            >
              {loading ? 'Creating account...' : 'Register'}
            </button>
          </form>

          {/* Login Link */}
          <p
            className="
              mt-5
              text-center
              text-[16px]
              text-navy/80
            "
          >
            Already have an account?{' '}

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
        </div>
      </div>
    </section>
  )
}

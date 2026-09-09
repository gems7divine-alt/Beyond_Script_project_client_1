// import { Navigate, Route, Routes } from 'react-router-dom'

// import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
// import AboutPreview from './components/AboutPreview.jsx'
// import ContactPreview from './components/ContactPreview.jsx'
// import Footer from './components/Footer.jsx'

// import LoginPage from './pages/loginpage/LoginPage.jsx'
// import RegisterPage from './pages/Registerpage/RegisterPage.jsx'
// import ForgetPassword from './pages/forgetpassword/ForgetPassword.jsx'

// import Courses from './pages/courses/Courses.jsx'
// import Workbooks from './pages/workbooks/Workbooks.jsx'
// import About from './pages/about/About.jsx'
// import Contact from './pages/contact/Contact.jsx'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-cream font-sans text-navy">
//       <Routes>

//         {/* ==================== HOME ==================== */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <Hero />
//               <AboutPreview />
//               <ContactPreview />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== LOGIN ==================== */}
//         <Route
//           path="/login"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <LoginPage />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== REGISTER ==================== */}
//         <Route
//           path="/register"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <RegisterPage />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== COURSES ==================== */}
//         <Route
//           path="/courses"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <Courses />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== WORKBOOKS ==================== */}
//         <Route
//           path="/workbooks"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <Workbooks />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== ABOUT ==================== */}
//         <Route
//           path="/about"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <About />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== CONTACT ==================== */}
//         <Route
//           path="/contact"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <Contact />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== FORGOT PASSWORD ==================== */}
//         <Route
//           path="/forgot-password"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <ForgetPassword />
//               <Footer />
//             </>
//           }
//         />

//         {/* ==================== UNKNOWN URL ==================== */}
//         <Route
//           path="*"
//           element={<Navigate to="/" replace />}
//         />

//           {/* ==================== FORGET PASSWORD ==================== */}
//         <Route
//           path="/forgot-password"
//           element={
//             <>
//               <Navbar variant="solid" />
//               <ForgetPassword />
//               <Footer />
//             </>
//           }
//         />

//       </Routes>
//     </div>
//   )
// }

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutPreview from './components/AboutPreview.jsx'
import ContactPreview from './components/ContactPreview.jsx'
import Footer from './components/Footer.jsx'

import LoginPage from './pages/loginpage/LoginPage.jsx'
import RegisterPage from './pages/Registerpage/RegisterPage.jsx'
import ForgetPassword from './pages/forgetpassword/ForgetPassword.jsx'

import Courses from './pages/courses/Courses.jsx'
import Workbooks from './pages/workbooks/Workbooks.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Blog from './pages/blog/Blog.jsx'
import Appointment from './pages/appointment/Appointment.jsx'
import BlogDetail from './pages/blog/BlogDetail.jsx'
import Admin from './pages/admin/Admin.jsx'
import { AppointmentProvider } from './data/appointmentsStore'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <AppointmentProvider>
    <div className="min-h-screen bg-cream font-sans text-navy">
      <ScrollToTop />
      <Routes>

        {/* ==================== HOME ==================== */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutPreview />
              <ContactPreview />
              <Footer />
            </>
          }
        />

        {/* ==================== LOGIN ==================== */}

        <Route
          path="/login"
          element={
            <>
              <Navbar variant="solid" />
              <LoginPage />
              <Footer />
            </>
          }
        />

        {/* ==================== REGISTER ==================== */}

        <Route
          path="/register"
          element={
            <>
              <Navbar variant="solid" />
              <RegisterPage />
              <Footer />
            </>
          }
        />

        {/* ==================== FORGOT PASSWORD ==================== */}

        <Route
          path="/forgot-password"
          element={
            <>
              <Navbar variant="solid" />
              <ForgetPassword />
              <Footer />
            </>
          }
        />

        {/* ==================== COURSES ==================== */}

        <Route
          path="/courses"
          element={
            <>
              <Navbar variant="solid" />
              <Courses />
              <Footer />
            </>
          }
        />

        {/* ==================== WORKBOOKS ==================== */}

        <Route
          path="/workbooks"
          element={
            <>
              <Navbar variant="solid" />
              <Workbooks />
              <Footer />
            </>
          }
        />

        {/* ==================== ABOUT ==================== */}

        <Route
          path="/about"
          element={
            <>
              <Navbar variant="solid" />
              <About />
              <Footer />
            </>
          }
        />

        {/* ==================== CONTACT ==================== */}

        <Route
          path="/contact"
          element={
            <>
              <Navbar variant="solid" />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ==================== BLOG ==================== */}

        <Route
          path="/blog"
          element={
            <>
              <Navbar variant="solid" />
              <Blog />
              <Footer />
            </>
          }
        />

        {/* ==================== BLOG DETAIL ==================== */}

        <Route
          path="/blog/:id"
          element={
            <>
              <Navbar variant="solid" />
              <BlogDetail />
              <Footer />
            </>
          }
        />

        {/* ==================== APPOINTMENT ==================== */}

        <Route
          path="/appointment"
          element={
            <>
              <Navbar variant="solid" />
              <Appointment />
              <Footer />
            </>
          }
        />

        {/* ==================== ADMIN ==================== */}

        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* ==================== UNKNOWN URL ==================== */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </div>
    </AppointmentProvider>
  )
}
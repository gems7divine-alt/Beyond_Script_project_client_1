import { Navigate, Route, Routes } from 'react-router-dom'
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

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-navy">
      <Routes>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

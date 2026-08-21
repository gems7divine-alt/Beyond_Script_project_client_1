import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LoginPage from './pages/loginpage/LoginPage.jsx'
import RegisterPage from './pages/Registerpage/RegisterPage.jsx'

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
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar variant="solid" />
              <LoginPage />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar variant="solid" />
              <RegisterPage />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

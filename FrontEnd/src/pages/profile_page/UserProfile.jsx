import { useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import ProfileSidebar from '../../components/ProfileSidebar.jsx'
import ProfileCard from '../../components/ProfileCard.jsx'
import CourseSection from '../../components/CourseSection.jsx'
import Footer from '../../components/Footer.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function UserProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Navbar variant="solid" />

      <div className="relative min-h-[calc(100vh-80px)] bg-cream">
        {/* Subtle decorative botanical element bottom-left */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 opacity-[0.06]">
          <svg width="320" height="400" viewBox="0 0 320 400" fill="none">
            <path
              d="M0 400C0 400 40 300 80 250C120 200 100 150 60 120C20 90 30 40 80 20C130 0 160 50 140 100C120 150 160 200 200 180C240 160 220 100 260 80C300 60 320 100 300 140C280 180 260 220 280 260C300 300 280 350 240 370C200 390 160 360 180 320C200 280 160 260 120 300C80 340 40 380 0 400Z"
              fill="#C47A0A"
            />
            <path
              d="M60 400C60 400 90 340 110 310C130 280 120 240 90 220C60 200 70 170 100 160C130 150 150 180 140 210C130 240 150 270 180 260C210 250 200 210 230 200C260 190 270 220 260 240C250 260 240 290 250 310C260 330 250 360 230 370C210 380 190 360 200 340C210 320 190 310 170 330C150 350 130 380 60 400Z"
              fill="#C47A0A"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1440px] gap-6 px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:gap-8">
          {/* Desktop Sidebar */}
          <ProfileSidebar />

          {/* Mobile Sidebar Overlay */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm xl:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
                <motion.aside
                  key="mobile-sidebar"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-[#FCFAF5] shadow-panel xl:hidden"
                >
                  <div className="flex items-center justify-end px-4 pt-4">
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-[#E9D8B8] text-[#0B2348]/50 transition-colors hover:bg-[#F8EBCF]/30"
                      aria-label="Close sidebar"
                    >
                      <X size={18} strokeWidth={1.8} />
                    </button>
                  </div>
                  <ProfileSidebar mobile onClose={() => setSidebarOpen(false)} />
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            {/* Mobile sidebar toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="mb-4 inline-flex items-center gap-2 rounded-xl border border-[#E9D8B8] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0B2348]/70 shadow-sm transition-colors hover:bg-[#F8EBCF]/30 xl:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              Menu
            </button>

            <div className="space-y-6">
              <ProfileCard />
              <CourseSection />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  )
}

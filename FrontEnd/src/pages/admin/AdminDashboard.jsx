import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import Filters from './components/Filters'
import AppointmentTable from './components/AppointmentTable'
import Pagination from './components/Pagination'
import { stats, sessionTypes, statusOptions } from './data'
import { useAppointments } from '../../data/appointmentsStore'

const ROWS_PER_PAGE = 10

export default function AdminDashboard() {
  const { appointments } = useAppointments()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typeFilter, setTypeFilter] = useState('All Types')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const liveStats = useMemo(() => {
    const total = appointments.length
    const free = appointments.filter((a) => a.sessionType === 'Free Call Session').length
    const paid = appointments.filter((a) => a.sessionType === 'Paid 1 Hour Call Session').length
    const hw = appointments.filter((a) => a.sessionType === 'Handwriting Session').length
    const lc = appointments.filter((a) => a.sessionType === 'Life Coaching Session').length
    return [
      { id: 1, icon: 'Calendar', number: total, title: 'Total Appointments', subtitle: 'All Time' },
      { id: 2, icon: 'Phone', number: free, title: 'Free Call Sessions', subtitle: 'All Time' },
      { id: 3, icon: 'Clock', number: paid, title: 'Paid 1 Hour Sessions', subtitle: 'All Time' },
      { id: 4, icon: 'Pen', number: hw, title: 'Handwriting Sessions', subtitle: 'All Time' },
      { id: 5, icon: 'User', number: lc, title: 'Life Coaching Sessions', subtitle: 'All Time' },
    ]
  }, [appointments])

  const filtered = useMemo(() => {
    return appointments.filter((a) => {
      if (typeFilter !== 'All Types' && a.sessionType !== typeFilter) return false
      if (statusFilter !== 'All Status' && a.status !== statusFilter) return false
      if (search) {
        const q = search.toLowerCase()
        if (!a.name.toLowerCase().includes(q) && !a.email.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [typeFilter, statusFilter, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedData = filtered.slice((safePage - 1) * ROWS_PER_PAGE, safePage * ROWS_PER_PAGE)
  const startItem = filtered.length === 0 ? 0 : (safePage - 1) * ROWS_PER_PAGE + 1
  const endItem = Math.min(safePage * ROWS_PER_PAGE, filtered.length)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#FCFAF5]">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              key="mobile-sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 xl:hidden"
            >
              <Sidebar mobile onClose={() => setMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 md:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            {liveStats.map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>

          {/* Appointments Section */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-[#0B2348] sm:text-lg">All Appointments</h2>
            </div>

            {/* Filters */}
            <div className="mb-5">
              <Filters
                typeFilter={typeFilter}
                setTypeFilter={(v) => { setTypeFilter(v); setCurrentPage(1) }}
                statusFilter={statusFilter}
                setStatusFilter={(v) => { setStatusFilter(v); setCurrentPage(1) }}
                search={search}
                setSearch={(v) => { setSearch(v); setCurrentPage(1) }}
              />
            </div>

            {/* Table */}
            <AppointmentTable data={paginatedData} />

            {/* Pagination */}
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={filtered.length}
              startItem={startItem}
              endItem={endItem}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

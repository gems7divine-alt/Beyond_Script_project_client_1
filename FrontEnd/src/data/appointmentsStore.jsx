import { createContext, useContext, useState, useCallback } from 'react'

const AppointmentContext = createContext(null)

const initialAppointments = [
  {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    sessionType: 'Free Call Session',
    date: 'May 23, 2024',
    time: '10:00 AM',
    status: 'Confirmed',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    email: 'rahul.verma@gmail.com',
    sessionType: 'Paid 1 Hour Call Session',
    date: 'May 23, 2024',
    time: '11:30 AM',
    status: 'Confirmed',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    email: 'ananya.patel@gmail.com',
    sessionType: 'Handwriting Session',
    date: 'May 23, 2024',
    time: '01:00 PM',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    email: 'vikram.singh@gmail.com',
    sessionType: 'Life Coaching Session',
    date: 'May 23, 2024',
    time: '03:00 PM',
    status: 'Confirmed',
  },
  {
    id: 5,
    name: 'Sneha Iyer',
    email: 'sneha.iyer@gmail.com',
    sessionType: 'Paid 1 Hour Call Session',
    date: 'May 24, 2024',
    time: '10:00 AM',
    status: 'Confirmed',
  },
  {
    id: 6,
    name: 'Karan Mehta',
    email: 'karan.mehta@gmail.com',
    sessionType: 'Free Call Session',
    date: 'May 24, 2024',
    time: '11:00 AM',
    status: 'Cancelled',
  },
  {
    id: 7,
    name: 'Meera Nair',
    email: 'meera.nair@gmail.com',
    sessionType: 'Handwriting Session',
    date: 'May 24, 2024',
    time: '02:00 PM',
    status: 'Confirmed',
  },
  {
    id: 8,
    name: 'Arjun Reddy',
    email: 'arjun.reddy@gmail.com',
    sessionType: 'Life Coaching Session',
    date: 'May 24, 2024',
    time: '04:30 PM',
    status: 'Pending',
  },
  {
    id: 9,
    name: 'Divya Tiwari',
    email: 'divya.tiwari@gmail.com',
    sessionType: 'Paid 1 Hour Call Session',
    date: 'May 25, 2024',
    time: '10:30 AM',
    status: 'Confirmed',
  },
  {
    id: 10,
    name: 'Rohit Kapoor',
    email: 'rohit.kapoor@gmail.com',
    sessionType: 'Handwriting Session',
    date: 'May 25, 2024',
    time: '01:30 PM',
    status: 'Confirmed',
  },
]

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState(initialAppointments)

  const addAppointment = useCallback((appointment) => {
    setAppointments((prev) => [
      {
        id: Date.now(),
        name: appointment.name || '',
        email: appointment.email || '',
        sessionType: appointment.sessionType || 'Free Call Session',
        date: appointment.date || '',
        time: appointment.time || '',
        status: 'Pending',
      },
      ...prev,
    ])
  }, [])

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}

export function useAppointments() {
  const ctx = useContext(AppointmentContext)
  if (!ctx) throw new Error('useAppointments must be used within AppointmentProvider')
  return ctx
}

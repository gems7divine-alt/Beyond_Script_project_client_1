import { BookOpen, ArrowRight, ChevronRight, Clock, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import CourseTable from './CourseTable.jsx'

const sampleCourses = [
  {
    id: 1,
    title: 'Life Transformation Mastery',
    subtitle: 'Unlock your true potential',
    progress: 65,
    timeSpent: '12h 30m',
    lastAccessed: 'May 20, 2025',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    title: 'Mindset & Inner Growth',
    subtitle: 'Build a powerful mindset',
    progress: 40,
    timeSpent: '8h 15m',
    lastAccessed: 'May 18, 2025',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    title: 'Confidence & Self Love',
    subtitle: 'Become your best self',
    progress: 100,
    timeSpent: '8h 00m',
    lastAccessed: 'May 10, 2025',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
]

function CourseMobileCard({ course }) {
  const isCompleted = course.status === 'Completed'
  return (
    <div className="rounded-xl border border-[#E9D8B8]/70 p-4 transition-colors hover:bg-[#FDF6EC]/30">
      <div className="mb-3 flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-[#E9D8B8]/60">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-semibold text-[#0B2348]">{course.title}</p>
          <p className="truncate text-[11.5px] text-[#0B2348]/45">{course.subtitle}</p>
        </div>
        <button className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[#0B2348]/30" aria-label={`View ${course.title}`}>
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="mb-3 flex items-center gap-2.5">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E9D8B8]/60">
          <div
            className={`h-full rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-gold-gradient'}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <span className="text-[12px] font-semibold text-[#0B2348]/60">{course.progress}%</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-[11.5px] text-[#0B2348]/50">
            <Clock size={12} strokeWidth={1.8} /> {course.timeSpent}
          </span>
          <span className="flex items-center gap-1 text-[11.5px] text-[#0B2348]/50">
            <CalendarDays size={12} strokeWidth={1.8} /> {course.lastAccessed}
          </span>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            isCompleted ? 'bg-emerald-50 text-emerald-700' : 'bg-[#F8EBCF]/60 text-[#C47A0A]'
          }`}
        >
          {course.status}
        </span>
      </div>
    </div>
  )
}

export default function CourseSection({ courses = sampleCourses }) {
  return (
    <div className="rounded-2xl border border-[#E9D8B8] bg-white p-6 shadow-soft md:p-8">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#F8EBCF]/60">
            <BookOpen size={18} className="text-[#C47A0A]" strokeWidth={1.8} />
          </div>
          <h2 className="font-serif text-[20px] font-bold text-[#0B2348] md:text-[24px]">
            My Courses
          </h2>
        </div>
        <Link
          to="/courses"
          className="flex items-center gap-1.5 text-[13px] font-semibold text-[#C47A0A] transition-colors hover:text-[#a86908]"
        >
          View All Courses
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>

      {/* Desktop Table (hidden on small screens) */}
      <div className="hidden md:block">
        <CourseTable courses={courses} />
      </div>

      {/* Mobile Cards (visible on small screens) */}
      <div className="flex flex-col gap-3 md:hidden">
        {courses.map((course) => (
          <CourseMobileCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

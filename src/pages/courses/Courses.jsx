import { useMemo, useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import CourseCard from '../../components/CourseCard.jsx'
import CourseSidebar from '../../components/CourseSidebar.jsx'
import { courses, sortOptions } from '../../data/courses'

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [sortOpen, setSortOpen] = useState(false)

  const filteredCourses = useMemo(() => {
    let result = [...courses]

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      )
    }

    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory)
    }

    if (priceFilter === 'free') {
      result = result.filter((c) => !c.isPaid)
    } else if (priceFilter === 'paid') {
      result = result.filter((c) => c.isPaid)
    }

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return result
  }, [searchQuery, activeCategory, priceFilter, sortBy])

  const currentSortLabel = sortOptions.find((o) => o.value === sortBy)?.label || 'Popular'

  return (
    <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Top Row: Title Left, Search + Sort Right */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h1 className="mb-3 font-serif text-4xl font-bold text-navy md:text-5xl">
              Courses
            </h1>
            <p className="text-base leading-relaxed text-navy/60 md:text-lg">
              Discover transformative courses to help you grow, heal, and become your best self.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64 lg:w-72">
              <Search
                size={18}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="h-12 w-full rounded-xl border border-gold/15 bg-white pl-10 pr-4 text-sm text-navy shadow-soft placeholder:text-navy/40 focus:border-gold/40 focus:outline-none"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setSortOpen((prev) => !prev)}
                className="flex h-12 items-center gap-2 whitespace-nowrap rounded-xl border border-gold/15 bg-white px-4 text-sm font-medium text-navy shadow-soft transition-colors hover:border-gold/30"
              >
                Sort by: {currentSortLabel}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {sortOpen && (
                <ul className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-xl border border-gold/15 bg-white py-1.5 shadow-panel">
                  {sortOptions.map(({ value, label }) => (
                    <li key={value}>
                      <button
                        onClick={() => {
                          setSortBy(value)
                          setSortOpen(false)
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                          sortBy === value
                            ? 'bg-gold/10 font-semibold text-gold'
                            : 'text-navy/70 hover:bg-gold/5 hover:text-navy'
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Main Content: Sidebar + Grid */}
        <div className="flex flex-col gap-8 lg:flex-row">
          <CourseSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            priceFilter={priceFilter}
            onPriceChange={setPriceFilter}
          />

          <div className="min-w-0 flex-1">
            <p className="mb-5 text-sm text-navy/50">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>

            {filteredCourses.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/10 bg-white py-20 text-center shadow-soft">
                <Search size={40} className="mb-4 text-navy/20" />
                <p className="font-serif text-xl font-bold text-navy">No courses found</p>
                <p className="mt-1 text-sm text-navy/50">
                  Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

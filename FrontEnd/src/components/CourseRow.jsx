import { ChevronRight } from 'lucide-react'

export default function CourseRow({ course }) {
  const {
    title,
    subtitle,
    progress,
    timeSpent,
    lastAccessed,
    status,
    image,
  } = course

  const isCompleted = status === 'Completed'

  return (
    <tr className="group border-b border-[#E9D8B8]/60 transition-colors last:border-b-0 hover:bg-[#FDF6EC]/40">
      {/* Course Title */}
      <td className="py-4 pr-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-[#E9D8B8]/60">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13.5px] font-semibold text-[#0B2348]">
              {title}
            </p>
            <p className="truncate text-[11.5px] text-[#0B2348]/45">
              {subtitle}
            </p>
          </div>
        </div>
      </td>

      {/* Progress */}
      <td className="py-4 pr-4">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-24 overflow-hidden rounded-full bg-[#E9D8B8]/60">
            <div
              className={`h-full rounded-full transition-all ${
                isCompleted ? 'bg-emerald-500' : 'bg-gold-gradient'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[12px] font-semibold text-[#0B2348]/60">
            {progress}%
          </span>
        </div>
      </td>

      {/* Time Spent */}
      <td className="py-4 pr-4 text-[13px] text-[#0B2348]/65 hidden md:table-cell">
        {timeSpent}
      </td>

      {/* Last Accessed */}
      <td className="py-4 pr-4 text-[13px] text-[#0B2348]/65 hidden lg:table-cell">
        {lastAccessed}
      </td>

      {/* Status */}
      <td className="py-4 pr-4">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[11.5px] font-semibold ${
            isCompleted
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-[#F8EBCF]/60 text-[#C47A0A]'
          }`}
        >
          {status}
        </span>
      </td>

      {/* Action */}
      <td className="py-4">
        <button
          className="grid h-8 w-8 place-items-center rounded-lg text-[#0B2348]/30 transition-colors group-hover:bg-[#F8EBCF]/40 group-hover:text-[#C47A0A]"
          aria-label={`View ${title}`}
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </td>
    </tr>
  )
}

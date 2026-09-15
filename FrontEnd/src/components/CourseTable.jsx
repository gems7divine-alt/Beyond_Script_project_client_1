import CourseRow from './CourseRow.jsx'

export default function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-[#E9D8B8]">
            <th className="pb-3 pr-4 text-left text-[11.5px] font-semibold tracking-wide text-[#0B2348]/40 uppercase">
              Course Title
            </th>
            <th className="pb-3 pr-4 text-left text-[11.5px] font-semibold tracking-wide text-[#0B2348]/40 uppercase">
              Progress
            </th>
            <th className="pb-3 pr-4 text-left text-[11.5px] font-semibold tracking-wide text-[#0B2348]/40 uppercase hidden md:table-cell">
              Time Spent
            </th>
            <th className="pb-3 pr-4 text-left text-[11.5px] font-semibold tracking-wide text-[#0B2348]/40 uppercase hidden lg:table-cell">
              Last Accessed
            </th>
            <th className="pb-3 pr-4 text-left text-[11.5px] font-semibold tracking-wide text-[#0B2348]/40 uppercase">
              Status
            </th>
            <th className="pb-3 text-left text-[11.5px] font-semibold tracking-wide text-[#0B2348]/40 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

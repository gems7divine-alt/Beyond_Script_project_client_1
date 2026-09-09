import SessionType from './SessionType'
import StatusBadge from './StatusBadge'
import ActionButtons from './ActionButtons'

const columns = ['#', 'User Name', 'Email ID', 'Session Type', 'Date', 'Time', 'Status', 'Actions']

export default function AppointmentTable({ data }) {
  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-[#E9D8B8] bg-white p-12 text-center">
        <p className="text-[15px] font-semibold text-[#0B2348]/50">No appointments found</p>
        <p className="mt-1 text-[13px] text-[#0B2348]/35">Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[#E9D8B8] bg-white">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="border-b border-[#E9D8B8] bg-[#F8EBCF]/25">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-left text-[11.5px] font-bold tracking-wide text-[#0B2348]/60 uppercase"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id}
              className="border-b border-[#E9D8B8]/50 transition-colors last:border-b-0 hover:bg-[#F8EBCF]/15"
            >
              <td className="px-4 py-3.5 text-[13px] font-medium text-[#0B2348]/40">{i + 1}</td>
              <td className="px-4 py-3.5 text-[13px] font-semibold text-[#0B2348]">{row.name}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#0B2348]/55">{row.email}</td>
              <td className="px-4 py-3.5">
                <SessionType type={row.sessionType} />
              </td>
              <td className="px-4 py-3.5 text-[13px] text-[#0B2348]/60">{row.date}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#0B2348]/60">{row.time}</td>
              <td className="px-4 py-3.5">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3.5">
                <ActionButtons />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

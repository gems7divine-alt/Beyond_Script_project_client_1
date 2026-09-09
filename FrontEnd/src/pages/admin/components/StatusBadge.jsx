const styles = {
  Confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  Pending: 'bg-amber-50 text-amber-700 border-amber-200/60',
  Cancelled: 'bg-red-50 text-red-600 border-red-200/60',
}

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-block rounded-md border px-2.5 py-0.5 text-[11.5px] font-semibold ${styles[status] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
      {status}
    </span>
  )
}

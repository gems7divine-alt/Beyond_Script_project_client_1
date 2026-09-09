const styles = {
  'Free Call Session': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  'Paid 1 Hour Call Session': 'bg-purple-50 text-purple-700 border-purple-200/60',
  'Handwriting Session': 'bg-amber-50 text-amber-700 border-amber-200/60',
  'Life Coaching Session': 'bg-blue-50 text-blue-700 border-blue-200/60',
}

export default function SessionType({ type }) {
  return (
    <span className={`inline-block rounded-md border px-2.5 py-0.5 text-[11.5px] font-semibold ${styles[type] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
      {type}
    </span>
  )
}

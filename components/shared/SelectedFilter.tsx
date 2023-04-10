interface SelectedFilterProps {
  subject: string
  onRemove: (subjects: string) => void
}
export default function SelectedFilter({ subject, onRemove }: SelectedFilterProps) {
  return (
    <span className="inline-flex items-center rounded-lg bg-blue-100 py-2 px-3 text-sm font-medium text-primary ">
      {subject}
      <button
        onClick={() => onRemove(subject)}
        type="button"
        className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-primary hover:bg-blue-200 hover:text-blue-900 focus:bg-blue-500 focus:text-white focus:outline-none"
      >
        <span className="sr-only">Remove large option</span>
        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  )
}

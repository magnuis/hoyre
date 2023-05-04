'use client'
import { Subject } from 'type'

interface SelectedFilterProps {
  subject: Subject
  onRemove: (subject: Subject) => void
}
export default function SelectedFilter({ subject, onRemove }: SelectedFilterProps) {
  return (
    <span className="mt-1 inline-flex items-center rounded-lg bg-blue-100 py-2 px-3 text-sm font-medium text-primary ">
      {subject.title}
      <button
        onClick={() => {
          onRemove(subject)
          console.log('remove: ', subject)
        }}
        type="button"
        className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-primary hover:bg-light hover:text-secondary_dark focus:bg-primary focus:text-white focus:outline-none"
      >
        <span className="sr-only">Remove large option</span>
        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  )
}

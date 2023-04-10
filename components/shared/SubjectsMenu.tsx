import { useEffect, useState, useRef } from 'react'

interface SubjectsMenuProps {
  subjects: { title: string }[]
  selectedSubjects: string[]
  onAddSubject: (subject: string) => void
}

export default function SubjectsMenu({
  subjects,
  selectedSubjects,
  onAddSubject,
}: SubjectsMenuProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  return (
    <div className="w-fit max-w-lg h-16">
      <select
        placeholder="Velg emner..."
        id="countries"
        value={selectedSubject}
        onChange={(e) => {
          setSelectedSubject('')
          onAddSubject(e.target.value)
        }}
        className="p-2 pr-10 block w-fulltext-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
        // className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled selected>
          Velg emne...
        </option>
        {subjects &&
          subjects.map((subject) => (
            <option key={subject.title} value={subject.title}>
              {subject.title}
            </option>
          ))}
      </select>
    </div>
  )
}

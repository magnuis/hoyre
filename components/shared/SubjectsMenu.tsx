'use client'
// import { useState } from 'react'

// interface SubjectsMenuProps {
//   subjects: Array<{ title: string }>
//   selectedSubjects: string[]
//   onAddSubject: (subject: string) => void
// }

// export default function SubjectsMenu({
//   subjects,

//   onAddSubject,
// }: SubjectsMenuProps) {
//   const [selectedSubject, setSelectedSubject] = useState<string>('')
//   return (
//     <div className="w-fit max-w-lg h-16">
//       <select
//         placeholder="Velg emner..."
//         id="countries"
//         value={selectedSubject}
//         onChange={(e) => {
//           setSelectedSubject('')
//           onAddSubject(e.target.value)
//         }}
//         className="p-2 pr-10 block w-fulltext-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
//         // className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       >
//         <option value="" disabled>
//           Velg emne...
//         </option>
//         {subjects &&
//           subjects.map((subject) => (
//             <option key={subject.title} value={subject.title}>
//               {subject.title}
//             </option>
//           ))}
//       </select>
//     </div>
//   )
// }

interface SubjectsMenuProps {
  subjects: string[]
  // subjects: Array<{ title: string; _id: string }>
  selectedSubjects: string[]
  onAddSubject: (value: string) => void
}
import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function Example({ subjects, onAddSubject }: SubjectsMenuProps) {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  const filteredSubjects =
    query === ''
      ? subjects
      : subjects.filter((subject) =>
          subject
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="relative z-20 w-36">
      <Combobox value={selected} onChange={onAddSubject}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder={'Velg emne'}
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              // displayValue={() => 'Velg emne'}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredSubjects.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredSubjects.map((subject) => (
                  <Combobox.Option
                    key={subject}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={subject}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {subject}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

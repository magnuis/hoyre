'use client'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Subject } from 'type'

interface SubjectsMenuProps {
  subjects: Subject[]
  onAddSubject: (value: Subject) => void
}

export default function SubjectsMenu({ subjects, onAddSubject }: SubjectsMenuProps) {
  const [selected, setSelected] = useState<string>('')
  const [query, setQuery] = useState<string>('')

  const filteredSubjects =
    query === ''
      ? subjects
      : subjects.filter((subject) =>
          subject.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const selectSubject = (title: string) => {
    const subject = subjects.find((subject) => subject.title === title)
    if (subject) {
      onAddSubject(subject)
      setSelected(subject.title)
    }
  }

  return (
    <div className="relative z-20 w-36 h-16 items-center">
      <Combobox value={selected} onChange={selectSubject}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-200 sm:text-sm">
            <Combobox.Input
              placeholder={'Velg emne'}
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-dark_gray focus:ring-0"
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
                    key={subject.title}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? 'bg-primary text-white' : 'text-dark_gray'
                      }`
                    }
                    value={subject.title}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {subject.title}
                        </span>
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

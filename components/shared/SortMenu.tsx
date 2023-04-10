// 'use client'
// import { Listbox, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// export default function SortMenu({ sort, setSort }: SortMenuProps) {
//   const [selected, setSelected] = useState('Nyeste først')
//   return (
//     <Listbox>
//       {({ open }) => (
//         <>
//           <div className="relative mt-2">
//             <Listbox.Button className="relative w-36 cursor-default rounded-md bg-white p-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
//               <span className="block truncate">{selected}</span>
//               <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </span>
//             </Listbox.Button>
//             <Transition
//               show={open}
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 <Listbox.Option
//                   key={'1'}
//                   className={'relative cursor-default select-none py-2 pl-3 pr-9'}
//                   value={'Eldste først'}
//                   onClick={() => {
//                     setSort('desc')
//                     setSelected('Eldste først')
//                   }}
//                 >
//                   <span>Eldste først</span>
//                 </Listbox.Option>
//                 <Listbox.Option
//                   key={'2'}
//                   className={`
//                    relative cursor-default select-none py-2 pl-3 pr-9`}
//                   value={'Nyeste først'}
//                   onClick={() => {
//                     setSort('asc')
//                     setSelected('Nyeste først')
//                   }}
//                 >
//                   <span>Nyeste først</span>
//                 </Listbox.Option>
//               </Listbox.Options>
//             </Transition>
//             {/* </div> */}
//           </div>
//         </>
//       )}
//     </Listbox>
//   )
// }

'use client'

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface SortMenuProps {
  sort: string
  setSort: (sort: string) => void
}

export default function SortMenu({ sort: sort, setSort: setSort }: SortMenuProps) {
  return (
    <div className="relative z-21 w-36">
      <Listbox value={sort} onChange={setSort}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {sort === 'asc' ? 'Eldste først' : 'Nyeste først'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <Listbox.Option
                key={'asc'}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={'asc'}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {'Eldste først'}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
              <Listbox.Option
                key={'desc'}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={'desc'}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {'Nyeste først'}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

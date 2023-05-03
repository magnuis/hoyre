import { Fragment, useState, useRef, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'

interface SelectYearDropdownProps {
  selectedOption: string
  setSelectedOption: (option: string) => void
}

const years = ['2023', '2022']

export default function SelectYearDropdown({
  selectedOption,
  setSelectedOption,
}: SelectYearDropdownProps) {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuRef.current) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          setHighlightedIndex((prev) => Math.max(prev - 1, 0))
          break
        case 'ArrowDown':
          setHighlightedIndex((prev) => Math.min(prev + 1, years.length - 1))
          break
        case 'Enter':
          setSelectedOption(years[highlightedIndex])
          break
        default:
          break
      }
    }

    menuRef.current.addEventListener('keydown', handleKeyDown)

    return () => {
      menuRef.current?.removeEventListener('keydown', handleKeyDown)
    }
  }, [highlightedIndex, setSelectedOption])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedOption}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="z-10 absolute right-0 mt-2 w-20 text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          ref={menuRef}
        >
          <div className="">
            {years.map((year, index) => (
              <Menu.Item key={year}>
                {({ active }) => (
                  <span
                    onClick={() => setSelectedOption(year)}
                    // className={`hover:bg-lighter pr-4 py-1 text  flex items-center justify-end`}
                    className={`${
                      active || highlightedIndex === index
                        ? 'bg-lighter text-primary'
                        : 'text-gray-700'
                    } pr-4 py-1 text  flex items-center justify-end hover:bg-lighter hover:text-primary`}
                  >
                    {selectedOption === year && (
                      <CheckIcon
                        className="h-3 w-3 text-primary font-bold mr-1"
                        aria-hidden="true"
                      />
                    )}
                    {year}
                  </span>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

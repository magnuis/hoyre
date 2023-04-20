'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Smaken av Stavanger', href: '/smaken-av-stavanger' },
  { name: 'Sommer med Sissel', href: '/sommer-med-sissel' },
  { name: 'Høyre i media', href: '/hoyre-i-media' },
  { name: 'Om Sissel', href: '/om-sissel' },
  { name: 'Laget', href: '/laget' },
]

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        {!mobileMenuOpen && <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
        {mobileMenuOpen && <XMarkIcon className="h-6 w-6" aria-hidden="true" />}
      </button>
      <Dialog
        as="div"
        className="lg:hidden transition-all duration-300 ease-in-out"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="z-30 fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <Link className="-m-1.5 p-1.5" href={'/'}>
                <span className="flex flex-row text-primary gap-x-3 items-center text-lg">
                  <img
                    src="https://hoyre.no/content/uploads/2020/08/hoyre-logo-blue_1839da23.svg"
                    alt="logo"
                    className="h-9"
                  />
                  Stavanger Høyre
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => {
                setMobileMenuOpen(false)
              }}
            >
              <span className="sr-only">Close menu</span>

              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

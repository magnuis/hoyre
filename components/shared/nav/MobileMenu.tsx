'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button'

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Smaken av Stavanger', href: '/smaken-av-stavanger' },
  { name: 'Sommer med Sissel', href: '/sommer-med-sissel' },
  { name: 'Høyre i media', href: '/hoyre-i-media' },
  { name: 'Bli kjent med Sissel', href: '/bli-kjent-med-sissel' },
  { name: 'Veien til valget', href: '/veien-til-valget' },
  { name: 'Videoer', href: '/videoer' },
]

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex xl:hidden text-primary">
      <button
        type="button"
        className=" inline-flex items-center justify-center rounded-md "
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        {!mobileMenuOpen && <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
        {mobileMenuOpen && <XMarkIcon className="h-6 w-6" aria-hidden="true" />}
      </button>
      <Dialog
        as="div"
        className="xl:hidden transition-all duration-300 ease-in-out"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto sm:bg-white bg-lighter_gray px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-dark_gray/10">
          <div className="flex justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => {
                setMobileMenuOpen(false)
              }}
            >
              <span className="sr-only">Close menu</span>

              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="flex flex-col w-full space-y-1 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded  px-3 w-full py-2 tracking-wide font-light leading-7 hover:bg-gray-50 text-primary text-xl bg-white mx-auto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <span className="flex">
              <Button text={'BLI MED PÅ LAGET'} href={'https://hoyre.no/bli-med/'} />
            </span>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const navigation = [
  { name: 'Smaken av Stavanger', href: '/smaken-av-stavanger' },
  { name: 'Sommer med Sissel', href: '/sommer-med-sissel' },
  { name: 'Høyre i media', href: '/hoyre-i-media' },
]

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setShowHeader(
        prevScrollPos >= currentScrollPos || currentScrollPos <= 0 || prevScrollPos === 0
      )
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header
      className={`z-50 max-w-7xl w-full fixed bg-white transition-all duration-500 ease-in-out ${
        showHeader ? 'top-0 ' : 'top-[-100%]'
      } ease-in-out `}
    >
      <nav
        className="flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-0"
        aria-label="Global"
      >
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
        <MobileMenu />
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

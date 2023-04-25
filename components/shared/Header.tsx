'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { useScrollToTop } from 'hooks/useScrollToTop'

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Smaken av Stavanger', href: '/smaken-av-stavanger' },
  { name: 'Sommer med Sissel', href: '/sommer-med-sissel' },
  { name: 'Høyre i media', href: '/hoyre-i-media' },
  { name: 'Om Sissel', href: '/om-sissel' },
  { name: 'Laget', href: '/laget' },
]

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useScrollToTop()

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
      className={`z-50 w-full fixed bg-white transition-all duration-500 ease-in-out ${
        showHeader ? 'top-0 ' : 'top-[-100%]'
      } ease-in-out text-primary`}
    >
      <nav
        className="flex mx-auto max-w-7xl items-center justify-between p-4 md:px-8 md:py-5 xl:px-0 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href={'/'}>
            <span className="flex flex-row gap-x-3 items-center text-lg font-light">
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
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light leading-6 rounded-full hover:bg-gray-100 hover:text-dark_gray px-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

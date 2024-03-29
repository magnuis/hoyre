'use client'
import { useEffect, useState } from 'react'
import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'

export default function MainImageComponent(image: { _id: string }) {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    let animationFrameId: number
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const viewportHeight = window.innerHeight
      const isScrolled = scrollTop >= 2 * viewportHeight
      animationFrameId = window.requestAnimationFrame(() => {
        setScrolled(isScrolled)
      })
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.cancelAnimationFrame(animationFrameId)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-[100vw] h-screen z-[-1] text-center ${
        scrolled ? 'bg-white' : 'bg-cover bg-center'
      }`}
      style={
        !scrolled
          ? {
              backgroundImage: `url(${
                image._id
                  ? urlFor(image._id).format('webp').url()
                  : 'https://hoyre.no/content/uploads/sites/212/2021/11/2W9A5316-kopi-1024x660.jpg'
              })`,
            }
          : {}
      }
    />
  )
}

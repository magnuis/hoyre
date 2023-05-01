'use client'
import { useEffect, useState } from 'react'
import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'

export default function MainImageComponent(image: { _id: string }) {
  const [scrolled, setScrolled] = useState<Boolean>(false)
  const [color, setColor] = useState<string>('text-primary')

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

  useEffect(() => {
    if (scrolled) {
      setColor('text-white')
    } else {
      setColor('text-primary')
    }
  }, [scrolled])

  return (
    <>
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
      <div
        className="absolute bottom-0 left-0 w-full h-[100vh] text-center"
        style={{
          background: 'linear-gradient(to bottom, rgba(4, 20, 52, 0), rgba(4, 20, 52, 1))',
        }}
      >
        <p
          className={`relative top-[70vh] md:top-[80vh] ${color} text-3xl sm:text-4xl md:text-6xl ${poppins.className} font-semibold tracking-wide`}
        >
          Bli kjent med Sissel
        </p>
      </div>
    </>
  )
}

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'
import Button from './Button'

interface CarouselProps {
  content: c[]
}

interface c {
  content: any
  title: string
  description: string
  button: string
  image: string
}

export default function Carousel({ content }: CarouselProps): JSX.Element {
  const [cont, setCont] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const xy = setInterval(() => {
      if (cont === content.length - 1) {
        setCont(0)
        setActiveSlide(0)
      } else {
        setCont(cont + 1)
        setActiveSlide(activeSlide + 1)
      }
    }, 7000)

    return () => clearInterval(xy)
  }, [cont])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)

    elem?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full aspect-[1] sm:aspect-[10/6] max-h-[77vh] mt-20">
      {content.map((item, index) => (
        <div
          key={index + 1}
          id={`slider-${index + 1}`}
          className={`w-full ${
            index === 0 ? '' : 'absolute'
          } top-20 left-0 duration-1000 ease-in-out transition-opacity ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          } md:px-8 xl:px-0 `}
        >
          <div
            className="mx-auto max-w-7xl bg-cover bg-center w-full aspect-[1] sm:aspect-[10/6] max-h-[77vh] text-white flex items-end pb-10 justify-center"
            style={{
              backgroundImage: `url(${urlFor(item.content.image)
                .width(1280)
                .format('webp')
                .url()})`,
            }}
          >
            <div className="flex flex-col items-center">
              <span
                className={`text-3xl md:text-5xl font-bold flex flex-col sm:flex-row text-center justify-center ${poppins.className}`}
              >
                <span className="flex translate-x-2 sm:translate-x-0 mb-3">
                  <p className="mr-3 underline italic">SAMMEN </p>
                  <p className="mr-3">FOR</p>
                </span>
                <p>STAVANGER</p>
              </span>
              <p className={`text-lg font-bold mb-3`}>Vil du se mer av hva vi driver med?</p>

              <Link
                href="#taste-of-stavanger"
                onClick={handleScroll}
                className="rounded bg-primary text-center p-2 w-fit text-white hover:bg-primary_dark transition-colors duration-300 ease-in-out"
              >
                Se mer
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

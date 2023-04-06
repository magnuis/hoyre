'use client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Image from 'next/image'
import { Key, useEffect, useState } from 'react'
import { client } from 'sanity-conf/sanity.client'
import { CustomImage } from 'type'
import { LandingImageCard } from './LandingImageCard'

const builder = imageUrlBuilder(client)

interface GalleryProps {
  images: CustomImage[]
}

export const ImageGallery = ({ images }: GalleryProps) => {
  const [current, setCurrent] = useState<number>(0)

  const increment = () => {
    if (current === images.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }
  useEffect(() => {
    setInterval(() => increment(), 3000)
  }, [current])

  //   const imageCards = images.map((image: CustomImage) => {
  //     return <LandingImageCard image={image} />
  //   })

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
  }
  return (
    <main>
      {/* <div className="relative w-full h-96">{<LandingImageCard image={images[current]} />}</div> */}
      <div className="slide-container">
        <Slide>
          {images.map((slideImage, index) => (
            <div key={index}>
              <div
                className="h-48 sm:h-96 object-center"
                style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </main>
  )
}

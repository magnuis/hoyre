'use client'
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from 'sanity-conf/sanity.client'

const builder = imageUrlBuilder(client)
interface RandomImageGridProps {
  images: {
    _id: string
  }[]
}

export default function RandomImageGrid({ images }: RandomImageGridProps) {
  const [gridImages, setGridImages] = useState(images.slice(0, 12))
  const [excludedImages, setExcludedImages] = useState(images.slice(12))

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * gridImages.length)
      const randomImageIndex = Math.floor(Math.random() * excludedImages.length)

      const newGridImages = [...gridImages]
      const newExcludedImages = [...excludedImages]

      const oldImage = gridImages[index]
      const newImage = excludedImages[randomImageIndex]

      newGridImages[index] = newImage
      newExcludedImages[randomImageIndex] = oldImage
      setGridImages(newGridImages)
      setExcludedImages(newExcludedImages)
    }, 1000)
    return () => clearInterval(interval)
  }, [gridImages])

  return (
    <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 md:w-1/2">
      {gridImages.map((image, index) => (
        <img
          key={index}
          src={builder.image(image).format('webp').width(150).url()}
          alt={''}
          className={`${
            index === 0
              ? 'rounded-tl-xl'
              : index === 3
              ? 'rounded-tr-xl md:rounded-none'
              : index === 9
              ? 'md:rounded-bl-xl rounded-none'
              : ''
          } w-max aspect-square object-cover object-center duration-1000 ease-in-out transition-opacity`}
        />
      ))}
    </div>
  )
}

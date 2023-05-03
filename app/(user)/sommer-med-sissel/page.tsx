'use client'

import React, { useState, useEffect } from 'react'
import SummerPostCard, { summerPostCard } from 'components/sommerMedSissel/SummerPostCard'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { poppins } from 'styles/fonts'
import generateThumbnailUrl from 'components/appearance/Thumbnail'

const builder = imageUrlBuilder(client)

const SummerWSissel: React.FC = () => {
  const [summerPosts, setSummerPosts] = useState<SummerPostCardProps[]>([])
  const [selectedOption, setSelectedOption] = useState<string>('')

  useEffect(() => {
    setSelectedOption('sommer23')
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const selectedYear = selectedOption === 'sommer22' ? 2022 : 2023
        const postQuery = groq`
        *[_type=='summerPost'] {
          title,
          slug,
          image,
          description, 
          date, 
          _id
        }`

        const fetchedPosts = await client.fetch<SummerPostCardProps[]>(postQuery)
        console.log('Fetched posts:', fetchedPosts) // Log the fetched data

        const filteredPosts = fetchedPosts.filter(
          (post) => new Date(post.date).getFullYear() === selectedYear
        )

        setSummerPosts(filteredPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [selectedOption])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="pt-24 sm:pt-36 md:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="mx-auto max-w-2xl lg:pb-8">
            <span className="text-center">
              <h1 className={`font-medium tracking-wide text-2xl sm:text-5xl ${poppins.className}`}>
                Sommer med Sissel
              </h1>
            </span>
            <p className="mt-10 text-xl leading-8 text-gray">
              Sissel har bodd i Stavanger i over 30 år, og har en stor lidenskap for å vise frem
              byen. Bli med på en spennende sommertur i Stavanger og omegn, og opplev byen fra en
              helt ny vinkel.
            </p>
            <p className="mt-6 text-base leading-7 text-gray">
              Visste du at Stavanger har 52 hverdagsturer spredd utover hver eneste bydel? Eller at
              Breiavatnet og Stokkavatnet ikke er de eneste stedene å mate ender? Les videre for å
              finne ut mer!
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"></div>
        </div>
      </div>
      <div className="bg-white pb-24 sm:pb-32 pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="dropdown-container flex justify-center py-4">
              <select value={selectedOption} onChange={handleChange} suppressHydrationWarning>
                <option value="sommer23">Sommer 23</option>
                <option value="sommer22">Sommer 22</option>
              </select>
            </div>
            <div className="space-y-16 lg:space-y-16">
              {summerPosts.map((post: summerPostCard, index: number) => (
                <div key={post._id}>
                  <SummerPostCard post={post} first={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummerWSissel

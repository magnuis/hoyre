import SummerPostCard, { summerPostCardProps } from 'components/sommerMedSissel/SummerPostCard'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import BlogPostsList from './blogPostCardList'

const builder = imageUrlBuilder(client)

export default async function Blogg() {
  const postQuery = groq`
*[_type=='blogPost'] {
title, slug, image, description, date, _id 
} `
  const imgQuery = groq`*[_type == "sanity.imageAsset" && references("SmPITB92PCr5r7guzAyPD2")] {
  url,
  alt,
  _id
}`

  const summerPosts = await client.fetch(postQuery)
  const images = await client.fetch(imgQuery)

  // TODO fix responsive rendering of images
  return (
    <div className=" bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Artikler om Stavanger Høyre
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Her har vi samlet et par artikler der Stavanger Høyre og Sissel er omtalt, slik at du
              kan få med deg hva som blir sagt.
            </p>
          </div>
          <BlogPostsList />
        </div>
      </div>
    </div>
  )
}

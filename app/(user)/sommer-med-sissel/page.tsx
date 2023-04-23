import SummerPostCard, { summerPostCardProps } from 'components/sommerMedSissel/SummerPostCard'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { poppins } from 'styles/fonts'

const builder = imageUrlBuilder(client)

export default async function SummerWSissel() {
  const postQuery = groq`
*[_type=='summerPost'] {
title, slug, image, description, date, _id 
} `
  const imgQuery = groq`*[_type == "sanity.imageAsset" && references("SmPITB92PCr5r7guzAyPD2")][0..4] {
  url,
  alt,
  _id
}`

  const summerPosts = await client.fetch(postQuery)
  const images = await client.fetch(imgQuery)

  // TODO fix responsive rendering of images
  return (
    <div className="mt-24 md:mt-48">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <span className="text-center">
              <h1 className={`md:text-5xl text-3xl font-bold ${poppins.className}`}>
                Sommer med Sissel
              </h1>
            </span>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Sissel har bodd i Stavanger i over 30 år, og har en stor lidenskap for å vise frem
              byen. Bli med på en spennende sommertur i Stavanger og omegn, og opplev byen fra en
              helt ny vinkel.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Visste du at Stavanger har 52 hverdagsturer spredd utover hver eneste bydel? Eller at
              Breiavatnet og Stokkavatnet ikke er de eneste stedene å mate ender? Les videre for å
              finne ut mer!
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="hidden lg:block w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={builder.image(images[3]).width(800).format('webp').url()}
                alt=""
                className="aspect-[9/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>

            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src={builder.image(images[2]).width(800).format('webp').url()}
                  alt=""
                  className="aspect-[7/5] w-[24rem] lg:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={builder.image(images[1]).width(800).format('webp').url()}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="order-first flex w-64 flex-none lg:justify-end justify-center self-end lg:self-center lg:w-auto">
                <img
                  src={builder.image(images[0]).width(800).format('webp').url()}
                  alt=""
                  className="aspect-[4/3] lg:w-[24rem] w-[16rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-16 lg:space-y-16">
              {summerPosts.map((post: summerPostCardProps) => (
                <div key={post._id}>{SummerPostCard(post)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

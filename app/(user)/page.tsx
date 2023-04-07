import imageUrlBuilder from '@sanity/image-url'
import { ImageGallery } from 'components/landingPage/ImageGallery'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { client } from 'sanity-conf/sanity.client'
import { navCard } from 'type'

const builder = imageUrlBuilder(client)

export default async function Home() {
  const imgQuery = groq`*[_type == "sanity.imageAsset" && references("YnlZeKMD8CzfnPkn94VV1v")] {
  url,
  alt,
  _id
}`

  const navCardsQuery = groq`
*[_type=='navigation'] {
...,
} `

  const navCards = await client.fetch(navCardsQuery)
  const images = await client.fetch(imgQuery)

  return (
    <main>
      <div className="flex flex-col gap-y-8">
        <div style={{ height: '500px' }} className="relative max-w-7xl">
          <Image
            priority
            className="absolute object-center object-cover top-0 h-auto w-auto opacity-100 mx-auto"
            src={images[0].url}
            alt={'Landing page image'}
            fill
          />
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 mx-8`}>
          {navCards.map((navCard: any) => (
            <Link key={navCard._id} href={`/${navCard.slug.current}`}>
              <div className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    src={builder.image(navCard.image).url()}
                    alt={navCard.title}
                    className="object-cover object-left lg:object-center"
                    fill
                  />
                  <div className="absolute bottom-0 w-full text-white">
                    <p className="text-xl m-2 font-bold">{navCard.dayNo}</p>
                  </div>
                </div>
                <div className="mt-5 flex-1">
                  <p className="underline text-xl 2xl:text-2xl font-bold">{navCard.title}</p>
                  <p className="line-clamp-2 text-gray-500 text-lg 2xl:text-xl">
                    {navCard.shortDesc}
                  </p>
                </div>
                {/* <p className="flex items-center mt-5 font-bold group-hover:underline text-lg 2xl:text-xl">
                  Les mer <ArrowUpRightIcon className="ml-2 h-4 w-4 " />
                </p> */}
              </div>
            </Link>
          ))}
        </div>
        {/* <ImageGallery images={images} /> */}
      </div>
    </main>
  )
}

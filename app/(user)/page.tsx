import imageUrlBuilder from '@sanity/image-url'
import Carousel from 'components/shared/Carousel'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import TasteOfStavangerCard from './TasteOfStavangerCard'

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

  const CarouselProps = images.map((image: any) => {
    return {
      content: {
        title: 'title',
        description: 'description',
        button: 'button',
        image: image.url,
      },
    }
  })

  const query = groq`
    *[_type == "blogPost"][0..4] {
      _id,
      title, 
      slug, 
      image, 
      description,
      date, 
      categories[]->{title}, 
      body
    } | order(_updatedAt desc)
    `
  const posts = await client.fetch(query)

  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-10 sm:mx-10">
          <Carousel content={CarouselProps} />
          <div className="flex flex-col justify-center object-center items-center max-w-4xl mx-auto px-4 sm:px-0">
            <TasteOfStavangerCard posts={posts} />
          </div>
        </div>
        {/* </div> */}
        <div className={`max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 mx-8`}>
          {/* {navCards.map((navCard: any) => (
            <Link key={navCard._id} href={`https://hoyre.no/stavanger/hard-olav-bastiansen/}`}>
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
                  <p className="line-clamp-2 text-light_gray text-lg 2xl:text-xl">
                    {navCard.shortDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))} */}
          {/* <ImageGallery images={images} /> */}
        </div>
      </div>
    </main>
  )
}

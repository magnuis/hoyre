import ImageGallery from 'components/shared/ImageCarousel'
import TimelineItem from 'components/shared/TimeLineItem'
import { groq } from 'next-sanity'
import Image from 'next/image'
import { client } from 'sanity-conf/sanity.client'
import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'
import { SisselTimeline } from 'type'
import FollowSisselNavCard from './FollowSisselNavCard'
import MainImageComponent from './MainImage'
import generateThumbnailUrl from 'components/appearance/Thumbnail'

export default async function AboutSissel() {
  const storyQuery = groq`
   *[_type == "sisselTimeline"] {
        title,
        content,
        date,
        "img": image.asset->url
    } | order(date asc)
    `

  const imageGalleryQuery = groq`
  *[_type == "sanity.imageAsset" && 
    references(*[_type == 'media.tag' && name.current == 'sissel']._id)
    ] {
    _id
  } 
  `
  const followSisselImgQuery = groq`
  *[_type=="sanity.imageAsset" && 
  references(*[_type == 'media.tag' && name.current == 'følg_sissel']._id)][0] {
    _id,
  }
  `
  const mainImageQuery = groq`
  *[_type=="sanity.imageAsset" && 
    references(*[_type == 'media.tag' && name.current == 'om_sissel_øverst']._id)][0] {
    _id,
  }
  `
  const secondaryImageQuery = groq`
  *[_type=="sanity.imageAsset" && 
    references(*[_type == 'media.tag' && name.current == 'om_sissel_nest_øverst']._id)][0] {
    _id,
  }
  `

  const storyContent: SisselTimeline[] = await client.fetch(storyQuery)
  const galleryImages = await client.fetch(imageGalleryQuery)
  const followsisselImg = await client.fetch(followSisselImgQuery)
  const mainImage: { _id: string } = await client.fetch(mainImageQuery)
  const secondaryImage = await client.fetch(secondaryImageQuery)

  return (
    <div>
      <MainImageComponent _id={mainImage?._id} />
      <div className="relative w-[100vw] mx-auto mt-[100vh] bg-white pt-28 sm:pt-60 -translate-y-16 sm:-translate-y-0">
        <div className="sm:mb-60 mb-28 mx-auto max-w-lg text-center">
          <p className={`text-lg font-semibold ${poppins.className}`}>
            Sissel er Høyres ordførerkandidat i Stavanger. Hun er mor til tre - Espen, Emilie og
            Fredrik.
          </p>
        </div>

        <Image
          src={
            secondaryImage
              ? urlFor(secondaryImage).format('webp').url()
              : 'https://cdn.sanity.io/images/1hwvyivq/production/cce44ce9dfa82be61ce17659b63bcad4568230ef-1900x1425.jpg'
          }
          alt=""
          className="w-[100vw] max-h-[100vh] object-cover object-center"
          sizes="100vw"
          height={1425}
          width={1900}
        />

        <div className="mx-auto flex max-w-xl flex-col p-4 gap-y-24 mt-24 md:mt-36 pb-48">
          <div className="relative mx-auto">
            {storyContent.map((story, index) => (
              <span key={index}>
                <TimelineItem
                  title={story.title}
                  img={story.img}
                  content={story.content}
                  last={index === storyContent.length - 1}
                />
              </span>
            ))}
          </div>
          <ImageGallery images={galleryImages} />
          <FollowSisselNavCard image={followsisselImg} />
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  openGraph: {
    title: 'Sammen for Stavanger | Sissel Knutsen Hegdal',
    description:
      'Sissel er Høyres ordførerkandidat i Stavanger. Hun er mor til tre - Espen, Emilie og Fredrik.',
    url: 'https://hoyre.vercel.app/om-sissel',
    images: [
      {
        url: generateThumbnailUrl(
          'https://cdn.sanity.io/images/p6r82l3b/production/4d896210557a6255f789164124788f26096cfc20-1024x660.jpg'
        ),
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
  },
}

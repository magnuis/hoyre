import ImageGallery from 'components/shared/ImageCarousel'
import TimelineItem from 'components/shared/TimeLineItem'
import { groq } from 'next-sanity'
import Image from 'next/image'
import { client } from 'sanity-conf/sanity.client'
import { urlFor } from 'sanity-conf/urlFor'
import { SisselTimeline } from 'type'
import FollowSisselNavCard from './FollowSisselNavCard'

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
  *[_type == "sanity.imageAsset" && references('f5T2DmY3fkMt6I6qKWVOvS')] {
    _id
  } 
  `
  const followSisselImgQuery = groq`
  *[_type=="sanity.imageAsset" && references('5445c04f-0df7-40bf-9d74-bae1dd5b4ff1')][0] {
    _id,
  }
  `
  const mainImageQuery = groq`
  *[_type=="sanity.imageAsset" && references('cATHX4G6FGXXOYvuY0iqI')][0] {
    _id,
  }
  `
  const secondaryImageQuery = groq`
  *[_type=="sanity.imageAsset" && references('cATHX4G6FGXXOYvuY0iqI')][0] {
    _id,
  }
  `

  const storyContent: SisselTimeline[] = await client.fetch(storyQuery)
  const galleryImages = await client.fetch(imageGalleryQuery)
  const followsisselImg = await client.fetch(followSisselImgQuery)
  const mainImage = await client.fetch(mainImageQuery)
  const secondaryImage = await client.fetch(secondaryImageQuery)

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-[100vw] h-screen text-center bg-cover bg-center`}
        style={{
          backgroundImage: `url(${
            mainImage
              ? urlFor(mainImage._id).format('webp').url()
              : 'https://hoyre.no/content/uploads/sites/212/2021/11/2W9A5316-kopi-1024x660.jpg'
          })`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-[80vh] text-center"
        style={{
          background: 'linear-gradient(to bottom, rgba(4, 20, 52, 0), rgba(4, 20, 52, 1))',
        }}
      >
        <p className="relative top-[60vh] text-white text-4xl ">Bli kjent med Sissel</p>
      </div>
      <div className="absolute w-[100vw] mx-auto mt-[100vh] bg-white translate-y-[-80px]">
        <div className="my-48 text-center">
          <p className="font-bold text-xl sm:text-xl">
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

        <div className="mx-auto flex max-w-xl flex-col p-4 gap-y-24 mt-24 md:mt-36 mb-48">
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

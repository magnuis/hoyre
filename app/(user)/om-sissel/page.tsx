import { PortableText } from '@portabletext/react'
import BackArrow from 'components/shared/BackArrow'
import { RichTextComponents } from 'components/shared/RichTextComponents'
import { groq } from 'next-sanity'
import Image from 'next/image'
import { client } from 'sanity-conf/sanity.client'
import { SisselTimeline } from 'type'
import StoryContent, { StoryContentProps } from './StoryContent'
import ImageGallery from 'react-image-gallery'
import Button from 'components/shared/Button'

export default async function AboutSissel() {
  const storyQuery = groq`
   *[_type == "sisselTimeline"] {
        title,
        content,
        date,
        "img": image.asset->url
    } | order(date asc)
    `

  const imgQuery = groq`
*[_type == "sanity.imageAsset" && references('f5T2DmY3fkMt6I6qKWVOvS')] {
url
} 
`
  interface a {
    original: string
    thumbnail: string
  }
  const storyContent: SisselTimeline[] = await client.fetch(storyQuery)
  const images = await client.fetch(imgQuery)
  const lastStory = storyContent.pop()
  const galleryImages: a[] = images.map((image: any) => {
    return {
      original: image.url,
      thumbnail: image.url,
    }
  })

  return (
    <div className="max-w-7xl mx-auto sm:mt-16">
      {/* <div className="sm:absolute relative ml-6 ">
        <BackArrow slug="/smaken-av-stavanger" />
      </div> */}
      <div
        className={`relative container top-0 left-0 w-full md:max-w-7xl h-[90vh] md:h-[60vh] text-center bg-cover bg-center pt-[50vh]`}
        style={{
          backgroundImage:
            'url(https://hoyre.no/content/uploads/sites/212/2021/11/2W9A5316-kopi-1024x660.jpg)',
        }}
      >
        <p className="text-white text-4xl ">Bli kjent med Sissel</p>
      </div>
      <div className="text-center max-w-lg mx-auto my-24">
        <p className="font-bold text-2xl">
          Sissel er Høyres ordførerkandidat i Stavanger. Hun er mor til tre - Espen, Emilie og
          Fredrik.
        </p>
      </div>
      <Image
        src="https://premium.vgc.no/v2/images/ea71d845-a98a-47af-a34f-7623b5e1b7b1?fit=crop&format=auto&h=1425&w=1900&s=e10bed9c5cbfa2e48d588258d2cf5f208e0442aa"
        alt=""
        width={900}
        height={900}
        className="container h-[50vh] object-cover object-center"
      />
      <div className="mx-auto flex flex-col gap-y-8 p-6">
        <div className="relative max-w-xl mx-auto">
          {storyContent.map((story, index) => (
            <div key={index}>
              <StoryContent title={story.title} img={story.img} content={story.content} />
            </div>
          ))}
          <div className="pb-8 relative">
            <div className="pl-8 flex flex-col gap-y-5">
              <p className="text-gray-500 text-xs">{lastStory?.title}</p>
              <PortableText value={lastStory?.content} components={RichTextComponents} />
            </div>
            <div className="absolute top-0 transform h-3 w-3 bg-white rounded-full border border-primary translate-x-[-6.5px]" />
            <div className="ml-8">
              {/* <img
                src={images[0].url}
                alt=""
                className="rounded-t-lg object-cover object-center h-[30vh] w-full"
              />
              <div className="flex flex-row justify-between mt-[3%]">
                <img src={images[1].url} alt={''} className="relative w-[31%]" />
                <img src={images[2].url} alt={''} className="relative w-[31%]" />
                <img src={images[3].url} alt={''} className="relative w-[31%]" />
              </div> */}
              {/* <ImageGallery items={galleryImages} /> */}
            </div>
          </div>
          <div className="rounded-xl bg-dark">
            <img
              src="https://hoyre.no/content/uploads/sites/212/2022/09/20220826_181949666_iOS-scaled.jpg"
              alt=""
              className="rounded-t-lg object-cover object-top h-[30vh] w-full"
            />
            <div className="relative flex flex-col gap-y-7 text-white p-5 text-center">
              <p className="text-2xl font-bold">Følg Sissel i hverdagen</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button text="FACEBOOK" href="https://www.facebook.com/sissel.k.hegdal" />
                <Button text="INSTAGRAM" href="https://www.instagram.com/sisselhegdal/" />
                <Button text="LINKEDIN" href="https://www.linkedin.com/in/sissel-knutsen-hegdal/" />
              </div>

              <Button
                text="SISSELS PERSONPROFIL (HØYRE.NO)"
                href="https://hoyre.no/stavanger/sissel-knutsen-hegdal-var-ordforerkandidat/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

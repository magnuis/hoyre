import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import { SisselTimeline } from 'type'
import FollowSisselNavCard from './FollowSisselNavCard'
import StoryContent from './StoryContent'

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
  // const lastStory = storyContent.pop()
  const galleryImages: a[] = images.map((image: any) => {
    return {
      original: image.url,
      thumbnail: image.url,
    }
  })

  return (
    <div className="max-w-7xl mx-auto sm:mt-16">
      <div
        className={`relative container top-0 left-0 w-full md:max-w-7xl h-[90vh] md:h-[60vh] text-center bg-cover bg-center pt-[50vh]`}
        style={{
          backgroundImage:
            'url(https://hoyre.no/content/uploads/sites/212/2021/11/2W9A5316-kopi-1024x660.jpg)',
        }}
      >
        <p className="text-white text-4xl ">Bli kjent med Sissel</p>
      </div>
      <div className="text-center max-w-lg mx-auto my-48 px-4">
        <p className="font-bold text-xl sm:text-xl">
          Sissel er Høyres ordførerkandidat i Stavanger. Hun er mor til tre - Espen, Emilie og
          Fredrik.
        </p>
      </div>

      <img
        src="https://premium.vgc.no/v2/images/ea71d845-a98a-47af-a34f-7623b5e1b7b1?fit=crop&format=auto&h=1425&w=1900&s=e10bed9c5cbfa2e48d588258d2cf5f208e0442aa"
        alt=""
        className="w-full h-[50vh] object-cover object-center"
      />

      <div className="mx-auto flex max-w-xl flex-col p-4 gap-y-36 mt-24 md:mt-36">
        <div className="relative mx-auto">
          {storyContent.map((story, index) => (
            <span key={index}>
              <StoryContent
                title={story.title}
                img={story.img}
                content={story.content}
                last={index === storyContent.length - 1}
              />
            </span>
          ))}
        </div>
        <FollowSisselNavCard />
      </div>
    </div>
  )
}

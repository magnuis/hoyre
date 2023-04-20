import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import ImageGallery from 'react-image-gallery'
import { TeamTimeline } from 'type'
import TimelineItem from 'components/shared/TimeLineItem'
import TeamNavCard from './TeamNavCard'

export default async function LagetPage() {
  const storyQuery = groq`
   *[_type == "teamTimeline"] {
        title,
        content,
        date,
        "img": image.asset._ref
    } | order(date asc) 
    `
  const imgQuery = groq`*[_type == "sanity.imageAsset" && references("1gKhFzwtTHqc5n8Z8DKZtk")] {
        url,
    }`

  const storyContent: TeamTimeline[] = await client.fetch(storyQuery)
  const imgUrls: { url: string }[] = await client.fetch(imgQuery)

  console.log(storyContent)

  return (
    <div className="max-w-7xl mx-auto sm:mt-16">
      <div className="flex flex-col max-w-lg mx-auto mt-32 mb-16 px-8 gap-y-6">
        <div className="text-center">
          <p className="font-bold text-3xl ">Veien til valget</p>
        </div>
        <p>
          Stavanger-laget har hendene fulle i opptakten til høstens kommunevalg. Her kan du følge
          oss på veien!
        </p>
      </div>
      <div className="flex flex-col gap-y-8 px-6 max-w-xl mx-auto">
        <hr className="mb-2" />
        <div>
          {storyContent.map((story, index) => (
            <span key={index}>
              <TimelineItem
                title={story.title}
                img={story.img}
                content={story.content}
                last={index == storyContent.length - 1}
              />
            </span>
          ))}
          <div className="pb-8 relative"></div>
        </div>
        <TeamNavCard imgUrls={imgUrls} />
      </div>
    </div>
  )
}

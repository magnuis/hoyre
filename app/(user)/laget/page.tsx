import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
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
        _id,
    }`

  const storyContent: TeamTimeline[] = await client.fetch(storyQuery)
  const imgUrls: { _id: string }[] = await client.fetch(imgQuery)

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
      {/* <div className="mx-auto flex max-w-xl flex-col p-4 gap-y-24 mt-24 md:mt-36 mb-48">
          <div className="relative mx-auto"> */}
      <hr className="mb-2 max-w-xl mx-auto" />
      <div className="mx-auto flex max-w-xl flex-col p-4 gap-y-24 mt-16 md:mt-36 mb-48">
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

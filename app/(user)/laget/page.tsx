import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import { TeamTimeline } from 'type'
import TimelineItem from 'components/shared/TimeLineItem'
import TeamNavCard from './TeamNavCard'
import { poppins } from 'styles/fonts'

export default async function LagetPage() {
  const storyQuery = groq`
   *[_type == "teamTimeline"] {
        title,
        content,
        date,
        "img": image.asset._ref
    } | order(date asc) 
    `
  const imgQuery = groq`
  *[_type == "sanity.imageAsset" && 
      references(*[_type == 'media.tag' && name.current == 'laget']._id)
    ] {
      _id,
    }`

  const storyContent: TeamTimeline[] = await client.fetch(storyQuery)
  const imgUrls: Array<{ _id: string }> = await client.fetch(imgQuery)

  return (
    <div className="max-w-7xl mx-auto mt-24 md:mt-48">
      <div className="flex flex-col max-w-lg mx-auto mb-12 px-8 sm:px-0 gap-y-6 md:gap-y-10 text-center">
        <h1 className={`font-medium tracking-wide text-2xl sm:text-5xl ${poppins.className}`}>
          Veien til valget
        </h1>
        <p className="text-lg text-gray">
          Stavanger-laget har hendene fulle i opptakten til høstens kommunevalg. Her kan du følge
          oss på veien!
        </p>
      </div>
      <hr className="mb-2 mx-3 sm:mx-o max-w-xl md:mx-auto border-light_gray" />
      <div className="mx-auto flex max-w-xl flex-col p-4 gap-y-24 mt-6 mb-48">
        <div>
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
          <div className="pb-8 relative"></div>
        </div>
        <TeamNavCard imgUrls={imgUrls} />
      </div>
    </div>
  )
}

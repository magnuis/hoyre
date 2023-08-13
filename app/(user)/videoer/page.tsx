import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import { poppins } from 'styles/fonts'
import { VideoCategory } from 'type'
import { YouTubeVideoGridComponent } from './YouTubeVideoGridComponent'

export default async function VideoesPage() {
  const videoQuery = groq`*[_type == "videoCategory"]
{
  _id,
  title, 
  description, 
  "referencedBy": *[_type == 'youtubeVideo' && references(^._id)] {  
    title,
    url
  }, 
}`

  const videoCategories: VideoCategory[] = await client.fetch(videoQuery)

  return (
    <div className="max-w-7xl mx-auto pt-24 sm:pt-36">
      <div className="flex flex-col max-w-4xl mx-auto md:mb-12 px-6 sm:px-0">
        <span className="max-w-xl mx-auto text-center">
          <p className={`${poppins.className} font-medium tracking-wide text-3xl sm:text-5xl mb-5`}>
            Videoer
          </p>
          <p className="text-lg leading-8 text-gray">
            Her har vi samlet et knippe videoer slik at du enkelt kan få svar på det du måtte lure
            på om vår politikk, våre verdier, og hvem vi er.
          </p>
        </span>

        <YouTubeVideoGridComponent videoCategories={videoCategories} />
      </div>
    </div>
  )
}

import { poppins } from 'styles/fonts'
import BlogPostsList from './blogPostCardList'
import generateThumbnailUrl from 'components/appearance/Thumbnail'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import { BlogPost, Subject } from 'type'

export default async function Blogg() {
  const subjectsQuery = groq`
    *[_type == "subject"] {
    title,
    }`

  const blogPostsQuery = groq`
    *[_type == "blogPost" ] {
      _id,
      title, 
      slug, 
      image, 
      description,
      date, 
      categories[]->{title}, 
      body
    } | order(date desc)
    `

  const blogPosts: BlogPost[] = await client.fetch(blogPostsQuery)
  const subjects: Subject[] = await client.fetch(subjectsQuery)

  return (
    <div className="max-w-7xl mx-auto pt-24 sm:pt-36 md:pt-48">
      <div className="flex flex-col max-w-xl mx-auto md:mb-12 px-6 sm:px-0 text-center">
        <div className="text-center">
          <h1
            className={`font-medium tracking-wide text-2xl sm:text-5xl ${poppins.className} mb-6 md:mb-10`}
          >
            Smaken av Stavanger
          </h1>
        </div>

        <p className="text-lg leading-8 text-gray">
          Har du lurt på hva Sissel tenker om Stavangerskolen? Eller hvordan hun tenker å takle
          eldrebølgen? Her kan du lese om det og mye mer.
        </p>
      </div>
      <div className="mx-auto flex flex-col p-4 mb-48">
        <BlogPostsList blogPosts={blogPosts} subjects={subjects} />
      </div>
    </div>
  )
}

export const metadata = {
  openGraph: {
    title: 'Sammen for Stavanger | Smaken av Stavanger',
    description:
      'Har du lurt på hva Sissel tenker om Stavangerskolen? Eller hvordan hun tenker å takle eldrebølgen? Her kan du lese om det og mye mer.',
    url: 'https://hoyre.vercel.app/smaken-av-stavanger',
    images: [
      {
        url: generateThumbnailUrl(
          'https://cdn.sanity.io/images/p6r82l3b/production/ff3491aa8c5da0ead21fe6b62b65d8f461cf64e0-2048x1536.jpg'
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

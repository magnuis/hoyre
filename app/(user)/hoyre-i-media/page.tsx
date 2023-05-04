import { poppins } from 'styles/fonts'
import ExternalArticlesList from './ExternalArticleList'
import generateThumbnailUrl from 'components/appearance/Thumbnail'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'

export default async function ExternalArticles() {
  const subjectsQuery = groq`
    *[_type == "subject"] {
    title
    }`

  const articlesQuery = groq`
*[_type == "externalArticle" ] {
    _id,
    title,
    categories[] -> {
        _id,
        title,
    },
    publisher,
    description,
    date,
    externalLink
    } | order(date desc)
    `
  const subjects = await client.fetch(subjectsQuery)
  const articles = await client.fetch(articlesQuery)
  return (
    <div className="max-w-7xl mx-auto pt-24 sm:pt-36 md:pt-48">
      <div className="flex flex-col max-w-xl mx-auto px-8 sm:px-0 text-center">
        <h1
          className={`mb-6 sm:mb-10 font-medium tracking-wide text-2xl sm:text-5xl ${poppins.className}`}
        >
          Høyre i media
        </h1>
        <p className="text-lg text-gray">
          Her har vi samlet et par artikler der Stavanger Høyre og Sissel er omtalt, slik at du kan
          få med deg hva som blir sagt.
        </p>
      </div>
      <div className="mx-auto flex flex-col p-4 mb-48">
        <ExternalArticlesList articles={articles} subjects={subjects} />
      </div>
    </div>
  )
}

export const metadata = {
  openGraph: {
    title: 'Sammen for Stavanger | Media',
    description:
      ' Her har vi samlet et par artikler der Stavanger Høyre og Sissel er omtalt, slik at du kan få med deg hva som blir sagt',
    url: 'https://hoyre.vercel.app/hoyre-i-media',
    images: [
      {
        url: generateThumbnailUrl(
          'https://cdn.sanity.io/images/p6r82l3b/production/369ace0cde69a4fb1cded3849d0a1d5c4b0c754c-2048x1536.jpg'
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

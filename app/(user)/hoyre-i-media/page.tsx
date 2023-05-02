import { poppins } from 'styles/fonts'
import ExternalArticlesList from './ExternalArticleList'
import generateThumbnailUrl from 'components/appearance/Thumbnail'

export default async function ExternalArticles() {
  return (
    <div className="max-w-7xl mx-auto pt-24 sm:pt-36 md:pt-48">
      <div className="flex flex-col max-w-xl mx-auto mb-10 px-8 sm:px-0 gap-y-6 md:gap-y-10 text-center">
        <h1 className={`font-medium tracking-wide text-2xl sm:text-5xl ${poppins.className}`}>
          Høyre i media
        </h1>
        <p className="text-lg text-gray">
          Her har vi samlet et par artikler der Stavanger Høyre og Sissel er omtalt, slik at du kan
          få med deg hva som blir sagt.
        </p>
      </div>
      <div className="mx-auto flex flex-col p-4 gap-y-24 mb-48">
        <ExternalArticlesList />
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

import imageUrlBuilder from '@sanity/image-url'
import ExternalArticlesList from 'components/externalArticlesPage/ExternalArticlesList'
import { client } from 'sanity-conf/sanity.client'

export default async function ExternalArticles() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Artikler om Stavanger Høyre
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Her har vi samlet et par artikler der Stavanger Høyre og Sissel er omtalt, slik at du
            kan få med deg hva som blir sagt.
          </p>
        </div>
        <ExternalArticlesList />
      </div>
    </div>
  )
}

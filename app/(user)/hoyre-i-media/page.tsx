import { poppins } from 'styles/fonts'
import ExternalArticlesList from './ExternalArticleList'

export default async function ExternalArticles() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col max-w-xl mx-auto mt-24 md:mt-48 mb-10 px-8 sm:px-0 gap-y-6 md:gap-y-10 text-center">
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

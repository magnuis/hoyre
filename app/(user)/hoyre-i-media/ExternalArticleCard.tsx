import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { client } from 'sanity-conf/sanity.client'
import { ExternalArticle } from 'type'

export interface blogPostCardProps {
  article: ExternalArticle
}

const builder = imageUrlBuilder(client)

export default function ExternalArticleCard({ article }: blogPostCardProps) {
  return (
    <>
      <hr />
      <article className="flex max-w-xl flex-col items-start justify-between sm:mb-16 mt-8">
        <div className="flex items-center gap-x-4 text-xs flex-wrap">
          <time dateTime={article.date} className="text-gray-500">
            {article.date}
          </time>
          <div className="h-4 w-0.5 bg-gray-300" />
          <p className=" text-gray-500">{article.publisher}</p>
          {article.categories.map(
            (category) =>
              category && (
                <div
                  key={category.title}
                  className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 "
                >
                  {category.title}
                </div>
              )
          )}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">{article.title}</h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="text-sm leading-6">
            <Link href={article.externalLink}>
              <button className="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Gå til artikkelen
              </button>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

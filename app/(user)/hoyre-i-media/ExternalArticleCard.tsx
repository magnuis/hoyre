import imageUrlBuilder from '@sanity/image-url'
import Button from 'components/shared/Button'
import capitalize from 'components/utils/capitalize'
import Link from 'next/link'
import { client } from 'sanity-conf/sanity.client'
import { poppins } from 'styles/fonts'
import { ExternalArticle } from 'type'

export interface blogPostCardProps {
  article: ExternalArticle
}

const builder = imageUrlBuilder(client)

export default function ExternalArticleCard({ article }: blogPostCardProps) {
  return (
    <>
      <hr className="border-t border-light_gray" />
      <article className="flex max-w-xl flex-col items-start justify-between sm:mb-16 mt-8">
        <div className="flex items-center gap-x-4 text-xs flex-wrap">
          <time dateTime={article.date} className="text-light_gray">
            {article.date}
          </time>
          <div className="h-4 w-0.5 bg-gray-300" />
          <p className=" text-light_gray">{article.publisher}</p>
          {article.categories.map(
            (category) =>
              category && (
                <div
                  key={category.title}
                  className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-primary"
                >
                  {capitalize(category.title)}
                </div>
              )
          )}
        </div>
        <div className="group relative">
          <h3
            className={`mt-3 text-lg font-semibold leading-6 text-dark_gray ${poppins.className}`}
          >
            {article.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray">{article.description}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Button text={'GÅ TIL ARTIKKELEN'} href={article.externalLink} />
        </div>
      </article>
    </>
  )
}

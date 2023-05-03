import { ExternalArticle } from 'type'
import { poppins } from 'styles/fonts'
import Button from 'components/shared/Button'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

interface featuredArticlesProps {
  articles: ExternalArticle[]
}
export default function FeaturedArticles({ articles }: featuredArticlesProps) {
  if (articles.length === 0) return <div></div>
  return (
    <div className="rounded-lg w-fit mb-16">
      <Link href={'/hoyre-i-media'} className="flex  items-center mb-6">
        <h1 className={`${poppins.className} text-2xl sm:text-3xl font-medium mx-2`}>
          Nyheter om Høyre
        </h1>
        <ArrowTopRightOnSquareIcon className="h-6" />
      </Link>
      <div className=" bg-lighter_gray flex flex-col px-4 pt-2 pb-4 rounded-lg">
        <span className="max-h-[40vh] overflow-y-scroll rounded mb-4">
          {/* map articles to div */}
          {articles.map(
            (article: ExternalArticle, index: number) =>
              article.externalLink && (
                <article
                  key={article._id}
                  className={`${
                    index === 0
                      ? 'mt-2 rounded-t-lg'
                      : index === articles.length - 1
                      ? 'rounded-b-lg'
                      : ''
                  } flex flex-col items-start justify-between mb-1 py-4 bg-white px-4`}
                >
                  <div className="flex items-center text-xs flex-wrap">
                    <time dateTime={article.date} className="text-light_gray mr-1 sm:mr-2 md:mr-4">
                      {article.date}
                    </time>
                    {/* <div className="h-4 w-0.5 bg-gray-300" /> */}
                    <p className=" text-light_gray mr-1 sm:mr-2 md:mr-4">{article.publisher}</p>
                    {article.categories.map(
                      (category) =>
                        category && (
                          <div
                            key={category.title}
                            className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-primary mr-1 sm:mr-2 md:mr-4"
                          >
                            {category.title}
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
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray">
                      {article.description}
                    </p>
                  </div>
                </article>
              )
          )}
        </span>
        <Button href={'/hoyre-i-media'} text={'FLERE ARTIKLER'}></Button>
      </div>
    </div>
  )
}

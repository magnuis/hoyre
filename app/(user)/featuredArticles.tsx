import { ExternalArticle } from 'type'
import { poppins } from 'styles/fonts'
import Button from 'components/shared/Button'

interface featuredArticlesProps {
  articles: ExternalArticle[]
}
export default function FeaturedArticles({ articles }: featuredArticlesProps) {
  return (
    <div className="rounded-lg w-fit ">
      <h1 className={`${poppins.className} text-3xl font-medium mb-6`}>Nyheter om Høyre</h1>
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
                  <div className="flex items-center gap-x-1 sm:gap-x-4 text-xs flex-wrap">
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

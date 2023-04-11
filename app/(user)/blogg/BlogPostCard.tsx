import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { Image, Slug } from 'sanity'
import { client } from 'sanity-conf/sanity.client'

export interface blogPostCardProps {
  title: string
  slug: Slug
  image: Image
  description: string
  date: string
  _id: string
  categories: string[]
}

const builder = imageUrlBuilder(client)

export default function BlogPostCard(post: blogPostCardProps) {
  return (
    <div key={post._id}>
      <>
        <hr />
        <article className="flex max-w-xl flex-col items-start justify-between sm:mb-16 mt-8">
          <div className="flex items-center gap-x-4 text-xs flex-wrap">
            <time dateTime={post.date} className="text-gray-500">
              {post.date}
            </time>
            <div className="h-4 w-0.5 bg-gray-300" />
            {/* <p className=" text-gray-500">{post.publisher}</p> */}
            {post.categories.map(
              (category) => (
                // category ? (
                <div
                  key={category}
                  className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 "
                >
                  {category}
                </div>
              )
              // ) : (
              //   <div key={ind} />
              // )
            )}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">{post.title}</h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            {/* <img src={'jkbln'} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
            <div className="text-sm leading-6">
              {/* <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p> */}
              {/* <Link href={post.externalLink}>
                    <button className="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Gå til artikkelen
                    </button>
                  </Link> */}
            </div>
          </div>
        </article>
      </>
    </div>
  )
}

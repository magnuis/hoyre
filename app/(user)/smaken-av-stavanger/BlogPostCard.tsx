import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { client } from 'sanity-conf/sanity.client'
import { BlogPost } from 'type'

export interface blogPostCardProps {
  post: BlogPost
  // categories: string[]
}

const builder = imageUrlBuilder(client)

export default function BlogPostCard({ post }: blogPostCardProps) {
  return (
    <Link href={`smaken-av-stavanger/${post.slug.current}`} className="flex items-center">
      <article className="relative isolate flex flex-col gap-6 lg:gap-8 lg:flex-row">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/4] lg:w-64 lg:shrink-0">
          <img
            src={builder.image(post.image).url()}
            alt=""
            className="absolute inset-0 h-full w-full rounded-t-2xl lg:rounded-2xl bg-gray-50 object-cover sm:opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 rounded-t-2xl lg:rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div>
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500">
              {post.date}
            </time>
            {post.categories.map(
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
          <div className="relative max-w-xl ">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {post.title}
            </h3>

            <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">{post.description}</p>
            <p className="flex items-center mt-5 font-bold group-hover:underline text-gray-900 group-hover:text-gray-600">
              Les mer
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

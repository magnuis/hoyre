import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { client } from 'sanity-conf/sanity.client'
import { BlogPost } from 'type'

export interface blogPostCardProps {
  post: BlogPost
}

const builder = imageUrlBuilder(client)

export default function BlogPostCard({ post }: blogPostCardProps) {
  return (
    <Link
      href={`smaken-av-stavanger/${post.slug.current}`}
      className="hover:cursor-pointer flex items-center font-bold"
    >
      <article className="relative isolate flex flex-col lg:flex-row w-full">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/4] lg:w-64 lg:shrink-0 lg:mr-8 mb-6 lg:mb-0">
          <img
            src={builder.image(post.image).width(600).url()}
            alt=""
            className="absolute inset-0 h-full w-full rounded-t-2xl lg:rounded-2xl bg-gray-50 object-cover sm:opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 rounded-t-2xl lg:rounded-2xl ring-1 ring-inset ring-dark_gray/10" />
        </div>
        <div>
          <div className="flex items-center text-xs">
            <time dateTime={post.date} className="text-light_gray mr-2">
              {post.date}
            </time>
            {post.categories.map(
              (category) =>
                category && (
                  <div
                    key={category.title}
                    className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-primary mr-2"
                  >
                    {category.title}
                  </div>
                )
            )}
          </div>
          <div className="relative max-w-xl ">
            <h3 className="mt-3 text-lg font-semibold leading-6 ">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray">{post.description}</p>
            <p className="group-hover:underline text-dark_gray group-hover:text-gray mt-5">
              Les mer
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

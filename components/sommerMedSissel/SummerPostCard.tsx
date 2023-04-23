import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { Image, Slug } from 'sanity'
import { client } from 'sanity-conf/sanity.client'
import { poppins } from 'styles/fonts'

export interface summerPostCardProps {
  title: string
  slug: Slug
  image: Image
  description: string
  date: string
  _id: string
}

const builder = imageUrlBuilder(client)

export default function SummerPostCard(post: summerPostCardProps) {
  return (
    <div className="group">
      <hr className="sm:block hidden mb-16" />
      <Link href={`sommer-med-sissel/${post.slug.current}`} className="flex items-center">
        <article className="relative isolate flex flex-col gap-6 lg:gap-8 lg:flex-row w-full">
          <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/4] lg:w-64 lg:shrink-0">
            <img
              src={builder.image(post.image).width(700).format('webp').url()}
              alt=""
              className="absolute inset-0 h-full w-full rounded-t-2xl lg:rounded-2xl bg-gray-50 object-cover sm:opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 rounded-t-2xl lg:rounded-2xl ring-1 ring-inset ring-dark_gray/10" />
          </div>
          <div>
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-light_gray">
                {post.date}
              </time>
            </div>
            <div className="relative max-w-xl group-hover:text-gray">
              <h3 className={`mt-3 text-lg font-semibold leading-6 ${poppins.className}`}>
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray">{post.description}</p>
              <p className="flex items-center mt-5 font-bold group-hover:underline">Les mer</p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}

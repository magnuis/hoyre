import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { client } from 'sanity-conf/sanity.client'
import { poppins } from 'styles/fonts'
import { BlogPost } from 'type'

const builder = imageUrlBuilder(client)
interface tasteOfStavangerCardProps {
  posts: BlogPost[]
}
export default function TasteOfStavangerCard({ posts }: tasteOfStavangerCardProps) {
  return (
    <div>
      <span className="flex items-end gap-x-4">
        <Link href={'/smaken-av-stavanger'} className="flex items-center gap-x-2">
          <h2 className={`${poppins.className} font-medium tracking-wide text-2xl sm:text-3xl`}>
            Smaken av Stavanger
          </h2>
          <ArrowTopRightOnSquareIcon className="h-6" />
        </Link>
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 lg:gap-6 mt-6">
        {posts.map((post) => (
          <Link href={`/smaken-av-stavanger/${post.slug.current}`} className="group" key={post._id}>
            <img
              className="w-full aspect-square object-cover object-center rounded-lg opacity-90 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-300 ease-in-out"
              src={builder.image(post.image).width(600).height(400).format('webp').url()}
              alt=""
            />
            <p
              className={`${poppins.className} mt-1 sm:mt-3 font-medium group-hover:text-primary sm:text-lg line-clamp-2`}
            >
              {post.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

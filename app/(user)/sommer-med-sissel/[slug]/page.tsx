import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { SummerPost } from 'type'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from 'components/shared/RichTextComponents'
import BackArrow from 'components/shared/BackArrow'
import { poppins } from 'styles/fonts'

const builder = imageUrlBuilder(client)

interface SummerWSisselProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const query = groq`
*[_type=='summerPost']{
  slug
}`

  const slugs: SummerPost[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

export default async function SummerWSisselPost({ params: { slug } }: SummerWSisselProps) {
  const query = groq`
    *[_type=='summerPost' && slug.current == $slug][0] {
        ...,
    }`

  const summerPost: SummerPost = await client.fetch(query, { slug })
  if (!summerPost) {
    return (
      <div className="relative max-w-7xl mx-auto ">
        <p>Fant ikke siden</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto sm:mt-16">
      <div className="sm:absolute relative ml-6 ">
        <BackArrow slug="/sommer-med-sissel" />
      </div>
      <div className=" max-w-3xl mx-auto flex flex-col gap-y-8 p-6">
        <p className={`mx-auto text-3xl md:text-5xl font-bold ${poppins.className}`}>
          {summerPost.title}
        </p>
        <time className="flex items-center text-base text-zinc-400 ">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 " />
          <span className="ml-3">{summerPost.date}</span>
        </time>
        <div className="flex flex-col gap-y-6">
          <PortableText value={summerPost.body} components={RichTextComponents} />
        </div>
      </div>
    </div>
  )
}

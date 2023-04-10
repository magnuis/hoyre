import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { SummerPost } from 'type'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from 'components/shared/RichTextComponents'

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
    <div className="max-w-3xl mx-auto mt-16">
      <div className="flex flex-col mx-6 gap-y-16">
        <p className="mx-auto text-4xl sm:text-5xl font-bold ">{summerPost.title}</p>
        <div className="flex flex-col gap-y-6">
          <PortableText value={summerPost.body} components={RichTextComponents} />
        </div>
      </div>
    </div>
  )
}

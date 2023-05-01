import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { SummerPost } from 'type'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from 'components/shared/richtext/RichTextComponents'
import { poppins } from 'styles/fonts'
import generateThumbnailUrl from 'components/appearance/Thumbnail'

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
    <div className="max-w-7xl mx-auto mt-24 md:mt-48">
      <div className="max-w-3xl mx-auto flex flex-col gap-y-8 p-6">
        <h1
          className={`mx-auto font-medium tracking-wide text-3xl sm:text-5xl ${poppins.className}`}
        >
          {summerPost.title}
        </h1>
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

export async function generateMetadata({ params: { slug } }: SummerWSisselProps) {
  const query = groq`
    *[_type=='summerPost' && slug.current == $slug][0] {
        ...,
    }`
  const summerPost: SummerPost = await client.fetch(query, { slug })
  if (!summerPost) {
    return {
      openGraph: {
        title: ` Sammen for Stavanger | Sommer med Sissel`,
        description: '',
        url: `https://hoyre.vercel.app/sommer-med-sissel/${slug}}`,
        images: [
          {
            url: generateThumbnailUrl(
              'https://cdn.sanity.io/images/p6r82l3b/production/dfd8859b7abf5b3d3e18f01727f8f5dcc1cc6018-2048x1536.jpg'
            ),
            width: 800,
            height: 600,
          },
        ],
      },
      robots: {
        index: true,
      },
    }
  }
  return {
    openGraph: {
      title: `Sammen for Stavanger | ${summerPost.title}`,
      description: summerPost.description,
      url: `https://hoyre.vercel.app/sommer-med-sissel/${summerPost.slug.current}}`,
      images: [
        {
          url: generateThumbnailUrl(builder.image(summerPost.image).url()),
          width: 800,
          height: 600,
        },
      ],
    },
    robots: {
      index: true,
    },
  }
}

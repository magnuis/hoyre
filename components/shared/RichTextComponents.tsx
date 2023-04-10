import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from 'sanity-conf/urlFor'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image className="object-contain" src={urlFor(value).url()} alt="Blog Post Image" fill />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="ml-10 py-5 list-disc space-y-5"> {children}</ul>
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg lsit-decimal"> {children}</ol>
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-5xl py-10 font-bold">{children}</h1>
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl py-10 font-bold">{children}</h2>
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-10 font-bold">{children}</h3>
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-10 font-bold">{children}</h4>
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my5-">{children}</blockquote>
      )
    },
    normal: ({ children }: any) => {
      return <p className="mb-5">{children}</p>
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'norefferer noopener' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      )
    },
  },
}

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full mb-8">
          <Image
            className="mx-auto aspect-[8/5]  md:w-full flex-none rounded-lg md:rounded-2xl bg-gray-50 object-cover"
            width={720}
            height={720}
            src={urlFor(value).format('webp').url()}
            alt="Summer with Sissel Post Image"
          />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="ml-10 list-disc space-y-3"> {children}</ul>
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal"> {children}</ol>
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className={`${poppins.className} text-5xl py-5 font-bold`}>{children}</h1>
    },
    h2: ({ children }: any) => {
      return (
        <h2 className={`${poppins.className} md:text-4xl text-3xl py-6 font-bold`}>{children}</h2>
      )
    },
    h3: ({ children }: any) => {
      return <h3 className={`${poppins.className} text-3xl py-5 font-bold`}>{children}</h3>
    },
    h4: ({ children }: any) => {
      return <h4 className={`${poppins.className} text-2xl py-5 font-bold`}>{children}</h4>
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-primary border-l-4 pl-5 py-5 my-5 italic ">
          {children}
        </blockquote>
      )
    },
    normal: ({ children }: any) => {
      return <p className="mb-5">{children}</p>
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = 'norefferer noopener'
      // const rel = !value.href.startsWith('/') ? 'norefferer noopener' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline text-primary hover:text-blue-900 decoration-primary hover:decoration-blue-900"
        >
          {children}
        </Link>
      )
    },
  },
}

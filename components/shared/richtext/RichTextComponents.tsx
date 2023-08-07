import getYouTubeID from 'get-youtube-id'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'
import { YouTubeComponent } from './YouTubeComponent'

export const RichTextComponents = {
  types: {
    youtube: ({ value }: any) => {
      try {
        const { url } = value
        const id = getYouTubeID(url) ?? ''

        return <YouTubeComponent id={id} />
      } catch (error) {}
      return <></>
    },
    image: ({ value }: any) => {
      return (
        <div className="relative w-full mb-8">
          <Image
            className="mx-auto  md:w-full flex-none rounded-lg md:rounded-2xl bg-gray-50 object-cover"
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
      return (
        <h1 className={`${poppins.className} text-3xl md:text-5xl mt-5 font-semibold`}>
          {children}
        </h1>
      )
    },
    h2: ({ children }: any) => {
      return (
        <h2 className={`${poppins.className} text-2xl md:text-4xl mt-5 font-semibold`}>
          {children}
        </h2>
      )
    },
    h3: ({ children }: any) => {
      return (
        <h3 className={`${poppins.className} text-xl md:text-3xl mt-5 font-semibold`}>
          {children}
        </h3>
      )
    },
    h4: ({ children }: any) => {
      return <h4 className={`${poppins.className} md:text-2xl mt-3 font-semibold`}>{children}</h4>
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-primary border-l-4 pl-5 italic ">{children}</blockquote>
      )
    },
    normal: ({ children }: any) => {
      return <p className="">{children}</p>
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
          className="underline text-primary hover:text-secondary_dark decoration-primary hover:decoration-secondary_dark"
        >
          {children}
        </Link>
      )
    },
  },
}

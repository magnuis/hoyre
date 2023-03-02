import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { client } from '../../sanity-conf/sanity.client'

function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}

export default function SanityExample() {
  return (
    <main>
      <div>
        <p>Main</p>
      </div>
    </main>
  )
}

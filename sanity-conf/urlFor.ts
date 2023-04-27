import imageUrlBuilder from '@sanity/image-url'
// import { ImageUrlBuilder } from 'sanity'
import { client } from './sanity.client'

export function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}

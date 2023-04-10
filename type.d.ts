import { Image, Slug } from 'sanity'

type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface CustomImage extends Base {
  url: string
  alt: string
}

interface navCard extends Base {
  title: string
  slug: string
  image: CustomImage
  description: string
}

interface SummerPost extends Base {
  title: string
  slug: string
  image: CustomImage
  description: string
  date: string
  datetime: string
  category: {
    title: string
    href: string
  }
}

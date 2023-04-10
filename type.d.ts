import { Image, Slug } from 'sanity'

type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Category extends base {
  title: string
  description: string
}

interface ExternalArticle extends base {
  title: string
  categories: Category[]
  publisher: string
  description: string
  externalLink: string
  date: string
}

interface Category extends base {
  title: string
  description: string
}

interface ExternalArticle extends base {
  title: string
  categories: Category[]
  publisher: string
  description: string
  externalLink: string
  date: string
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

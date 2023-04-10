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

type CustomImage = {
  url: string
  alt: string
  _id: string
}

type navCard = {
  title: string
  slug: string
  image: CustomImage
  description: string
}

import { Image, Slug } from 'sanity'

type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
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

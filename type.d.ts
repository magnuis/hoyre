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
  _id: string
  title: string
  categories: Category[]
  publisher: string
  description: string
  externalLink: string
  date: string
  categories: [
    {
      title: string
    }
  ]
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
  slug: Slug
  image: CustomImage
  description: string
  date: string
  category: {
    title: string
    href: string
  }
  body: Block[]
}
interface BlogPost extends Base {
  title: string
  slug: Slug
  image: Image
  description: string
  date: string
  categories: [
    {
      title: string
    }
  ]
  body: Block[]
}

interface SisselTimeline extends Base {
  title: string
  img: string
  content: Block[]
  date: number
}

interface TeamTimeline extends Base {
  title: string
  img: CustomImage
  content: Block[]
  date: string
}

interface Subject {
  title: string
}

interface VideoCategory extends Base {
  title: string
  description: string
  referencedBy: {
    title: string
    url: string
  }[]
}

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  title: 'YouTube-video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      title: 'Link',
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    defineField({
      name: 'videoCategory',
      title: 'Kategori',
      type: 'reference',
      to: { type: 'videoCategory' },
      validation: (Rule) => Rule.required(),
    }),
  ],
})

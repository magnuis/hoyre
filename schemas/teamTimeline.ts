import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamTimeline',
  title: 'Tidslinje Laget',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Bilde (valgfritt)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Tekst',
      type: 'blockContent',
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'date',
    }),
  ],
})

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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

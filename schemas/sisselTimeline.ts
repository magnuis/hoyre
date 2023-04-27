import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sisselTimeline',
  title: 'Tidslinje Sissel',
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
      title: 'Årstall',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

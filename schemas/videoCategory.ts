import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoCategory',
  title: 'Video-kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'string',
    }),
  ],
})

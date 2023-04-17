import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Smaken av Stavanger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Emneknagger',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subject' } }],
    }),
    defineField({
      name: 'image',
      title: 'Forsidebilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'date',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})

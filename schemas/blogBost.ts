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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Emneknagger',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subject' } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Forsidebilde',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

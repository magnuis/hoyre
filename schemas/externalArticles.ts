import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'externalArticles',
  title: 'Eksterne artikler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subject' } }],
    }),
    defineField({
      name: 'publisher',
      title: 'Utgiver',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    }),
    defineField({
      name: 'externalLink',
      title: 'Ekstern lenke',
      type: 'url',
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigasjon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Ikke endre denne',
      type: 'slug',
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    }),
  ],
})

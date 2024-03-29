import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subject',
  title: 'Emne',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

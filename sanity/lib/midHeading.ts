import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'midHeading',
  title: 'Mid Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'text',
      title: 'Content',
      description: 'Editable heading or text block you can update anytime',
    }),
  ],
  preview: {
    select: { title: 'content' },
  },
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'protocolShowcase',
  title: 'Protocol Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Protocol Logo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Protocol Name',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
})

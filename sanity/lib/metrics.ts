import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'metrics',
  title: 'Portfolio Metrics',
  type: 'document',
  fields: [
    defineField({
      name: 'contestsValue',
      title: 'Contests Value',
      type: 'string',
      description: 'Example: "3+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tvlValue',
      title: 'TVL Value',
      type: 'string',
      description: 'Example: "$10M+"',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

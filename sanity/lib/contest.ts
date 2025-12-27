import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contest',
  title: 'Contest',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Contest Name',
    }),
    defineField({
      name: 'platform',
      type: 'string',
      title: 'Platform',
    }),
    defineField({
      name: 'contestLink',
      type: 'url',
      title: 'Contest Link',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Contest Date',
    }),
    // Protocols array
    defineField({
      name: 'protocols',
      title: 'Protocols',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'protocol',
          title: 'Protocol',
          fields: [
            defineField({
              name: 'protocolName',
              type: 'string',
              title: 'Protocol Name',
            }),
            // Findings inside each protocol
            defineField({
              name: 'findings',
              title: 'Findings',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'finding',
                  title: 'Finding',
                  fields: [
                    defineField({ name: 'severity', type: 'string', title: 'Severity' }),
                    defineField({ name: 'title', type: 'string', title: 'Title' }),
                    defineField({ name: 'platform', type: 'string', title: 'Platform' }),
                    defineField({ name: 'protocol', type: 'string', title: 'Protocol' }),
                    defineField({ name: 'contest', type: 'string', title: 'Contest' }),
                    defineField({ name: 'pocLink', type: 'url', title: 'PoC Link' }),
                    defineField({ name: 'date', type: 'date', title: 'Date' }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'platform',
    },
  },
})


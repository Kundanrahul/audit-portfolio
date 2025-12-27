import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'finding',
  title: 'Audit Finding',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({
      name: 'severity',
      type: 'string',
      title: 'Severity',
      options: {list: ['High', 'Medium', 'Low']},
    }),
    defineField({name: 'platform', type: 'string', title: 'Platform'}),
    defineField({name: 'protocol', type: 'string', title: 'Protocol'}),
    defineField({name: 'contestLink', type: 'url', title: 'Contest / Source Link'}),
    defineField({name: 'pocLink', type: 'url', title: 'PoC Link'}),
    defineField({name: 'date', type: 'datetime', title: 'Date'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'severity'},
  },
})

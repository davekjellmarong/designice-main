import { ImNewspaper } from 'react-icons/im'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectsListing',
  title: 'Reference Projects Listing',
  icon: ImNewspaper,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectsCount',
      title: 'Number of projects listed by default',
      type: 'number',
      description: 'Must be between 1 and 9',
      initialValue: 3,
      validation: (rule) => rule.required().max(9).min(1),
    }),
  ],
})

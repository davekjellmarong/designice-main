import { ImList } from 'react-icons/im'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesListing',
  title: 'Services Listing',
  icon: ImList,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'string',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
  ],
})

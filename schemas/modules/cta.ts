import { ImLink } from 'react-icons/im'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA',
  icon: ImLink,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
    }),
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      weak: true,
      of: [
        { type: 'linkInternal' },
      ]
    },
  ],
})

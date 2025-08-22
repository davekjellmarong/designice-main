import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  icon: UserIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'isHidden',
      title: 'Skjul modulen',
      type: 'boolean',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

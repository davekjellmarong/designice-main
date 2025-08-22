import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'mainmenu',
      title: 'Menu (English)',
      type: 'array',
      of: [
        { type: 'linkGroup' },
        { type: 'linkInternal' },
        { type: 'linkExternal' },
      ],
    }),
    defineField({
      name: 'mainmenu_no',
      title: 'Meny (Norsk)',
      type: 'array',
      of: [
        { type: 'linkGroup' },
        { type: 'linkInternal' },
        { type: 'linkExternal' },
      ],
    }),
  ],
  preview: {
    prepare({ title = 'Navigation' }) {
      return { title }
    },
  },
})

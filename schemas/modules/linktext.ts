import { MdOutlineTextFields } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linktext',
  title: 'Link text',
  icon: MdOutlineTextFields,
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
      type: 'string',
    }),
    defineField({
      name: 'centerText',
      title: 'Sentrer tekst',
      type: 'boolean',
    }),
    defineField({
      name: 'link',
      title: 'Lenke',
      type: 'linkInternal',
    }),
  ],
})

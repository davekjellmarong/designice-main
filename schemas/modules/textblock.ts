import { MdOutlineTextFields } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'textblock',
  title: 'Text block',
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
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
  ],
})

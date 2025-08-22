import { ErrorOutlineIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { STANDARD_MODULES } from '../../constants'

export default defineType({
  name: 'errorPage',
  type: 'document',
  title: 'Error Page',
  icon: ErrorOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: STANDARD_MODULES,
    }),
  ],
})

import { STANDARD_MODULES } from '../../constants'
import { format, parseISO } from 'date-fns'
import { MdOutlineHome } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { i18nConfig, languagesEnabled } from 'language.config'

export default defineType({
  name: 'news',
  title: 'News i18n',
  icon: MdOutlineHome,
  type: 'document',
  // @ts-ignore
  i18n: languagesEnabled,
  initialValue: {
    __i18n_lang: i18nConfig.base || 'en',
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 150,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: STANDARD_MODULES,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return { title }
    },
  },
})

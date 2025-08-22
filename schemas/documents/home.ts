import { STANDARD_MODULES } from '../../constants'
import { format, parseISO } from 'date-fns'
import { MdOutlineHome } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { i18nConfig, languagesEnabled } from 'language.config'

export default defineType({
  name: 'home',
  title: 'Home',
  icon: MdOutlineHome,
  type: 'document',
  // @ts-ignore
  i18n: languagesEnabled,
  initialValue: {
    __i18n_lang: i18nConfig.base || 'en',
  },
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      group: 'content',
      of: STANDARD_MODULES,
    }),
    defineField({
      title: 'SEO / Metadata',
      name: 'seo',
      type: 'seo',
      group: 'seo',
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

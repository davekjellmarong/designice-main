import { STANDARD_MODULES } from '../../constants'
import { format, parseISO } from 'date-fns'
import { MdOutlineArticle } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { i18nConfig, languagesEnabled } from 'language.config'

export default defineType({
  name: 'service',
  title: 'Service',
  icon: MdOutlineArticle,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 69,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{
        type: 'reference',
        to: [{ type: 'category' }]
      }]
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'text',
      group: 'content',
    }),
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',
      description: 'Image used in list view',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
        {
          title: 'Credit',
          name: 'credit',
          type: 'string',
          description: 'Photo credit',
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
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

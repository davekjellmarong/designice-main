import { STANDARD_MODULES } from '../../constants'
import { format, parseISO } from 'date-fns'
import { MdOutlineArticle } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { i18nConfig, languagesEnabled } from 'language.config'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'category',
  title: 'Category',
  icon: MdOutlineArticle,
  type: 'document',
  // @ts-ignore
  // i18n: languagesEnabled,
  // initialValue: {
  //   __i18n_lang: i18nConfig.base || 'en',
  // },
  fields: [
    defineField({
      name: 'categoryname',
      title: 'Category name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoryname_no',
      title: 'Category name (Norsk)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'categoryname',
    },
    prepare({ title }) {
      return { title }
    },
  },
})

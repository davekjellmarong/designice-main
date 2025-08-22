import { STANDARD_MODULES } from '../../constants'
import { format, parseISO } from 'date-fns'
import { MdOutlineArticle } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { i18nConfig, languagesEnabled } from 'language.config'

export default defineType({
  name: 'page',
  title: 'Page',
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
        isUnique: (value, context) => pageSlugValidator(value, context),
        //isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
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

function pageSlugValidator(value, context) {
  /**
   * Todo: Valider sluggen skikkelig:
   * Lag en query som skjekker om en page med samme slug finnes, og den pagen ikke har samme språk
   */

  return true
}

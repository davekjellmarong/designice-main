import { LinkIcon } from '@sanity/icons'
import { PAGE_REFERENCES } from '../../constants'

export default {
  title: 'Internal link',
  name: 'linkInternal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    // Title
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Reference
    {
      title: 'Page',
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: PAGE_REFERENCES,
      // options: {
      //   filter: ({ document }) => {
      //     return {
      //       filter: '__i18n_lang == $documentLang',
      //       params: { documentLang: document.__i18n_lang },
      //     }
      //   },
      // },
    },
  ],
  preview: {
    select: {
      reference: 'reference',
      referenceTitle: 'reference.title',
      referenceType: 'reference._type',
      title: 'title',
    },
    prepare(selection) {
      const { reference, referenceTitle, referenceType, title } = selection

      let subtitle = []
      if (reference) {
        subtitle.push([`→ ${referenceTitle}`])
      } else {
        subtitle.push('(Missing reference)')
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      }
    },
  },
}

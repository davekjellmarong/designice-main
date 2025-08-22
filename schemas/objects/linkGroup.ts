import { MdKeyboardArrowDown } from 'react-icons/md'
import { PAGE_REFERENCES } from '../../constants'

export default {
  title: 'Submenu',
  name: 'linkGroup',
  type: 'object',
  icon: MdKeyboardArrowDown,
  fields: [
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
      to: PAGE_REFERENCES,
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        { type: 'linkInternal' },
        { type: 'linkExternal' },
        // ,{ type: 'linkGroup' }
      ],
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
        subtitle.push('Missing reference)')
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      }
    },
  },
}

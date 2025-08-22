import { EarthGlobeIcon } from '@sanity/icons'

export default {
  title: 'External link',
  name: 'linkExternal',
  type: 'object',
  icon: EarthGlobeIcon,
  initialValue: {
    newWindow: true,
  },
  fields: [
    // Title
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // URL
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection) {
      const { title, url } = selection

      let subtitle = []
      if (url) {
        subtitle.push(`→ ${url}`)
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      }
    },
  },
}

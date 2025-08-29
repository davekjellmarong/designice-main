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
    // Open in new window
    {
      title: 'Open in new window',
      name: 'newWindow',
      type: 'boolean',
      description: 'Recommended for external links',
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

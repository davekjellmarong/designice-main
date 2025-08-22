import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      default: true,
    },
  ],
  fields: [
    defineField({
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers.',
      group: 'seo',
      validation: (Rule) =>
        Rule.max(50).warning(
          'Longer titles may be truncated by search engines'
        ),
    }),
    defineField({
      title: 'Meta Description',
      name: 'metaDesc',
      type: 'text',
      rows: 3,
      description: 'Description for search engines.',
      group: 'seo',
      validation: (Rule) =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        ),
    }),
    defineField({
      title: 'Share Graphic',
      name: 'shareGraphic',
      type: 'image',
      group: 'seo',
      description: 'Share graphics will be cropped to 1200x630',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
      }
    },
  },
})

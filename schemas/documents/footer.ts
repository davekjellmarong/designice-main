import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      weak: true,
      of: [
        { type: 'linkInternal' },
        { type: 'linkExternal' },
      ]
    },
    {
      title: 'Links (Norsk)',
      name: 'links_no',
      type: 'array',
      weak: true,
      of: [
        { type: 'linkInternal' },
        { type: 'linkExternal' },
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})

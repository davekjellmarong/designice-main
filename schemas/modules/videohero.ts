import { MdOutlineImage } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videohero',
  title: 'Video Hero',
  icon: MdOutlineImage,
  type: 'object',
  fields: [
    defineField({
      name: 'herotext',
      title: 'Hero text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'video_url',
      title: 'Video url',
      type: 'string'
    }),
  ],
})

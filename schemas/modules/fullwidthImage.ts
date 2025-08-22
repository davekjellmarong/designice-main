import { MdImage } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fullwidthImage',
  title: 'Fullwidth Image',
  icon: MdImage,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
    }),
  ],
})

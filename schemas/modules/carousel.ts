import { ImImages } from 'react-icons/im'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Karusell',
  icon: ImImages,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      title: 'Bilder',
      name: 'images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
})

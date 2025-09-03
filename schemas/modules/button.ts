import { ImLink } from 'react-icons/im'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  icon: ImLink,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' },
        ],
      },
      initialValue: 'black',
    }),
    {
      title: 'Link',
      name: 'link',
      type: 'array',
      of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
      validation: (rule) => rule.max(1),
    },
  ],
})

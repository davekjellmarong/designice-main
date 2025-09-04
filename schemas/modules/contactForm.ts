import { ImMail } from 'react-icons/im'
import { defineType } from 'sanity'

export default defineType({
  name: 'contactForm',
  title: 'Contact Form',
  icon: ImMail,
  type: 'object',
  fields: [
    {
      name: 'placeholder',
      type: 'string',
      title: 'Placeholder',
      hidden: true,
      initialValue: 'contactForm',
    },
  ],
})

import { groq } from 'next-sanity'

export const contactForm = groq`
  _type == "contactForm" => {
    _type,
    _key
  }
`

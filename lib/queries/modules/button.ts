import { groq } from 'next-sanity'

export const button = groq`
  _type == "button" => {
    _type,
    _key,
    label,
    color,
    link {
      title,
      url
    }
  }
`

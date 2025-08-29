// lib/queries/shared/navLinksQuery.ts
import { groq } from 'next-sanity'

export const navLinksQuery = groq`
  _key,
  title,
  _type,
  isButton,
  (_type == 'linkGroup') => {
    ...reference-> { "slug": slug.current },
    links[] {
      (_type == 'linkInternal') => {
        title,
        ...reference-> { "slug": slug.current },
        styles,
        _type,
        _key
      },
      (_type == 'linkExternal') => {
        newWindow,
        title,
        url,
        styles,
        _type,
        _key
      },
    }
  },
  (_type == 'linkInternal') => {
    ...reference-> { "slug": slug.current },
    styles
  },
  (_type == 'linkExternal') => {
    newWindow,
    title,   
    url,
    styles
  },
`
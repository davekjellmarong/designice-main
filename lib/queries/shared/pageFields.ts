import { groq } from 'next-sanity'
import { modulesQuery } from '../modules'

// const pathEn = `
// (^_type == 'project') => "/projects/"
// `

const translated = `
"translated": coalesce(
  __i18n_base -> { "lang": "en",
    (^._type == "home") => { "slug": "/" },
    (^._type == "page") => { "slug": slug.current },
    (^._type == "project") => { "slug": "/projects/" + slug.current },
    (^._type == "service") => { "slug": "/services/" + slug.current }
  },


  *[__i18n_base._ref == ^._id][0] {"lang": "no",
    (^._type == "home") => { "slug": "/" },
    (^._type == "page") => { "slug": slug.current },
    (^._type == "project") => { "slug": "/referanseprosjekter/" + slug.current },
    (^._type == "service") => { "slug": "/tjenester/" + slug.current }
  }
)
`


export const pageFields = groq`
_id,
title,
__i18n_lang,
${translated},
_type,
"slug": slug.current,
"author": author->{name, picture},
modules[] {
  ${modulesQuery}
}
`

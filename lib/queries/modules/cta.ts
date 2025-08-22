import { groq } from 'next-sanity'
import { imageMetaQuery } from '../shared/imageMetaQuery'

export const cta = groq`
    _type == "cta" => {
        _type,
        _key,
        title,
        picture {
            ${imageMetaQuery}
        },
        links[] {
            title,
            ...reference->{
                  "slug": slug.current               
            }
        }
    }
`

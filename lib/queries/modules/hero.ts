import { groq } from 'next-sanity'
import { imageMetaQuery } from '../shared/imageMetaQuery'

export const hero = groq`
    _type == "hero" => {
        _type,
        _key,
        title,
        picture {
            ${imageMetaQuery}
        }
    }
`

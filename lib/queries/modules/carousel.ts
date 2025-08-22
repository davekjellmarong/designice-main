import { groq } from 'next-sanity'
import { imageMetaQuery } from '../shared/imageMetaQuery'

export const carousel = groq`
    _type == "carousel" => {
        _type,
        _key,
        title,
        'images': images[] {
            ${imageMetaQuery}
        },
    }
`

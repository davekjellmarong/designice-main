import { groq } from 'next-sanity'
import { imageMetaQuery } from '../shared/imageMetaQuery'

export const fullwidthImage = groq`
    _type == "fullwidthImage" => {
        _type,
        _key,
        title,
        picture {
            ${imageMetaQuery}
        },
    }
`

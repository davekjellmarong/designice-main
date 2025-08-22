import { groq } from 'next-sanity'
import { portableTextQuery } from '../shared/portableTextQuery'

export const textblock = groq`
    _type == "textblock" => {
        _type,
        _key,
        title,
        body[] {
            ${portableTextQuery}
        }
    }
`

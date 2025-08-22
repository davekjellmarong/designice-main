import { groq } from 'next-sanity'

export const header = groq`
    _type == "header" => {
        _type,
        _key,
        title,
        ingress
    }
`

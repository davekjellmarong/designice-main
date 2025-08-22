import { groq } from 'next-sanity'

export const videohero = groq`
    _type == "videohero" => {
        _type,
        _key,
        herotext,
        video_url
    }
`

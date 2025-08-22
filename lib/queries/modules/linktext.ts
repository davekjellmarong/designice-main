import { groq } from 'next-sanity'

export const linktext = groq`
    _type == "linktext" => {
        _type,
        _key,
        title,
        centerText,
        link{
            title,
            ...reference->{
                  "slug": slug.current               
            }
        }
    }
`

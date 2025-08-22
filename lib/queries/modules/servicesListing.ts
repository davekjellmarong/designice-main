import { groq } from 'next-sanity'
import { imageMetaQuery } from '../shared/imageMetaQuery'
import { portableTextQuery } from '../shared/portableTextQuery'

export const servicesListing = groq`
    _type == "servicesListing" => {
        _type,
        _key,
        title,
        ingress,
        body[] {
            ${portableTextQuery}
        },
        'services': *[_type == "service" && __i18n_lang == $locale] | order(publishedAt desc, _createdAt desc) {
            title,
            _id,
            _type,
            'slug': slug.current,
            mainImage{
            ${imageMetaQuery}
            },
            ingress,
            categories[]->
        },
        'categories': *[_type == "category"] {
            _id,
            _type,
            _key,
            categoryname,
            categoryname_no
        }
    }
`

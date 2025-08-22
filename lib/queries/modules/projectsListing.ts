import { groq } from 'next-sanity'
import { imageMetaQuery } from '../shared/imageMetaQuery'

export const projectsListing = groq`
    _type == "projectsListing" => {
        _type,
        _key,
        title,
        projectsCount,
        'projects': *[_type == "project"  && __i18n_lang == $locale] | order(_updatedAt desc) {
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

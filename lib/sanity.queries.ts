import { groq } from 'next-sanity'
import { imageMetaQuery } from './queries/shared/imageMetaQuery'
import { navLinksQuery } from './queries/shared/navLinksQuery'
import { pageFields } from './queries/shared/pageFields'
import { postFields } from './queries/shared/postFields'
import { portableTextQuery } from './queries/shared/portableTextQuery'

export const settingsQuery = groq`
{
  "global": *[_type == "globalSettings"][0],
  "navigation": *[_type == "navigation"][0] {
    mainmenu[] {
       ${navLinksQuery}
    },
    mainmenu_no[] {
       ${navLinksQuery}
    }
  },
  "footer": *[_type == "footer"][0] {
    body[] {
      ${portableTextQuery}
    },
    links[] {
      ${navLinksQuery}
    },
    links_no[] {
      ${navLinksQuery}
    },
    telephone,
    mobile,
    email,
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
  }
}
`

export const indexQuery = groq`
*[_type == "home" && __i18n_lang == $locale][0] {
  ${pageFields}
}`

export const allCategoriesQuery = groq`
*[_type == "category" && __i18n_lang == $locale] {
  _id,
  _type,
  categoryname,
  categoryname_no
}`

export const indexQueryLocale = groq`
*[_type == "home" && __i18n_lang == $locale][0] {
  ${pageFields}
}`

export const pageQueryByType = groq`
*[_type == $type && slug.current == $slug && __i18n_lang == $locale][0]{
  ${pageFields}
}
`

export const pageQueryByTypeLocale = groq`
*[_type == $type && slug.current == $slug && __i18n_lang == $locale][0]{
  ${pageFields}
}
`

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug && __i18n_lang == $locale][0] {
  ${pageFields}
}`

export const pageQueryLocale = groq`
*[_type == "page" && slug.current == $slug && __i18n_lang == $locale][0] {
  ${pageFields}
}`

export const projectQuery = groq`
*[_type == "project" && slug.current == $slug && __i18n_lang == $locale][0] {
  ingress,
  categories[]->,
  mainImage {
    ${imageMetaQuery}
  },
  ${pageFields}
}`

export const projectQueryLocale = groq`
*[_type == "project" && slug.current == $slug && __i18n_lang == $locale][0] {
  ingress,
  categories[]->,
  mainImage {
    ${imageMetaQuery}
  },
  ${pageFields}
}`

export const serviceQuery = groq`
*[_type == "service" && slug.current == $slug && __i18n_lang == $locale][0] {
  ingress,
  categories[]->{
    ...,
    "isUsed": count(*[_type == "project" && references(^._id)])
  },
  mainImage {
    ${imageMetaQuery},
    alt,
    credit
  }
}`

export const serviceQueryLocale = groq`
*[_type == "service" && slug.current == $slug && __i18n_lang == $locale][0] {
  ingress,
  categories[]->{
    ...,
    "isUsed": count(*[_type == "project" && references(^._id)])
  },
  mainImage {
    ${imageMetaQuery},
    alt,
    credit
  },
  ${pageFields}
}`

export const fourOhFourQuery = groq`
*[_type == "errorPage"][0] {
  ${pageFields}
}`

export const getAllPagePathsQuery = groq`
*[_type == "page" && defined(slug.current) && seo.noIndex != true]{ 'slug': slug.current, _updatedAt, __i18n_lang }
`

export const getPathsByTypeQuery = groq`
*[_type == $type && defined(slug.current) && seo.noIndex != true]{ 'slug': slug.current, _updatedAt, __i18n_lang }
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

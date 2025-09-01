import { ImageAsset, ImageCrop, ImageHotspot } from 'sanity'
import { Block } from '@sanity/types'

export interface iPicture {
  _type: string
  asset: ImageAsset
  crop: ImageCrop
  hotspot: ImageHotspot
  alt?: string
  credit?: string
}

export interface iImg {
  picture: iPicture
  alt: string
  className?: string
  width?: number
  height?: number
  quality?: number
  loading?: 'eager' | 'lazy'
}

export interface iTextblock {
  _type: string
  _key: string
  title: string
  body: Block[]
}

export interface iHeader {
  _type: string
  _key: string
  title: string
  ingress: string
  body: Block[]
}

export interface iHero {
  _type: string
  _key: string
  title: string
  picture: iPicture
}

export interface iVideoHero {
  _type: string
  _key: string
  herotext: string
  video_url: string
}

export interface iCarousel {
  _type: string
  _key: string
  title: string
  images: any
}

export interface iLinkText {
  _type: string
  _key: string
  title: string
  centerText: boolean
  link: iLinkInternal
}

export interface iProjectsListing {
  _type: string
  _key: string
  title: string
  projectsCount: number
  projects: iProject[]
  categories: iCategory[]
}

export interface iServicesListing {
  _type: string
  _key: string
  title: string
  ingress: string
  body: Block[]
  services: iService[]
  categories: iCategory[]
}

export interface iSeo {
  metaTitle?: string
  metaDesc?: string
  shareGraphic?: iPicture
}

export interface iGlobalSettings extends iSeo {}

export type iLink = iLinkInternal | iLinkExternal | iLinkGroup

export type iLinkExternal = {
  _key: string
  _type: 'linkExternal'
  newWindow?: boolean
  url: string
  title: string
}

export type iLinkInternal = {
  _key: string
  _type: 'linkInternal'
  slug?: string
  title: string
}

export type iLinkGroup = {
  _key: string
  _type: 'linkGroup'
  slug?: string
  title: string
  links: iLink[]
}

export interface iNavigation {
  mainmenu?: iLink[]
  mainmenu_no?: iLink[]
}

export interface iSettings {
  global?: iGlobalSettings
  navigation?: iNavigation
}

export interface iPage {
  _id: string
  _type: string
  title?: string
  slug?: string
  modules?: any
  seo?: iSeo
  __i18n_lang?: string
  translated?: {
    lang: string
    slug: string
  }
}

export interface PageNotFound {}

export interface iProject extends iPage {
  ingress?: string
  mainImage?: iPicture
  categories?: iCategory[]
}
export interface iService extends iPage {
  ingress?: string
  mainImage?: iPicture
  alt?: string
  credit?: string
  categories?: iCategory[]
}

export interface iCategory {
  _id: string
  _type: string
  categoryname?: string
  categoryname_no?: string
  isUsed?: number
}
export interface PageProps {
  preview: boolean
  token: string | null
  combinedSlugPath: string
  page: iPage
  settings: iSettings
  locale: string
  previewLocale?: string | null
}

export interface PageQuery {
  [key: string]: string[]
}

export interface PagePreviewData {
  token?: string
  locale?: string
}

export interface iPagePath {
  slug: string
  _updatedAt: string
  __i18n_lang: string
}

export interface iCta {
  _id: string
  _type: string
  title?: string
  picture: iPicture
  links: iLinkExternal[] | iLinkInternal[]
}

export interface iFullwidthImage {
  _id: string
  _type: string
  title?: string
  picture: iPicture
}

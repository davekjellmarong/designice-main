import { groq } from 'next-sanity'

export const imageMetaQuery = groq`
    _type,
    asset->,
    crop,
    hotspot
    `

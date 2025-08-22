import { groq } from 'next-sanity'

export const portableTextQuery = groq`
  ...,
  asset->{
    ...,
    "_key": _id
  },
  markDefs[]{
    ...,
    _type == "link" && linkType != "file" => {
      "url": @.url,
      "page":@.page->{"type": _type, "slug": slug.current}
    },
    linkType == "file" => {
      "file": @.file.asset->url
    },
    _type == "youtube" => {
      "url": @.url
    }
  }
`

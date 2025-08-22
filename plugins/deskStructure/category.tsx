import { MdCreate, MdOutlineArticle } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'
import { standardViews } from './standardViews'

export const category = (S: StructureBuilder) =>
  S.listItem()
    .title('Categories')
    .schemaType('category')
    .icon(MdOutlineArticle)
    .child(
      S.documentTypeList('category')
        .title('Categories')
        .schemaType('category')
        .child((documentId) =>
          S.document()
            .documentId(documentId)
            .schemaType('category')
            .views(standardViews(S))
        )
    )

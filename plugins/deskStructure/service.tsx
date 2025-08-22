import { MdCreate, MdOutlineArticle } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'
import { standardViews } from './standardViews'

export const service = (S: StructureBuilder) =>
  S.listItem()
    .title('Services')
    .schemaType('service')
    .icon(MdOutlineArticle)
    .child(
      S.documentTypeList('service')
        .title('Services')
        .schemaType('service')
        .filter('_type == "service" && __i18n_lang == $baseLanguage')
        .params({ baseLanguage: `en` })
        .canHandleIntent(S.documentTypeList('service').getCanHandleIntent())
        .child((documentId) =>
          S.document()
            .documentId(documentId)
            .schemaType('service')
            .views(standardViews(S))
        )
    )

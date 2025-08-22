import { MdCreate, MdOutlineArticle } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'
import { standardViews } from './standardViews'

export const page = (S: StructureBuilder) =>
  // Hvis du trenger språk, kan du bruke denne:
  S.listItem()
    .title('Pages')
    .schemaType('page')
    .icon(MdOutlineArticle)
    .child(
      S.documentList()
        .title('Pages')
        .schemaType('page')
        .filter('_type == "page" && __i18n_lang == $baseLanguage')
        .params({ baseLanguage: `en` })
        .canHandleIntent(S.documentTypeList('page').getCanHandleIntent())
        .child((documentId) =>
          S.document()
            .documentId(documentId)
            .schemaType('page')
            .views(standardViews(S))
        )
    )

// Hvis du ikke trenger språk, kan du bruke denne:
// S.listItem()
//     .title('Pages')
//     .schemaType('page')
//     .icon(MdOutlineArticle)
//     .child(
//         S.documentTypeList('page')
//             .title('Pages')
//             .schemaType('page')
//             .child((documentId) =>
//                 S.document()
//                     .documentId(documentId)
//                     .schemaType('page')
//                     .views(
//                         standardViews(S)
//                     )
//             )
//     )

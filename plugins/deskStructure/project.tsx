import { MdCreate, MdOutlineArticle } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'
import { standardViews } from './standardViews'

export const project = (S: StructureBuilder) =>
  S.listItem()
    .title('Projects')
    .schemaType('project')
    .icon(MdOutlineArticle)
    .child(
      S.documentTypeList('project')
        .title('Projects')
        .schemaType('project')
        .filter('_type == "project" && __i18n_lang == $baseLanguage')
        .params({ baseLanguage: `en` })
        .canHandleIntent(S.documentTypeList('project').getCanHandleIntent() as any)
        .child((documentId) =>
          S.document()
            .documentId(documentId)
            .schemaType('project')
            .views(standardViews(S))
        )
    )

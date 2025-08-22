import { MdCreate, MdOutlineArticle } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'
import { standardViews } from './standardViews'
import { i18nConfig } from 'language.config'

export const news = (S: StructureBuilder) =>
  S.listItem()
    .title('News i18n')
    .schemaType('news')
    .icon(MdOutlineArticle)
    .child(
      S.documentList()
        .title('News')
        .schemaType('news')
        .filter('_type == "news" && __i18n_lang == $baseLanguage')
        .params({ baseLanguage: i18nConfig.base || `en` })
        .canHandleIntent(S.documentTypeList('news').getCanHandleIntent())
        .child((documentId) =>
          S.document()
            .documentId(documentId)
            .schemaType('news')
            .views(standardViews(S))
        )
    )

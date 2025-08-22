import { MdCreate, MdOutlineArticle } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'
import { standardViews } from './standardViews'
import { i18nConfig, languagesEnabled } from 'language.config'

const homeSingleton = (S: StructureBuilder) =>
  S.document()
    .id('home')
    .schemaType('home')
    .documentId('home')
    .views(standardViews(S))

const homeWithLanguages = (S: StructureBuilder) =>
  S.documentList()
    .title('Homepage')
    .schemaType('home')
    .filter('_type == "home" && __i18n_lang == $baseLanguage')
    .params({ baseLanguage: i18nConfig.base || 'en' })
    .child((documentId) =>
      S.document()
        .documentId(documentId)
        .schemaType('home')
        .views(standardViews(S))
    )

export const home = (S: StructureBuilder) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .icon(MdOutlineArticle)
    .child(languagesEnabled ? homeWithLanguages(S) : homeSingleton(S))

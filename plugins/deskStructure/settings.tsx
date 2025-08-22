import { SlSettings } from 'react-icons/sl'
import { StructureBuilder } from 'sanity/desk'
import { errorPage } from './errorPage'
import { footer } from './footer'
import { globalSettings } from './globalSettings'
import { navigation } from './navigation'

export const settings = (S: StructureBuilder) =>
  S.listItem()
    .title('Settings')
    .icon(SlSettings)
    .child(
      S.list()
        .title('Settings')
        .items([
          globalSettings(S),
          S.divider(),
          navigation(S),
          S.divider(),
          footer(S),
          S.divider(),
          errorPage(S),
          S.divider(),
        ])
    )

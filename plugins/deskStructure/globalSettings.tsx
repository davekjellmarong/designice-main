import { SlSettings } from 'react-icons/sl'
import { StructureBuilder } from 'sanity/desk'

export const globalSettings = (S: StructureBuilder) =>
  S.listItem()
    .title('Global Settings')
    .schemaType('globalSettings')
    .icon(SlSettings)
    .child(
      S.editor()
        .id('globalSettings')
        .schemaType('globalSettings')
        .documentId('globalSettings')
    )

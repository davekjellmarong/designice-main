import { CgMenu } from 'react-icons/cg'
import { StructureBuilder } from 'sanity/desk'

export const navigation = (S: StructureBuilder) =>
  S.listItem()
    .title('Navigation')
    .schemaType('navigation')
    .icon(CgMenu)
    .child(
      S.editor()
        .id('navigation')
        .schemaType('navigation')
        .documentId('navigation')
    )

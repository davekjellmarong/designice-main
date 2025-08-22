import { RiLayoutBottomLine } from 'react-icons/ri'
import { StructureBuilder } from 'sanity/desk'

export const footer = (S: StructureBuilder) =>
  S.listItem()
    .title('Footer')
    .schemaType('footer')
    .icon(RiLayoutBottomLine)
    .child(S.editor().id('footer').schemaType('footer').documentId('footer'))

import { MdOutlineErrorOutline } from 'react-icons/md'
import { StructureBuilder } from 'sanity/desk'

export const errorPage = (S: StructureBuilder) =>
  S.listItem()
    .title('Error page')
    .schemaType('errorPage')
    .icon(MdOutlineErrorOutline)
    .child(
      S.editor().id('errorPage').schemaType('errorPage').documentId('errorPage')
    )

/**
 * This plugin contains all the logic for setting up singletons
 */

import { MdCreate } from 'react-icons/md'
import { Schema, type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/desk'
import { page } from './deskStructure/page'
import { home } from './deskStructure/home'
import { project } from './deskStructure/project'
import { category } from './deskStructure/category'
import { settings } from './deskStructure/settings'
import { DOCUMENT_TYPES_IN_STRUCTURE } from 'schemas'
import { getFilteredDocumentTypeListItems } from '@sanity/document-internationalization'
import { news } from './deskStructure/news'
import { i18nConfig } from 'language.config'
import { service } from './deskStructure/service'

export const documentActionPlugin = (typeDefArray: DocumentDefinition[]) => {
  return {
    name: 'document-action-plugin',
    document: {
      // Hide singletons from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) =>
              !typeDefArray.find(
                (singleton) => singleton.name === templateItem.templateId
              )
          )
        }

        return prev
      },
      // Removes the "duplicate" and "delete" action on singletons
      actions: (prev, { schemaType }) => {
        if (typeDefArray.find((singleton) => singleton.name === schemaType)) {
          return prev.filter(
            ({ action }) => action !== 'duplicate' && action !== 'delete'
          )
        }

        //Todo: This is a hack until document-internationalization has a fix
        if (
          (schemaType === 'project' ||
            schemaType === 'service' ||
            schemaType === 'category' ||
            schemaType === 'home' ||
            schemaType === 'page') &&
          prev[0].name === 't'
        ) {
          prev.push(prev[0])
          prev.shift()
        }

        return prev
      },
    },
  }
}

// The StructureResolver is how we're changing the DeskTool structure to linking to a single (singleton) document, instead of rendering f.ex. "settings" in a list
// like how "Page" is handled.
export const structureBuilder = (schema: Schema): StructureResolver => {
  return (S) => {
    // StructureBuilder for all custom list items
    const customListItems = [
      S.listItem()
        .title('Content')
        .icon(MdCreate)
        .child(
          S.list()
            .title('Content')
            .items([
              home(S),
              page(S),
              project(S),
              service(S),
              S.divider(),
              category(S),
              S.divider(),
            ])
        ),
      S.divider(),
      //navigation(S),
      //S.divider(),
      settings(S),
    ]

    const defaultListItems = getFilteredDocumentTypeListItems({
      S,
      schema,
      config: i18nConfig,
    }).filter(
      (listItem) =>
        !DOCUMENT_TYPES_IN_STRUCTURE.some((doc) => doc === listItem.id)
    )

    return S.list()
      .title('Content')
      .items([...customListItems, , S.divider(), ...defaultListItems])
  }
}

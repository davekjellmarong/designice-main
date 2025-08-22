import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import {
  documentActionPlugin,
  structureBuilder,
} from 'plugins/structureBuilder'
import { defineConfig, DocumentDefinition, Schema } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
  PREVIEW_DOCUMENT_TYPES,
  schemaTypes,
  SINGLETONS_DOCUMENTS,
} from 'schemas'
import { documentI18n } from '@sanity/document-internationalization'
import { i18nConfig } from 'language.config'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Sanity Studio'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    documentI18n(i18nConfig),
    deskTool({
      structure: structureBuilder(schemaTypes as any),
    }),
    documentActionPlugin(SINGLETONS_DOCUMENTS),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEW_DOCUMENT_TYPES,
    }),
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

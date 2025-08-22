/**
 * This plugin sets up the "Open preview (CTRL + ALT + O)" in the dropdown menu that hosts
 * other actions like "Review changes" and "Inspect"
 * @TODO the code in this plugin is a candidate for moving into `@sanity/preview-kit/studio`
 */

import { client } from 'lib/sanity.client'
import { type Slug, definePlugin, DocumentDefinition } from 'sanity'

import { getSecret } from './utils'

export const productionUrl = definePlugin<{
  previewSecretId: `${string}.${string}`
  types: DocumentDefinition[]
  apiVersion?: string
}>(({ previewSecretId, types: _types, apiVersion = '2022-11-17' }) => {
  if (!previewSecretId) {
    throw new TypeError('`previewSecretId` is required')
  }
  if (!previewSecretId.includes('.')) {
    throw new TypeError(
      '`previewSecretId` must contain a `.` to ensure it can only be queried by authenticated users'
    )
  }
  if (!_types || _types.length === 0) {
    throw new TypeError('`types` is required')
  }
  const types = new Set(_types)
  return {
    name: 'productionUrl',
    document: {
      productionUrl: async (prev, { document, getClient }) => {
        const url = new URL('/api/preview', location.origin)
        const token = process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN
        const secret = await getSecret(
          client.withConfig({ token }),
          previewSecretId,
          true
        )
        if (secret) {
          url.searchParams.set('secret', secret)
        }

        const slug = (document.slug as Slug)?.current
        if (slug) {
          url.searchParams.set('slug', slug)
        }

        const locale = document.__i18n_lang as string
        if (locale) {
          url.searchParams.set('locale', locale)
        }
        
        if (_types.find((doc) => doc.name === document._type)) {
          url.searchParams.set('type', document._type)
          return url.toString()
        }
        return prev
      },
    },
  }
})

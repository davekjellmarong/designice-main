'use client'

import StandardPage from './StandardPage'
import { usePreview } from 'lib/sanity.preview'
import {
  settingsQuery,
  pageQueryLocale,
  indexQueryLocale,
} from 'lib/sanity.queries'
import { iPage, iSettings } from 'lib/types'

export default function PreviewStandardPage({
  token,
  slug,
  locale,
}: {
  token: null | string
  slug: string
  locale?: string
}) {
  const pageQuery = slug // If the slug is empty, use the indexpage query
    ? pageQueryLocale
    : indexQueryLocale

  const page: iPage = usePreview(token, pageQuery, { slug, locale }) || []
  const settings: iSettings = usePreview(token, settingsQuery) || {}

  return (
    <StandardPage preview loading={false} page={page} settings={settings} />
  )
}

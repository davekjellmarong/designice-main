'use client'

import { usePreview } from 'lib/sanity.preview'
import { settingsQuery, serviceQueryLocale } from 'lib/sanity.queries'
import { iService, iSettings } from 'lib/types'
import ServicePage from './ServicePage'

export default function PreviewServicePage({
  token,
  slug,
  locale,
}: {
  token: null | string
  slug: string
  locale: string
}) {
  const page: iService = usePreview(token, serviceQueryLocale, { slug: slug, locale: locale }) || []
  const settings: iSettings = usePreview(token, settingsQuery) || {}

  return <ServicePage preview loading={false} page={page} settings={settings} />
}

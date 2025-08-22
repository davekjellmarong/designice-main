'use client'

import StandardPage from 'components/pages/StandardPage'
import { usePreview } from 'lib/sanity.preview'
import { indexQuery, settingsQuery } from 'lib/sanity.queries'
import { iPage, iSettings } from 'lib/types'

export default function PreviewHomePage({ token }: { token: null | string }) {
  const page: iPage = usePreview(token, indexQuery) || []
  const settings: iSettings = usePreview(token, settingsQuery) || {}

  return <StandardPage preview loading={false} page={page} settings={settings} />
}

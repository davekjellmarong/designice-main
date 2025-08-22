'use client'

import { usePreview } from 'lib/sanity.preview'
import { settingsQuery, projectQueryLocale } from 'lib/sanity.queries'
import { iProject, iSettings } from 'lib/types'
import ProjectPage from './ProjectPage'

export default function PreviewProjectPage({
  token,
  slug,
  locale,
}: {
  token: null | string
  slug: string
  locale: string
}) {
  
  const page: iProject = usePreview(token, projectQueryLocale, { slug: slug, locale: locale }) || []
  const settings: iSettings = usePreview(token, settingsQuery) || {}

  return <ProjectPage preview loading={false} page={page} settings={settings} />
}

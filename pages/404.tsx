import StandardPage from 'components/pages/StandardPage'
import { getErrorPage, getSettings } from 'lib/sanity.client'
import { PageNotFound, PagePreviewData, PageProps, PageQuery } from 'lib/types'
import type { GetStaticProps } from 'next'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'

const PreviewStandardPage = lazy(
  () => import('components/pages/PreviewStandardPage')
)

export const getStaticProps: GetStaticProps<
  PageProps | PageNotFound,
  PageQuery,
  PagePreviewData
> = async (context) => {
  const { preview = false, previewData = {} } = context

  const token = previewData?.token || null

  const [page, settings] = await Promise.all([getErrorPage(), getSettings("en")])

  const notFound =
    !page ||
    JSON.stringify(page) === '{}' ||
    !settings ||
    JSON.stringify(settings) === '{}'

  if (notFound && !preview) throw new Error('errorpage not found')

  return {
    props: {
      preview,
      token,
      combinedSlugPath: null,
      page: page || null,
      settings: settings || {},
    },
    revalidate: 60,
  }
}

export default function FourOhFour({
  preview,
  token,
  page,
  settings,
}: PageProps) {
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          page 
            ? <StandardPage preview loading page={page} settings={settings} />
            : null
        }
      >
        <PreviewStandardPage 
          token={token} 
          slug={'errorPage'} 
        />
      </PreviewSuspense>
    )
  }

  return <StandardPage loading={false} preview={false} page={page} settings={settings} />
}

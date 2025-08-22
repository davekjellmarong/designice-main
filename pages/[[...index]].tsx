import StandardPage from 'components/pages/StandardPage'
import { i18nConfig } from 'language.config'
import {
  getAllPagePaths,
  getHomePage,
  getPage,
  getProjectPage,
  getServicePage,
  getSettings,
} from 'lib/sanity.client'
import { PageNotFound, PagePreviewData, PageProps } from 'lib/types'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { PreviewSuspense } from 'next-sanity/preview'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import { lazy } from 'react'
const PreviewStandardPage = lazy(
  () => import('components/pages/PreviewStandardPage')
)

export const getStaticProps: GetStaticProps<
  PageProps | PageNotFound,
  NextParsedUrlQuery,
  PagePreviewData
> = async (context) => {
  const {
    params,
    preview = false,
    previewData = {},
    locale = i18nConfig.base,
  } = context

  const token = previewData.token || null
  
  const combinedSlugPath =
    params && params['index'] ? (params.index as string[]).join('/') : ''

  const getCorrectPage = async () =>
    combinedSlugPath === ''
      ? getHomePage(locale)
      : getPage(locale, combinedSlugPath)

  const [page, settings] = await Promise.all([getCorrectPage(), getSettings(locale)])
  const notFound =
    !page ||
    JSON.stringify(page) === '{}' ||
    !settings ||
    JSON.stringify(settings) === '{}'

  if (notFound && !preview) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      preview,
      token,
      previewLocale: previewData.locale || null,
      combinedSlugPath,
      page,
      settings,
      locale,
    },
    revalidate: 60,
  }
}

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const allPagePaths = await getAllPagePaths()
  if (!allPagePaths) {
    throw new Error("Couldn't fetch all paths")
  }

  const formatedPaths = allPagePaths.map(({ slug, __i18n_lang }) => ({
    params: { index: slug.split('/') },
    locale: __i18n_lang,
  }))

  const formatedIndexPages = i18nConfig.languages.map((lang) => ({
    params: { index: false },
    locale: lang.id,
  }))

  const paths = [...formatedPaths, ...formatedIndexPages]

  return {
    paths,
    fallback: 'blocking',
  }
}

export default function Page({
  preview,
  token,
  combinedSlugPath,
  page,
  settings,
  previewLocale,
}: PageProps) {
  if (preview && previewLocale) {
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
          slug={combinedSlugPath}
          locale={previewLocale}
        />
      </PreviewSuspense>
    )
  }

  return (
    <StandardPage
      preview={false}
      loading={false}
      page={page}
      settings={settings}
    />
  )
}

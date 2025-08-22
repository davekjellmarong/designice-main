import ProjectPage from 'components/pages/ProjectPage'
import type {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import {
  PageNotFound,
  PagePreviewData,
  PageProps,
} from 'lib/types'
import { getPathsByType, getProjectPage, getSettings } from 'lib/sanity.client'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import { i18nConfig } from 'language.config'
const PreviewProjectPage = lazy(
  () => import('components/pages/PreviewProjectPage')
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
    params && params['slug'] ? (params.slug as string[]).join('/') : ''

  const [page, settings] = await Promise.all([
    getProjectPage(locale, combinedSlugPath),
    getSettings(locale),
  ])
  
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
      previewLocale: previewData.locale || "en",
      combinedSlugPath,
      page: page,
      settings: settings,
      locale,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const allProjectPaths = await getPathsByType('project')
  if (!allProjectPaths) {
    throw new Error("Couldn't fetch all paths")
  }

  const formatedPaths = allProjectPaths.map(({ slug, __i18n_lang }) => ({
    params: { slug: [slug] },
    locale: __i18n_lang,
  }))

  return {
    paths: formatedPaths,
    fallback: 'blocking',
  }
}

export default function Page({
  preview,
  token,
  previewLocale,
  combinedSlugPath,
  page,
  settings,
  locale,
}: PageProps) {
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <ProjectPage preview loading page={page} settings={settings} />
        }
      >
        <PreviewProjectPage token={token} slug={combinedSlugPath} locale={previewLocale} />
      </PreviewSuspense>
    )
  }

  return (
    <ProjectPage
      preview={false}
      loading={false}
      page={page}
      settings={settings}
    />
  )
}

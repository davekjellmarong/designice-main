import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  fourOhFourQuery,
  getAllPagePathsQuery,
  getPathsByTypeQuery,
  indexQuery,
  indexQueryLocale,
  pageQuery,
  pageQueryByType,
  pageQueryByTypeLocale,
  pageQueryLocale,
  projectQuery,
  projectQueryLocale,
  serviceQuery,
  serviceQueryLocale,
  settingsQuery,
  allCategoriesQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import { iPage, iSettings, iPagePath, iProject, iService } from './types'

if (
  !projectId ||
  !dataset
) {
  throw new Error("Incomplete project setup")
}

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
}

export const client = createClient(clientConfig)

export async function getSettings(locale: string): Promise<iSettings | null> {
  return (await client.fetch(settingsQuery, { locale })) || null
}

export async function getCategories(): Promise<iSettings | null> {
  return (await client.fetch(allCategoriesQuery)) || null
}

export async function getHomePage(
  locale: string | null
): Promise<iPage | null> {
  if (locale) {
    return (await client.fetch(indexQueryLocale, { locale })) || null
  } else {
    return (await client.fetch(indexQuery)) || null
  }
}

export async function getErrorPage(): Promise<iPage | null> {
  return (await client.fetch(fourOhFourQuery, { locale: 'en' })) || null
}

export async function getPage(
  locale: string | null,
  slug: string
): Promise<iPage | null> {
  if (locale) {
    return (await client.fetch(pageQueryLocale, { slug, locale })) || null
  } else {
    const page = (await client.fetch(pageQuery, { slug })) || null
    return page
  }
}

export async function getPageByType(
  type: string,
  locale: string | null,
  slug: string
) {
  if (locale) {
    return await client.fetch(pageQueryByTypeLocale, { slug, locale, type })
  } else {
    return await client.fetch(pageQueryByType, { slug, type })
  }
}

export async function getProjectPage(
  locale: string,
  slug: string
): Promise<iProject | null> {
  if (locale) {
    return (await client.fetch(projectQueryLocale, { slug, locale })) || null
  } else {
    const page = (await client.fetch(projectQuery, { slug })) || null
    return page
  }
}

export async function getServicePage(
  locale: string,
  slug: string
): Promise<iService | null> {
  if (locale) {
    return (await client.fetch(serviceQueryLocale, { slug, locale })) || null
  } else {
    const page = (await client.fetch(serviceQuery, { slug })) || null
    return page
  }
}

export async function getAllPagePaths(): Promise<iPagePath[] | null> {
  return (await client.fetch(getAllPagePathsQuery)) || null
}

export async function getPathsByType(
  type: string
): Promise<iPagePath[] | null> {
  return await client.fetch(getPathsByTypeQuery, { type })
}

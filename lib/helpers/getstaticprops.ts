import { languagesEnabled } from 'language.config'
import { projectId } from '../sanity.api'
import { getPageByType, getSettings } from '../sanity.client'

export async function pageGetStaticProps(context: any, type: string) {
  if (!projectId) {
    return {
      props: {
        preview: false,
        combinedSlugPath: null,
        token: null,
        page: {},
        settings: {},
        locale: null,
      },
    }
  }

  const {
    params: { slug },
    preview = false,
    previewData = {},
    locale,
  } = context

  const token = previewData?.token || null

  const combinedSlugPath = slug.join('/')

  const [page, settings] = await Promise.all([
    getPageByType(type, languagesEnabled ? locale : null, combinedSlugPath),
    getSettings(locale),
  ])

  const notFound = !page || JSON.stringify(page) === '{}'

  if (notFound && !preview) {
    return {
      notFound,
    }
  }

  return {
    props: {
      preview,
      token,
      combinedSlugPath,
      page: page || {},
      settings: settings || {},
      locale,
    },
  }
}

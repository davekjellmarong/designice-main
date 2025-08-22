import { previewSecretId } from 'lib/sanity.api'
import { pageQueryLocale, pageQueryByTypeLocale } from 'lib/sanity.queries'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { PageConfig } from 'next/types'
import { getSecret } from 'plugins/productionUrl/utils'
import { PagePreviewData } from 'lib/types'
import { client } from 'lib/sanity.client'
import { quartersInYear } from 'date-fns'

// res.setPreviewData only exists in the nodejs runtime, setting the config here allows changing the global runtime
// option in next.config.mjs without breaking preview mode
export const config: PageConfig = { runtime: 'nodejs' }

function redirectToPreview(
  res: NextApiResponse<string | void>,
  previewData: PagePreviewData,
  Location: '/' | `${string}`
): void {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData(previewData)
  // Redirect to a preview capable route
  res.writeHead(307, { Location })
  res.end()
}


export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  const previewData: PagePreviewData = {}
  // If you want to require preview mode sessions to be started from the Studio, set the SANITY_REQUIRE_PREVIEW_SECRET
  // environment variable to 'true'. The benefit of doing this that unauthorized users attempting to brute force into your
  // preview mode won't make it past the secret check, and only legitimate users are able to bypass the statically generated pages and load up
  // the serverless-powered preview mode.
  if (
    process.env.SANITY_REQUIRE_PREVIEW_SECRET === 'true' &&
    !req.query.secret
  ) {
    return res.status(401).send('Invalid secret')
  }

  // If a secret is present in the URL, verify it and if valid we upgrade to token based preview mode, which works in Safari and Incognito mode
  const token = process.env.SANITY_API_READ_TOKEN
  if (req.query.secret) {
    if (!token) {
      throw new Error(
        'A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.'
      )
    }

    const secretClient = client.withConfig({ useCdn: false, token })
    const secret = await getSecret(secretClient, previewSecretId, true)
    if (req.query.secret !== secret) {
      return res.status(401).send('Invalid secret')
    }
    previewData.token = token
    if (req.query.locale) {
      previewData.locale = req.query.locale as string
    }
  }

  // If no slug is provided open preview mode on the frontpage
  if (!req.query.slug || req.query.slug === '/') {
    return redirectToPreview(res, previewData, '/')
  }

  let page: any = null;

  if (req.query.type) {
    page = await client.withConfig({ useCdn: false, token }).fetch(pageQueryByTypeLocale, {
      type: req.query.type,
      slug: req.query.slug,
      locale: req.query.locale
    })
  } else {
    page = await client.withConfig({ useCdn: false, token }).fetch(pageQueryLocale, {
      slug: req.query.slug,
      locale: req.query.locale
    })
  }


  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).send('Invalid slug')
  }

  let path = `/${page.slug}`
  if (req.query.type == "project") {
    path = `/projects/${req.query.slug}`
  }
  if (req.query.type == "service") {
    path = `/services/${req.query.slug}`
  }


  // Redirect to the path from the fetched page
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  redirectToPreview(res, previewData, `${path}`)
}

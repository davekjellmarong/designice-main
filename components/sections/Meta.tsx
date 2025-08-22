import { urlForImage } from 'lib/sanity.image'
import { iPage, iSettings } from 'lib/types'
import Head from 'next/head'

export default function Meta({
  page,
  settings,
}: {
  page: iPage
  settings: iSettings
}) {
  let metaTitle = settings?.global?.metaTitle
  let metaDesc = settings?.global?.metaDesc
  let shareGraphic = settings?.global?.shareGraphic
  let shareGraphicUrl

  const pageSeo = page?.seo

  if (pageSeo?.metaTitle) {
    metaTitle = pageSeo.metaTitle
  }

  if (pageSeo?.metaDesc) {
    metaDesc = pageSeo.metaDesc
  }

  if (pageSeo?.shareGraphic) {
    shareGraphic = pageSeo.shareGraphic
  }

  if (shareGraphic && typeof shareGraphic !== 'string') {
    shareGraphicUrl = urlForImage(shareGraphic).height(630).width(1200).url()
  } else if (shareGraphic) {
    shareGraphicUrl = shareGraphic
  }

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>
        {process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE + ' - ' + page?.title}
      </title>
      <meta property="og:title" content={metaTitle} />
      <meta name="description" property="og:description" content={metaDesc} />
      <meta property="og:image" content={shareGraphicUrl} />
      <link rel="stylesheet" href="https://use.typekit.net/hke5igl.css" />
    </Head>
  )
}

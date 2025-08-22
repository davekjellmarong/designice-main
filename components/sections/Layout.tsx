import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import PreviewOffButton from '../parts/PreviewOffButton'
import { Card, Flex, Spinner, Text } from '@sanity/ui'
import { iPage, iSettings } from 'lib/types'

export default function Layout({
  preview,
  loading,
  page,
  settings,
  children,
}: {
  preview: boolean
  loading: boolean
  page: iPage
  settings: iSettings
  children: any
}) {
  if (preview && loading) {
    return (
      <div>Loading preview...</div>

      // Got a weird error using sanity ui :(

      // <Flex
      //     justify="center"
      //     align="center"
      //     height="fill"
      //     direction="column"
      //     gap={4}
      // >
      //     <Text muted>Loading...</Text>
      //     <Spinner muted />
      // </Flex>
    )
  }

  return (
    <>
      <Meta page={page} settings={settings} />
      {preview && <PreviewOffButton slug={page.slug || ''} />}
      <Header page={page} settings={settings} />
      <main>{children}</main>
      <Footer page={page} settings={settings} />
    </>
  )
}

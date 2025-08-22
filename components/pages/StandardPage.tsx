import Layout from 'components/sections/Layout'
import ModuleBuilder from 'components/sections/ModuleBuilder'
import { iPage, iSettings } from 'lib/types'
import StartPageAnimation from 'components/parts/PageLoadImage'

export default function StandardPage(props: {
  preview: boolean
  loading: boolean
  page: iPage
  settings: iSettings
}) {
  const { preview, loading, page, settings } = props
  return (
    <>
      {page._type === 'home' && <StartPageAnimation />}
      <Layout
        preview={preview}
        loading={loading}
        page={page}
        settings={settings}
      >
        <ModuleBuilder page={page} />
      </Layout>
    </>
  )
}

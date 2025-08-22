import Container from 'components/parts/Container'
import Picture from 'components/parts/Picture'
import Layout from 'components/sections/Layout'
import ModuleBuilder from 'components/sections/ModuleBuilder'
import { iProject, iSettings } from 'lib/types'
import { useRouter } from 'next/router'

export default function ProjectPage(props: {
  preview: boolean
  loading: boolean
  page: iProject
  settings: iSettings
}) {
  const { preview, loading, page, settings } = props
  const { locale } = useRouter()

  if (!page) {
    return null;
  }

  const filteredCategories = page && page.categories && page.categories.length && page.categories.filter(Boolean);

  return (
    <>
      <Layout
        preview={preview}
        loading={loading}
        page={page}
        settings={settings}
      >
        <Container>
          <section className="header">
            <div className="my-10 md:my-24">
              <h1 className="text-xl md:text-6xl leading-tight mb-3 md:mb-6 whitespace-pre-line font-bold">
                {page.title}
              </h1>
              <p className="text-sm md:text-xl max-w-[835px] md:whitespace-pre-wrap">
                {page.ingress}
              </p>
              <div className="mt-4 md:mt-12 flex flex-row flex-wrap">
                  {page && filteredCategories && filteredCategories?.map((category, index) => (
                    <div key={index} className="pr-2 md:pr-4 pt-2">
                      <button className="whitespace-nowrap cursor-default border border-gray bg-gray text-white rounded-full text-xs md:text-sm py-2 px-4 md:px-8">{locale === "en" ? category.categoryname : category.categoryname_no}</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </Container>
        {page.mainImage && page.title && (
          <div className="flex-1 md:pr-5 lg:pr-16 md:pl-5 lg:pl-16">
            <Picture
              picture={page.mainImage}
              width={1400}
              alt={page.title}
              className="md:w-full md:h-auto w-auto object-cover"
            />
          </div>
        )}
        <ModuleBuilder page={page} />
      </Layout>
    </>
  )
}

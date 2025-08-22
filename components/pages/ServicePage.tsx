import Container from 'components/parts/Container'
import Picture from 'components/parts/Picture'
import Layout from 'components/sections/Layout'
import ModuleBuilder from 'components/sections/ModuleBuilder'
import { iService, iSettings } from 'lib/types'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ServicePage(props: {
  preview: boolean
  loading: boolean
  page: iService
  settings: iSettings
}) {
  const { preview, loading, page, settings } = props

  const { locale } = useRouter()

  if (!page) {
    return null;
  }

  const categoriesTitleLabel = locale === "en" ? "We make this and much more of ice and snow:" : "Vi lager dette og mye mer av is og snø:";
  const projectLink = locale === "en" ? "projects" : "referanseprosjekter";

  const filteredCategories = page.categories.filter(Boolean);
  
  return (
    <>
      <Layout
        preview={preview}
        loading={loading}
        page={page}
        settings={settings}
      >
        <Container className="max-w-[940px] mt-12 md:mt-24 px-0 md:px-5">
          {page.mainImage && page.title && (
            <div>
              <Picture
                picture={page.mainImage}
                width={1920}
                height={1068}
                alt={page.title}
                className="w-full h-auto"
              />
            </div>
          )}
          {page.mainImage && page.mainImage?.credit &&
            <span className="text-[10px] opacity-50">{page.mainImage.credit || ""}</span>
        }
        </Container>
        <Container className="max-w-[940px]">
          <div className="my-10 md:my-[42px] text-center">
            <h1 className="text-left md:text-center text-[34px] md:text-[70px] bold leading-tight mb-6 md:mb-12 whitespace-pre-line font-bold mx-auto">
              {page.title}
            </h1>
            <p className="text-[15px] md:text-[22px] max-w-[835px] whitespace-pre-wrap md:mx-36 text-left">
              {page.ingress}
            </p>
          </div>
        </Container>
        {page && page.categories?.length && <Container className="max-w-[940px]">
          <div className="text-[21px] md:text-[28px] max-w-[835px] md:whitespace-pre-wrap md:mx-36 mt-12 md:mt-24 mb-4 md:mb-8">
            <span>{categoriesTitleLabel}</span>
          </div>
        </Container>}
        <div className="flex flex-row flex-wrap justify-center max-w-[1400px] mx-auto">
          {filteredCategories?.map(category => (
            (category && !!category.isUsed ? <Link href={`/${projectLink}?category=${category._id}`} key={category._id} className="p-1 md:px-2 md:py-4">
              <button className="whitespace-nowrap border border-black hover:text-white hover:bg-black rounded-full text-[10px] md:text-sm py-2 px-4 md:px-8">{locale === "en" ? category.categoryname : category.categoryname_no}</button>
            </Link>
            : <button key={category._id} className="cursor-default whitespace-nowrap rounded-full text-xs md:text-sm py-2 px-4 md:px-8">{locale === "en" ? category?.categoryname : category?.categoryname_no}</button>
            )
          ))}
        </div>
        <ModuleBuilder page={page} />
      </Layout>
    </>
  )
}

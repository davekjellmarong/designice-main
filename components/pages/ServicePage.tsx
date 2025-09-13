import Container from 'components/parts/Container'
import Picture from 'components/parts/Picture'
import Layout from 'components/sections/Layout'
import ModuleBuilder from 'components/sections/ModuleBuilder'
import { iService, iSettings } from 'lib/types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from 'components/modules/Button'

export default function ServicePage(props: {
  preview: boolean
  loading: boolean
  page: iService
  settings: iSettings
}) {
  const { preview, loading, page, settings } = props

  const { locale } = useRouter()

  if (!page) {
    return null
  }

  const categoriesTitleLabel =
    locale === 'en'
      ? 'We make this and much more of ice and snow:'
      : 'Vi lager dette og mye mer av is og snø:'
  const projectLink = locale === 'en' ? 'projects' : 'referanseprosjekter'
  const contactUsButtonLabel = locale === 'en' ? 'Contact us' : 'Kontakt oss'
  const contactLink = locale === 'en' ? 'contact-us' : 'kontakt-oss'
  const filteredCategories = page.categories.filter(Boolean)

  return (
    <>
      <Layout
        preview={preview}
        loading={loading}
        page={page}
        settings={settings}
      >
        <Container className="mt-12 max-w-[940px] px-0 md:mt-24 md:px-5">
          {page.mainImage && page.title && (
            <div>
              <Picture
                picture={page.mainImage}
                width={1920}
                height={1068}
                alt={page.title}
                className="h-auto w-full"
              />
            </div>
          )}
          {page.mainImage && page.mainImage?.credit && (
            <span className="text-[10px] opacity-50">
              {page.mainImage.credit || ''}
            </span>
          )}
        </Container>
        <Container className="max-w-[940px]">
          <div className="my-10 text-center md:my-[42px]">
            <h1 className="bold mx-auto mb-6 whitespace-pre-line text-left text-[34px] font-bold leading-tight md:mb-12 md:text-center md:text-[70px]">
              {page.title}
            </h1>
            <p className="max-w-[835px] whitespace-pre-wrap text-left text-[15px] md:mx-36 md:text-[22px]">
              {page.ingress}
            </p>
          </div>
        </Container>
        <Container className="max-w-[940px]">
          <div className="my-10 text-center md:my-[42px]">
            <Link href={`/${contactLink}`}>
              <button
                className={`rounded-full bg-black px-6 py-3 font-medium text-white transition-colors duration-200`}
              >
                {contactUsButtonLabel}
              </button>
            </Link>
          </div>
        </Container>
        {page && page.categories?.length && (
          <Container className="max-w-[940px]">
            <div className="mt-12 mb-4 max-w-[835px] text-[21px] md:mx-36 md:mt-24 md:mb-8 md:whitespace-pre-wrap md:text-[28px]">
              <span>{categoriesTitleLabel}</span>
            </div>
          </Container>
        )}
        <div className="mx-auto flex max-w-[1400px] flex-row flex-wrap justify-center">
          {filteredCategories?.map((category) =>
            category && !!category.isUsed ? (
              <Link
                href={`/${projectLink}?category=${category._id}`}
                key={category._id}
                className="p-1 md:px-2 md:py-4"
              >
                <button className="whitespace-nowrap rounded-full border border-black py-2 px-4 text-[10px] hover:bg-black hover:text-white md:px-8 md:text-sm">
                  {locale === 'en'
                    ? category.categoryname
                    : category.categoryname_no}
                </button>
              </Link>
            ) : (
              <button
                key={category._id}
                className="cursor-default whitespace-nowrap rounded-full py-2 px-4 text-xs md:px-8 md:text-sm"
              >
                {locale === 'en'
                  ? category?.categoryname
                  : category?.categoryname_no}
              </button>
            )
          )}
        </div>
        <ModuleBuilder page={page} />
      </Layout>
    </>
  )
}

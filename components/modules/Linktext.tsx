import { iLinkText } from 'lib/types'
import Container from 'components/parts/Container'
import NextLink from 'next/link'

export default function Linktext(module: iLinkText) {
  const { _type, title, centerText, link } = module

  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className={`mx-auto max-w-2xl ${centerText ? 'text-center' : ''}`}>
          <h2 className="mb-2 text-xl font-semibold md:text-3xl">{title}</h2>
          {link && link.slug && (
            <NextLink
              className="text-blue-600 underline hover:text-blue-800"
              href={`/${link.slug ? link.slug : ''}`}
            >
              {link.title}
            </NextLink>
          )}
        </div>
      </Container>
    </section>
  )
}

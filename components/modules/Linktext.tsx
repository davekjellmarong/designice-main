import { iLinkText } from 'lib/types'
import Container from 'components/parts/Container'
import NextLink from 'next/link'

export default function Linktext(module: iLinkText) {
  const { _type, title, centerText, link } = module;

  return (
    <section className="linktext mx-auto">
      <Container>
        <div className={`my-6 md:my-24 ${centerText ? 'text-center' : ''}`}>
          <div className="text-sm md:text-5xl leading-normal">
            {title}
            {link && link.slug && <NextLink className="underline" href={`/${link.slug ? link.slug : ''}`}>
              {link.title}
            </NextLink>}
          </div>
        </div>
      </Container>
    </section>
  )
}

import { PortableText } from '@portabletext/react'
import { iTextblock } from 'lib/types'
import { portableTextComponents } from '../../lib/portableTextComponent'
import Container from 'components/parts/Container'

export default function Textblock(module: iTextblock) {
  const { _type, title, body } = module

  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          {title && (
            <h2 className="mb-4 text-left text-2xl font-bold md:text-4xl">
              {title}
            </h2>
          )}
          <div className="text-left text-base leading-relaxed md:text-lg">
            <PortableText value={body} components={portableTextComponents} />
          </div>
        </div>
      </Container>
    </section>
  )
}

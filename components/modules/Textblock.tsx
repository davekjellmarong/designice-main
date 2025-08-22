import { PortableText } from '@portabletext/react'
import { iTextblock } from 'lib/types'
import { portableTextComponents } from '../../lib/portableTextComponent'
import Container from 'components/parts/Container'

export default function Textblock(module: iTextblock) {
  const { _type, title, body } = module

  return (
    <section className="textblock px-4 max-w-sm sm:max-w-2xl mx-auto">
      {/* <Container> */}
        <div className="my-6 md:my-12">
          <div className="text-[15px] leading-[24px] tracking-[0.1px] md:text-[22px]">
            <PortableText value={body} components={portableTextComponents} />
          </div>
        </div>
      {/* </Container> */}
    </section>
  )
}

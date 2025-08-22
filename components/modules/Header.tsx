import { iHeader } from 'lib/types'
import Container from 'components/parts/Container'

export default function Header(module: iHeader) {
  const { _type, title, ingress } = module

  return (
    <section className="header">
      <Container>
        <div className="my-6 md:my-12">
          <h1 className="text-4xl md:text-7xl leading-tight md:leading-extratight my-4 whitespace-pre-line font-bold">
            {title}
          </h1>
          <p className="text-xl md:text-3xl ">{ingress}</p>
        </div>
      </Container>
    </section>
  )
}

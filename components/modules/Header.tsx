import { iHeader } from 'lib/types'
import Container from 'components/parts/Container'

export default function Header(module: iHeader) {
  const { _type, title, ingress } = module

  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 whitespace-pre-line text-3xl font-bold md:text-5xl">
            {title}
          </h1>
          <p className="text-gray-700 text-lg md:text-2xl">{ingress}</p>
        </div>
      </Container>
    </section>
  )
}

import Picture from 'components/parts/Picture'
import { iHero } from 'lib/types'
import Container from 'components/parts/Container'

export default function Hero(module: iHero) {
  const { _type, title, picture } = module
  return (
    <section className="bg-orange-50 py-10 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-2 text-xs font-bold uppercase text-yellow-900 md:text-sm">
            {_type}
          </div>
          <h1 className="mb-6 text-2xl font-bold md:text-4xl">{title}</h1>
          <div className="flex justify-center">
            <Picture
              picture={picture}
              width={800}
              alt={title}
              className="h-auto w-full max-w-md rounded-lg object-cover md:max-w-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

import Picture from 'components/parts/Picture'
import { iHero } from 'lib/types'
import Container from 'components/parts/Container'

export default function Hero(module: iHero) {
  const { _type, title, picture } = module
  return (
    <section className="textblock">
      <Container>
        <div className="p-10 my-6 rounded-xl bg-orange-100">
          <div className="text-sm font-bold uppercase text-yellow-900">
            {_type}
          </div>
          <h1 className="text-3xl my-4">{title}</h1>

          <div>
            <Picture
              picture={picture}
              width={1400}
              alt={title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

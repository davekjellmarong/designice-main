import { Header as HeaderComponent } from 'components/Common/Header'
import Container from 'components/parts/Container'
import { iHeader } from 'lib/types'

export default function Header(module: iHeader) {
  const { _type, title, ingress } = module

  return (
    <section className="py-3 md:py-6">
      <Container>
        <div className="mx-auto max-w-[940px] text-left">
          <HeaderComponent title={title} ingress={ingress} />
        </div>
      </Container>
    </section>
  )
}

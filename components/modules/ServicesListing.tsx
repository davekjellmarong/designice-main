import Picture from 'components/parts/Picture'
import { iServicesListing } from 'lib/types'
import Container from 'components/parts/Container'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '../../lib/portableTextComponent'
import { useRouter } from 'next/router'

export default function ServicesListing(module: iServicesListing) {
  const { _type, title, ingress, services, body } = module

  const { locale } = useRouter()

  const servicesLink = locale === 'en' ? 'services' : 'tjenester'

  return (
    <section className="mb-8 lg:mb-16">
      <Container className="max-w-[940px]">
        <h1 className="my-4 whitespace-pre-line text-left text-2xl font-bold leading-tight md:text-4xl md:leading-tight">
          {title}
        </h1>
        <p className="text-gray-700 mb-2 text-left text-base md:text-xl">
          {ingress}
        </p>
        <div className="mt-[30px] grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 md:mt-[55px] md:grid-cols-3 md:gap-x-4">
          {services?.map((service) => (
            <Link
              className="group"
              key={service._id}
              href={`${servicesLink}/${service.slug}`}
            >
              <div>
                <span className="text-sm font-semibold md:text-lg">
                  {service.title}
                </span>
                <div className="mt-[5px] group-hover:opacity-70 lg:mt-[15px]">
                  <Picture
                    picture={service.mainImage}
                    width={1920}
                    height={1080}
                    alt={title}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-left text-base leading-normal md:text-lg">
          <PortableText value={body} components={portableTextComponents} />
        </div>
      </Container>
    </section>
  )
}

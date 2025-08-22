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

  const servicesLink = locale === "en" ? "services" : "tjenester";

  return (
    <section className="mb-16 lg:mb-64">
      <Container className="max-w-[940px]">
        <h1 className="text-[34px] md:text-[70px] leading-tight md:leading-extratight my-4 whitespace-pre-line font-bold">
          {title}
        </h1>
        <p className="text-[15px] md:text-[28px]">{ingress}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-4 gap-y-8 mt-[30px] md:mt-[55px]">
          {services?.map(service => (
            <Link className="group" key={service._id} href={`${servicesLink}/${service.slug}`}>
              <div>
                <span className="text-[10.5px] sm:text-base md:text-lg font-bold">
                  {service.title}
                </span>
                <div className="mt-[5px] lg:mt-[15px] group-hover:opacity-70">
                  <Picture
                    picture={service.mainImage}
                    width={1920}
                    height={1080}
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-[15px] md:text-lg leading-normal mt-16">
          <PortableText value={body} components={portableTextComponents} />
        </div>
      </Container>
    </section>
  )
}

import { PortableText } from '@portabletext/react'
import Container from 'components/parts/Container'
import {
  SiteLogoWhite,
  FacebookLogo,
  InstagramLogo,
} from 'components/parts/Icons'
import { portableTextComponents } from 'lib/portableTextComponent'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdOutlineArrowForward } from 'react-icons/md'

export default function Footer({
  page,
  settings,
}: {
  page: any
  settings: any
}) {
  const { locale } = useRouter()
  const servicesLink = locale === 'en' ? 'services' : 'tjenester'
  const servicesLabel = locale === 'en' ? 'Services' : 'Tjenester'
  const projectsLabel =
    locale === 'en' ? 'Reference projects' : 'Referanseprosjekter'
  const projectsLink = locale === 'en' ? '/projects' : '/referanseprosjekter'
  const contactUsLabel = locale === 'en' ? 'Contact us' : 'Kontakt oss'
  const getInTouchLabel = locale === 'en' ? 'Get in touch' : 'Kom i kontakt'
  const footerLinks =
    locale === 'en' ? settings?.footer?.links : settings?.footer?.links_no

  return (
    <footer className="h-auto w-full bg-black">
      <Container className="mt-10 px-0 text-left">
        <div className="flex flex-col pt-8 lg:flex-row lg:pt-24">
          <div className="order-last flex w-full flex-1 justify-center pt-24 lg:order-first lg:w-1/5 lg:justify-start lg:pt-0">
            <Link href="/" className="hover:underline">
              <SiteLogoWhite />
            </Link>
          </div>
          <div className="w-full pt-8 text-white lg:w-1/5 lg:px-8 lg:pt-0">
            <span className="text-base font-bold">{servicesLabel}</span>
            <hr className="my-5" />
            {settings.services?.map((service) => (
              <Link key={service._id} href={`${servicesLink}/${service.slug}`}>
                <div>
                  <span className="text-base underline-offset-8 hover:underline">
                    {service.title}
                  </span>
                </div>
              </Link>
            ))}
            <div className="pt-6">
              <Link href={projectsLink}>
                <button className="flex flex-row items-center whitespace-nowrap rounded-full bg-white px-4 py-2 text-black lg:hidden">
                  <span className="pr-2">{projectsLabel}</span>
                  <MdOutlineArrowForward />
                </button>
                <button className="hidden flex-row whitespace-nowrap text-left font-bold text-white lg:flex">
                  <span className="pr-2">{'> ' + projectsLabel}</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full pt-8 text-white lg:w-1/5 lg:px-8 lg:pt-0">
            <span className="text-base font-bold">DesignIce</span>
            <hr className="my-5" />
            <div className="text-white">
              {footerLinks.map((link) => (
                <div key={link._key}>
                  {link._type === 'linkInternal' && link.slug && (
                    <Link
                      href={`/${link.slug}`}
                      className="underline-offset-8 hover:underline"
                    >
                      {link.title}
                    </Link>
                  )}
                  {link._type === 'linkExternal' && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-8 hover:underline"
                    >
                      {link.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-8 text-white lg:w-1/5 lg:px-8 lg:pt-0">
            <span className="text-base font-bold">{contactUsLabel}</span>
            <hr className="my-5" />
            {settings?.footer?.body && (
              <div className="text-base">
                <PortableText
                  value={settings.footer.body}
                  components={portableTextComponents}
                />
              </div>
            )}
            {settings?.footer?.telephone && (
              <a href={`tel:${settings?.footer?.telephone}`}>
                <button className="flex flex-row whitespace-nowrap text-left text-white">
                  <span className="pr-2">
                    Tel.: {settings?.footer?.telephone}
                  </span>
                </button>
              </a>
            )}
            {settings?.footer?.mobile && (
              <a href={`tel:${settings?.footer?.mobile}`}>
                <button className="flex flex-row whitespace-nowrap text-left text-white">
                  <span className="pr-2">
                    Mobile: {settings?.footer?.mobile}
                  </span>
                </button>
              </a>
            )}
            <div className="pt-6">
              {settings?.footer?.email && (
                <a href={`mailto:${settings?.footer?.email}`}>
                  <button className="flex flex-row items-center whitespace-nowrap rounded-full bg-white px-4 py-2 text-black lg:mt-4 lg:hidden">
                    <span className="pr-2">{settings?.footer?.email}</span>
                  </button>
                  <button className="hidden flex-row whitespace-nowrap text-left text-white lg:flex">
                    <span className="pr-2">{settings?.footer?.email}</span>
                  </button>
                </a>
              )}
            </div>
          </div>
          <div className="w-full pt-8 text-white lg:w-1/5 lg:px-8 lg:pt-0">
            <span className="text-base font-bold">{getInTouchLabel}</span>
            <hr className="my-5" />
            <a
              href="https://www.facebook.com/DesignIce/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center"
            >
              <FacebookLogo />
              <span className="ml-3">/designice</span>
            </a>
            <a
              href="https://www.instagram.com/designiceofnorway/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex flex-row items-center"
            >
              <InstagramLogo />
              <span className="ml-3">@designiceofnorway</span>
            </a>
          </div>
        </div>
        <div className="pb-24 pt-4 lg:pb-48">
          <span className="flex justify-center text-xs text-white lg:hidden">
            © Copyright 2023 - DesignIce
          </span>
        </div>
      </Container>
    </footer>
  )
}

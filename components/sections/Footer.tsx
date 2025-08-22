import { PortableText } from '@portabletext/react'
import Container from 'components/parts/Container'
import { SiteLogoWhite, FacebookLogo, InstagramLogo } from 'components/parts/Icons'
import { portableTextComponents } from 'lib/portableTextComponent'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdOutlineArrowForward } from "react-icons/md";

export default function Footer({
  page,
  settings,
}: {
  page: any
  settings: any
}) {

  const { locale } = useRouter()
  const servicesLink = locale === "en" ? "services" : "tjenester";
  const servicesLabel = locale === "en" ? "Services" : "Tjenester";
  const projectsLabel = locale === "en" ? "Reference projects" : "Referanseprosjekter";
  const projectsLink = locale === "en" ? "/projects" : "/referanseprosjekter";
  const contactUsLabel = locale === "en" ? "Contact us" : "Kontakt oss";
  const getInTouchLabel = locale === "en" ? "Get in touch" : "Kom i kontakt";
  const footerLinks = locale === "en" ? settings?.footer?.links : settings?.footer?.links_no

  return (
    <footer className='bg-black h-auto w-full'>
      <Container className="text-left mt-10 px-0">
        <div className="pt-8 lg:pt-24 flex flex-col lg:flex-row">
          <div className="flex-1 w-full lg:w-1/5 order-last lg:order-first flex lg:justify-start justify-center lg:pt-0 pt-24">
            <Link href="/" className="hover:underline">
              <SiteLogoWhite />
            </Link>
          </div>
          <div className="pt-8 lg:pt-0 w-full lg:w-1/5 text-white lg:px-8">
            <span className="font-bold text-base">{servicesLabel}</span>
            <hr className="my-5" />
            {settings.services?.map(service => (
              <Link key={service._id} href={`${servicesLink}/${service.slug}`}>
                <div>
                  <span className="text-base hover:underline underline-offset-8">
                    {service.title}
                  </span>
                </div>
              </Link>
            ))}
            <div className="pt-6">
              <Link href={projectsLink}>
                <button className="whitespace-nowrap lg:hidden flex flex-row bg-white text-black rounded-full px-4 py-2 items-center">
                  <span className="pr-2">{projectsLabel}</span>
                  <MdOutlineArrowForward />
                </button>
                <button className="whitespace-nowrap hidden lg:flex flex-row text-white text-left font-bold">
                  <span className="pr-2">{"> " + projectsLabel}</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="pt-8 lg:pt-0 w-full lg:w-1/5 text-white lg:px-8">
            <span className="font-bold text-base">DesignIce</span>
            <hr className="my-5" />
              <div className="text-white">
                {footerLinks.map(link => (
                  <div key={link._key}>
                    {link._type === 'linkInternal' && link.slug && (
                      <Link href={`/${link.slug}`} className="hover:underline underline-offset-8">
                        {link.title}
                      </Link>
                    )}
                    {link._type === 'linkExternal' && (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-8"
                      >
                        {link.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
          </div>
          <div className="pt-8 lg:pt-0 w-full lg:w-1/5 text-white lg:px-8">
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
            {settings?.footer?.telephone && <a href={`tel:${settings?.footer?.telephone}`}>
              <button className="whitespace-nowrap flex flex-row text-white text-left">
                <span className="pr-2">Tel.: {settings?.footer?.telephone}</span>
              </button>
            </a>}
            {settings?.footer?.mobile && <a href={`tel:${settings?.footer?.mobile}`}>
              <button className="whitespace-nowrap flex flex-row text-white text-left">
                <span className="pr-2">Mobile: {settings?.footer?.mobile}</span>
              </button>
            </a>}
            <div className="pt-6">
              {settings?.footer?.email && <a href={`mailto:${settings?.footer?.email}`}>
                <button className="whitespace-nowrap lg:mt-4 lg:hidden flex flex-row bg-white text-black rounded-full px-4 py-2 items-center">
                  <span className="pr-2">{settings?.footer?.email}</span>
                </button>
                <button className="whitespace-nowrap hidden lg:flex flex-row text-white text-left">
                  <span className="pr-2">{settings?.footer?.email}</span>
                </button>
              </a>}
            </div>
          </div>
          <div className="pt-8 lg:pt-0 w-full lg:w-1/5 text-white lg:px-8">
            <span className="font-bold text-base">{getInTouchLabel}</span>
            <hr className="my-5" />
            <a href="https://www.facebook.com/DesignIce/" target="_blank" rel="noreferrer" className="flex flex-row items-center">
              <FacebookLogo />
              <span className="ml-3">
                /designice
              </span>
            </a>
            <a href="https://www.instagram.com/designiceofnorway/" target="_blank" rel="noreferrer" className="flex flex-row items-center mt-4">
              <InstagramLogo />
              <span className="ml-3">
                @designiceofnorway
              </span>
            </a>
          </div>
        </div>
        <div className="pb-24 lg:pb-48 pt-4">
          <span className="lg:hidden text-white text-xs flex justify-center">
            © Copyright 2023 - DesignIce
          </span>
        </div>
      </Container>
    </footer>
  )
}

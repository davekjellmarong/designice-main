import { ChevronDown, MenuBars, XMark } from 'components/parts/Icons'
import { iLink, iLinkGroup, iNavigation, iPage } from 'lib/types'
import Link from 'next/link'
import { useState } from 'react'
import cx from 'classnames'
import LanguageSwitcher from 'components/parts/LanguageSwitcher'
import { languagesEnabled } from 'language.config'
import { useRouter } from 'next/router'

export default function Navigation({
  navigation,
  page,
  darkHeader,
}: {
  navigation?: iNavigation
  page: iPage
  darkHeader: boolean
}) {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const { locale } = useRouter()
  
  const menu = locale === "en" ?  navigation?.mainmenu: navigation?.mainmenu_no;
  const homeLabel = locale === "en" ?  "Home": "Hjem";

  return (
    <nav>
      <button
        onClick={() => setOpenMobileNav(!openMobileNav)}
        className="z-50 flex lg:hidden text-white border border-black rounded-full bg-black p-2 fixed right-3 bottom-8"
      >
        {openMobileNav ? <XMark /> : <MenuBars />}
      </button>
      <ul
        className={cx(
          'absolute p-10 w-2/3 lg:w-auto right-0 transition-transform ease-in-out duration-300 translate-x-0 lg:translate-x-0 hidden lg:p-0 lg:bg-none lg:relative lg:flex',
          { 'translate-x-full': !openMobileNav }, { 'bg-black': darkHeader }
        )}
      >
        {menu?.map((item) => (
          <li
            className={cx('mx-2 lg:ml-0 lg:mr-[37px] relative font-medium text-lg', { 'text-white': darkHeader })}
            key={item._key}
          >
            {item._type === 'linkInternal' && (
              <Link href={`/${item.slug}`} className="hover:underline underline-offset-[15px]">
                {item.title}
              </Link>
            )}
            {item._type === 'linkExternal' && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.title}
              </a>
            )}
            {item._type === 'linkGroup' && GroupLink(item)}
          </li>
        ))}
      </ul>
      <div className="flex-1 pl-4 lg:hidden sm:min-w-[200px] text-right">
        {languagesEnabled && (
          <LanguageSwitcher page={page} darkHeader={darkHeader} />
        )}
      </div>
      {openMobileNav && <div className="z-30 w-[70%] h-[50%] fixed bg-black border rounded-3xl right-8 bottom-12">
        <ul className="mt-8">
          <li className="text-xl mx-4 my-2 lg:ml-0 lg:mr-4 relative font-medium text-white">
            <Link onClick={() => setOpenMobileNav(!openMobileNav)} href="/">
              {homeLabel}
            </Link>
          </li>
          {menu?.map((item) => (
            <li
              className={"text-xl mx-4 my-2 lg:ml-0 lg:mr-4 relative font-medium text-white"}
              key={item._key}
            >
              {item._type === 'linkInternal' && (
                <Link onClick={() => setOpenMobileNav(!openMobileNav)} href={`/${item.slug}`}>
                  {item.title}
                </Link>
              )}
              {item._type === 'linkExternal' && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              )}
              {item._type === 'linkGroup' && GroupLink(item)}
            </li>
          ))}
        </ul>
      </div>}
    </nav>
  )
}

/*
    Simple function to return submenu items
    If you don't need a submenu, you can remove this function
*/
const GroupLink = (item: iLinkGroup) => {
  let elements
  let linkElements

  const [open, setOpen] = useState(false)

  elements = (
    <button onClick={() => setOpen(!open)} className="flex items-center">
      <span className="mr-1">{item.title}</span> <ChevronDown />
    </button>
  )

  if (item.links && open) {
    linkElements = (
      <ul className="lg:absolute lg:px-4 lg:pt-2 lg:pb-5 lg:-ml-2 lg:mt-4 lg:bg-slate-200 lg:whitespace-nowrap lg:min-w-[200px] lg:rounded-xl">
        {item.links.map((link) => (
          <li key={link._key}>
            {link._type === 'linkInternal' && link.slug && (
              <Link
                onClick={() => setOpen(false)}
                href={link.slug}
                className="lg:block lg:py-2 lg:border-b lg:border-indigo-200 lg:hover:border-indigo-500"
              >
                {link.title}
              </Link>
            )}
            {link._type === 'linkExternal' && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      {elements} {linkElements}
    </>
  )
}

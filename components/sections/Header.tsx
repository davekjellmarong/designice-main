import Container from 'components/parts/Container'
import { SiteLogo } from 'components/parts/Icons'
import LanguageSwitcher from 'components/parts/LanguageSwitcher'
import { languagesEnabled } from 'language.config'
import Link from 'next/link'
import Navigation from './Navigation'
import cx from 'classnames'

export default function Header({
  page,
  settings,
}: {
  page: any
  settings: any
}) {
  const darkHeader = page._type == 'home' ? true : false

  return (
    <header
      className={cx('flex items-end lg:items-center justify-center py-4 pt-5 lg:pt-10', {
        'bg-black darkheader': darkHeader,
      })}
    >
      <div className="flex-1 pl-5 lg:pl-16 pr-4">
        <Link href="/" className="hover:underline">
          <SiteLogo />
        </Link>
      </div>
      <div className="container px-5">
        <div className="mx-auto">
          <Navigation
            navigation={settings?.navigation}
            page={page}
            darkHeader={darkHeader}
          />
        </div>
      </div>
      <div className="flex-1 pr-5 lg:pr-16 pl-4 hidden lg:block sm:min-w-[200px] text-right">
        {languagesEnabled && (
          <LanguageSwitcher page={page} darkHeader={darkHeader} />
        )}
      </div>
    </header>
  )
}

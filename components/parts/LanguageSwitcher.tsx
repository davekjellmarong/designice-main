import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { iPage } from 'lib/types'

export default function LanguageSwitcher({
  page,
  darkHeader,
}: {
  page: iPage
  darkHeader: boolean
}) {
  const { locale, asPath } = useRouter()

  const path_no =
    page?.translated?.lang == 'no' && asPath != '/'
      ? '/' + page.translated?.slug
      : '/'
  const path_en =
    page?.translated?.lang == 'en' && asPath != '/'
      ? '/' + page.translated?.slug
      : '/'
  const link_no =
    locale == 'no' ? (
      <span className="underline underline-offset-4">No</span>
    ) : (
      <Link href={path_no} locale="no">
        No
      </Link>
    )
  const link_en =
    locale == 'en' ? (
      <span className="underline underline-offset-4">Eng</span>
    ) : (
      <Link href={path_en} locale="en">
        Eng
      </Link>
    )

  return (
    <div className={cx('px-2 text-[14px] font-normal sm:text-lg', { 'text-white': darkHeader })}>
      {link_no} / {link_en}
    </div>
  )
}

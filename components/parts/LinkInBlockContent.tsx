import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

// this file isn't used so any is good for now
const LinkInBlockContent = ({ link, ...rest }: any) => {
  const { value, children } = link
  const isLink = !!value.url
  const isFile = !!value.file
  const isButton = value.isButton || false

  // External Link
  if (isLink) {
    return (
      <a
        href={value.url}
        target={!value.url.match('^mailto:') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className={cx('underline', { btn: isButton })}
        {...rest}
      >
        {value.title || children}
      </a>
    )
    // Internal Page
  } else if (isFile) {
    return (
      <a
        href={value.file}
        target="_blank"
        rel="noopener noreferrer"
        className={cx('underline', { btn: isButton })}
        {...rest}
      >
        {value.title || children}
      </a>
    )
  } else {
    return (
      <Link
        href={`/${value.page?.slug}`}
        scroll={true}
        className={cx('underline', { btn: isButton })}
        {...rest}
      >
        {value.title || children}
      </Link>
    )
  }
}

export default LinkInBlockContent

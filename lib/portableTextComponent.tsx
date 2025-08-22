import CustomLink from '../components/parts/LinkInBlockContent'
import cx from 'classnames'
import { urlForImage } from './sanity.image'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'

//const YouTubeEmbed = dynamic(() => import('../components/youTubeEmbed'))

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 tracking-min min-h-paragraph">{children}</p>
    ),
    h1: ({ children }) => <h1 className="mb-4 text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-4">{children}</h4>,
    h5: ({ children }) => <h5 className="mb-4">{children}</h5>,
    pretitle: ({ children }) => (
      <div className="text-xl uppercase mb-4 font-bold">{children}</div>
    ),
    small: ({ children }) => (
      <div className="text-small font-medium mb-4">{children}</div>
    ),
    medium: ({ children }) => (
      <div className="text-medium font-medium mb-4">{children}</div>
    ),
    large: ({ children }) => (
      <div className="text-large font-medium mb-4">{children}</div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (value.asset) {
        const { asset, alt, fullWidth } = value
        const { lqip } = asset?.metadata
        const { width, height } = asset?.metadata.dimensions
        return (
          <div className={cx('mb-4 mx-auto')}>
            <Image
              src={urlForImage(asset).width(1000).url()}
              width={width}
              height={height}
              placeholder="blur"
              blurDataURL={lqip}
              className="transition-all duration-700"
              alt={alt || asset.originalFilename}
            />
          </div>
        )
      } else {
        return <></>
      }
    },
    // youtube: ({ value }) => {
    //     return <YouTubeEmbed data={value} />
    // }
  },
  marks: {
    center: ({ children }) => (
      <span className="text-center block">{children}</span>
    ),
    link: ({ children, value }) => {
      return <CustomLink link={{ value, children }} />
    },
  },
}

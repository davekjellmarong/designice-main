import { getImageHeight, getImageWidth, urlForImage } from 'lib/sanity.image'
import { iImg } from '../../lib/types'

/**
 *
 * @param picture - Picture from Sanity
 * @param alt - Alt text
 * @param className - Example with tailwind classes: "w-full h-auto"
 * @param width - Width of image in pixels
 * @param height - Height of image in pixels
 * @param quality - Quality between 1 and 100. Defaults to 80
 * @param loading - Loading attribute. Defaults to 'lazy'
 * @returns html img tag
 * @example
 * <Picture src={picture} alt={title} className="w-full h-auto" />
 * @example
 * <Picture src={picture} alt={title} width={100} />
 * @example
 * <Picture src={picture} alt={title} width={100} height={100} quality={100} loading="eager" />
 */
export default function Picture({
  picture,
  alt,
  className,
  width,
  height,
  quality = 80,
  loading = 'lazy',
}: iImg): JSX.Element {
  const realWidth = getImageWidth(picture)
  const realHeight = getImageHeight(picture)

  let w = width ? width : realWidth
  let h = height ? height : realHeight

  let aspectRatio = w / h
  let css = ''

  // if only width is set, calculate height based on aspect ratio
  if (width && !height) {
    aspectRatio = realWidth / realHeight
    h = Math.round(width / aspectRatio)
  }

  //
  if (height && !width) {
    aspectRatio = realWidth / realHeight 
    w = Math.round(height * aspectRatio)
  }

  // Define aspect-ratio to avoid layout shift
  css = ` aspect-[${w}/${h}]`

  return (
    <img
      src={urlForImage(picture).width(w).height(h).quality(quality).url()}
      height={h}
      width={w}
      loading={loading}
      className={className + css}
      alt={alt}
    />
  )
}

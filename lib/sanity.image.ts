import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from 'lib/sanity.api'
import { iPicture } from './types'

if (!projectId || !dataset) {
  throw new Error('projectid or dataset missing from env')
}

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max')

export const getImageWidth = (image: iPicture) => {
  if (!image) return null

  return image.crop
    ? Math.round(
        image.asset.metadata.dimensions.width *
          (1 - (image.crop.left + image.crop.right))
      )
    : image.asset.metadata.dimensions.width
}

export const getImageHeight = (image: iPicture) => {
  if (!image) return null

  return image.crop
    ? Math.round(
        image.asset.metadata.dimensions.height *
          (1 - (image.crop.top + image.crop.bottom))
      )
    : image.asset.metadata.dimensions.height
}

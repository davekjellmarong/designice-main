import Picture from 'components/parts/Picture'
import { iCarousel, iPicture } from 'lib/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { getImageHeight, getImageWidth, urlForImage } from 'lib/sanity.image'

export default function Carousel(module: iCarousel) {
  const { _type, title, images } = module

  return (
    <section className="carousel swiper-container">
      <div className="mx-auto mt-8 mb-6 max-w-[940px] px-4 text-left sm:pr-8 sm:pl-0">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={'auto'}
          className="relative"
        >
          {images?.map((image: iPicture) => {
            const url = urlForImage(image)
              .height(400)
              .width(600)
              .quality(100)
              .url()

            return (
              <SwiperSlide key={image.asset.assetId}>
                <div className="flex h-[400px] w-full items-center justify-center">
                  <Image
                    src={url}
                    quality={100}
                    alt={image.alt || 'carousel image'}
                    placeholder="blur"
                    blurDataURL={image.asset.metadata.lqip}
                    height={400}
                    width={600}
                    className="h-full w-full rounded-lg object-cover transition-all duration-1000"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

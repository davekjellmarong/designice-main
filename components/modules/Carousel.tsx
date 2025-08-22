import Picture from 'components/parts/Picture'
import { iCarousel, iPicture } from 'lib/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { getImageHeight, getImageWidth, urlForImage } from 'lib/sanity.image'

export default function Carousel(module: iCarousel) {
  const { _type, title, images } = module

  return (
    <section className="carousel swiper-container">
      <div className="ml-4 sm:ml-[68px] lg:ml-[20vw] mt-8 mb-6 md:mt-20 md:mb-12 xl:mt-32 xl:mb-16">
        <Swiper
          spaceBetween={12}
          slidesPerView={'auto'}
          onSwiper={(swiper) => {
            swiper.init()
          }}
        >
          {images?.map((image: iPicture) => {
            const aspectRatio = getImageWidth(image) / getImageHeight(image)
            const url = urlForImage(image).height(400).width(Math.floor(400 * aspectRatio)).quality(100).url()

            return (
              <SwiperSlide key={image.asset.assetId}>
                <Image 
                  src={url}
                  quality={100}
                  alt={image.alt || "carousel image"}
                  placeholder="blur"
                  blurDataURL={image.asset.metadata.lqip}
                  height={400}
                  width={Math.floor((400 * aspectRatio))}
                  className="transition-all duration-1000 object-cover"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

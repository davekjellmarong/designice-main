import { iCta } from 'lib/types'
import Picture from 'components/parts/Picture'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Cta(module: iCta) {
  const { _type, title, picture, links } = module

  const { scrollY } = useScroll()
  return (
    <section className="bg-black py-24 md:py-48">
     <div className="relative mx-auto w-[90%] sm:w-[62%]">
        <motion.div className="invisible absolute top-32 right-[3%] w-[25%] overflow-hidden rounded-full md:visible">
          <Picture picture={picture} width={899} height={899} alt={title} />
        </motion.div>
        <div className="z-4 text-videohero font-bold tracking-[0.56px] text-white mix-blend-exclusion">
          {title}
        </div>
        <div className="flex flex-row pt-4 lg:pt-[50px]">
          {links?.map((link) => (
            <Link
              className="pr-5"
              key={`${link.url ? link.url : `/${link.slug}`}`}
              href={`${link.url ? link.url : `/${link.slug}`}`}
            >
              <div className="sm:text[18px] whitespace-nowrap rounded-full bg-white px-[15px] py-[6px] text-[14px] font-normal tracking-[0.13px] sm:px-[23px] sm:py-[12px] md:font-medium lg:text-[23px]">
                {link.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

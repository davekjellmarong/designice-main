import { iCta } from 'lib/types'
import Picture from 'components/parts/Picture'
import Link from 'next/link'
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from 'react'

export default function Cta(module: iCta) {
  const { _type, title, picture, links } = module

  const { scrollY } = useScroll()

  return (
    <section className="bg-black py-24 md:py-48">
      <div className="relative w-[90%] sm:w-[62%] mx-auto">
        <motion.div
          className="absolute top-32 right-[3%] w-[25%] rounded-full overflow-hidden invisible md:visible"
        >
          <Picture
            picture={picture}
            width={899}
            height={899}
            alt={title}
          />
        </motion.div>
        <div className="z-4 text-videohero tracking-[0.56px] font-bold text-white mix-blend-exclusion">
          {title}
        </div>
        <div className="flex flex-row pt-4 lg:pt-[50px]">
          {links?.map(link => (
            <Link className="pr-5" key={link.slug} href={`/${link.slug}`}>
              <div className="bg-white text-[14px] sm:text[18px] px-[15px] sm:px-[23px] py-[6px] sm:py-[12px] lg:text-[23px] tracking-[0.13px] rounded-full whitespace-nowrap font-normal md:font-medium">
                {link.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

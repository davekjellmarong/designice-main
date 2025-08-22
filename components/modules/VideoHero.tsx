import { iVideoHero } from 'lib/types'
import { motion, Variants } from 'framer-motion'

export default function VideoHero(module: iVideoHero) {
  const { herotext, video_url } = module

  return (
    <section className='min-h-fill pt-10 overflow-hidden bg-black relative'>
      <motion.video 
        className='w-full sm:w-[55%] static sm:absolute'
        autoPlay
        src={video_url} 
        loop
        muted
        playsInline
        variants={videoMotion}
        initial="initial"
        animate="default"
        transition={{
          delay: 1.8,
          duration: 1.1
        }}
      />
      <motion.h1 
        className='text-white relative z-10 text-5xl sm:text-videohero leading-tight font-bold w-[80%] sm:w-[55%] -mt-[17.5%] sm:mt-[21vw] mx-auto sm:ml-[22%] mix-blend-exclusion'
        variants={textMotion}
        initial="initial"
        animate="default"
        transition={{
          delay: 1.8,
          duration: 1.1
        }}
      >
        {herotext}
      </motion.h1>
    </section>
  )
}

const videoMotion: Variants = {
  initial: {
    x: "-100%"
  },
  default: {
    x: 0
  }
}

const textMotion: Variants = {
  initial: {
    x: "150%"
  },
  default: {
    x: 0
  }
}

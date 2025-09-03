import { iPage } from 'lib/types'
import dynamic from 'next/dynamic'

export default function ModuleBuilder({ page }: { page: iPage }) {
  const Textblock = dynamic(() => import('../modules/Textblock'))
  const Hero = dynamic(() => import('../modules/Hero'))
  const VideoHero = dynamic(() => import('../modules/VideoHero'))
  const Header = dynamic(() => import('../modules/Header'))
  const Carousel = dynamic(() => import('../modules/Carousel'))
  const Linktext = dynamic(() => import('../modules/Linktext'))
  const ProjectsListing = dynamic(() => import('../modules/ProjectsListing'))
  const ServicesListing = dynamic(() => import('../modules/ServicesListing'))
  const Cta = dynamic(() => import('../modules/Cta'))
  const FullwidthImage = dynamic(() => import('../modules/FullwidthImage'))
  const Button = dynamic(() => import('../modules/Button'))

  return (
    <>
      {page.modules?.map((module: iPage['modules'], index: number) => {
        const { _type, _key } = module

        switch (_type) {
          case 'textblock':
            return <Textblock key={_key | index} {...module} />
          case 'hero':
            return <Hero key={_key | index} {...module} />
          case 'videohero':
            return <VideoHero key={_key | index} {...module} />
          case 'header':
            return <Header key={_key | index} {...module} />
          case 'carousel':
            return <Carousel key={_key | index} {...module} />
          case 'linktext':
            return <Linktext key={_key | index} {...module} />
          case 'projectsListing':
            return <ProjectsListing key={_key | index} {...module} />
          case 'servicesListing':
            return <ServicesListing key={_key | index} {...module} />
          case 'cta':
            return <Cta key={_key | index} {...module} />
          case 'fullwidthImage':
            return <FullwidthImage key={_key | index} {...module} />
          case 'button':
            return <Button key={_key | index} {...module} />
          default:
            return null
        }
      })}
    </>
  )
}

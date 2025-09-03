import { groq } from 'next-sanity'
import { carousel } from './carousel'
import { header } from './header'
import { hero } from './hero'
import { linktext } from './linktext'
import { textblock } from './textblock'
import { projectsListing } from './projectsListing'
import { servicesListing } from './servicesListing'
import { cta } from './cta'
import { fullwidthImage } from './fullwidthImage'
import { videohero } from './videohero'
import { button } from './button'

export const modulesQuery = groq`
${textblock},
${hero},
${videohero},
${header},
${carousel},
${linktext},
${projectsListing},
${servicesListing},
${fullwidthImage},
${cta},
${button},
`

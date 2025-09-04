import { languagesEnabled } from 'language.config'
import { DocumentDefinition } from 'sanity'
import category from './documents/category'
import errorPage from './documents/errorPage'
import footer from './documents/footer'
import globalSettings from './documents/globalSettings'
import home from './documents/home'
import navigation from './documents/navigation'
import page from './documents/page'
import project from './documents/project'
import service from './documents/service'
import carousel from './modules/carousel'
import projectsListing from './modules/projectsListing'
import servicesListing from './modules/servicesListing'
import cta from './modules/cta'
import fullwidthImage from './modules/fullwidthImage'
import header from './modules/header'
import hero from './modules/hero'
import textblock from './modules/textblock'
import linktext from './modules/linktext'
import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkGroup from './objects/linkGroup'
import linkInternal from './objects/linkInternal'
import seo from './objects/seo'
import videohero from './modules/videohero'
import button from './modules/button'
import contactForm from './modules/contactForm'

// If a document is a singleton, add it to this array
export const SINGLETONS_DOCUMENTS: DocumentDefinition[] = [
  navigation,
  globalSettings,
  errorPage,
  !languagesEnabled && home,
]

// If you want a preview pane for a document type, add it to this array
export const PREVIEW_DOCUMENT_TYPES: DocumentDefinition[] = [
  home,
  page,
  project,
  service,
]

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
export const DOCUMENT_TYPES_IN_STRUCTURE = [
  'home',
  'page',
  'news',
  'navigation',
  'settings',
  'globalSettings',
  'errorPage',
  'project',
  'service',
  'category',
  'footer',
]

// If you want more content types, you can add them to this arrays
export const schemaTypes = [
  // Documents
  home,
  page,
  navigation,
  globalSettings,
  errorPage,
  footer,
  category,
  project,
  service,
  // Objects
  linkInternal,
  linkExternal,
  linkGroup,
  seo,
  blockContent,
  // Modules
  textblock,
  hero,
  videohero,
  header,
  carousel,
  linktext,
  projectsListing,
  servicesListing,
  cta,
  fullwidthImage,
  button,
  contactForm,
]

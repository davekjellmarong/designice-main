import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config'

export default function NextStudioWrapper() {
  return <NextStudio config={config} />
}

import { iFullwidthImage } from 'lib/types'
import Picture from 'components/parts/Picture'

export default function Cta(module: iFullwidthImage) {
  const { _type, title, picture } = module

  return (
    <section className="bg-black">
      <Picture
        picture={picture}
        width={1920}
        height={1080}
        alt={title}
        className='w-full h-auto'
      />
    </section>
  )
}

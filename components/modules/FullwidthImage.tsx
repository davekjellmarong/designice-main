import { iFullwidthImage } from 'lib/types'
import Picture from 'components/parts/Picture'

export default function Cta(module: iFullwidthImage) {
  const { _type, title, picture } = module

  return (
    <section className="flex justify-center bg-black py-8">
      <Picture
        picture={picture}
        width={1200}
        height={675}
        alt={title}
        className="h-auto w-full max-w-4xl rounded-lg object-cover shadow"
      />
    </section>
  )
}

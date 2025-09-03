import Link from 'next/link'
import { motion } from 'framer-motion'

interface iLinkInternal {
  _type: 'linkInternal'
  slug?: string
  title: string
}
interface iLinkExternal {
  _type: 'linkExternal'
  url: string
  title: string
}
type ButtonProps = {
  _type: string
  label: string
  color: 'white' | 'black'
  link: (iLinkInternal | iLinkExternal)[]
}

export default function Button({ label, color, link }: ButtonProps) {
  const colorClass =
    color === 'white' ? 'bg-white text-black' : 'bg-black text-white'

  // Only use the first link (max 1)
  const btnLink = link?.[0]
  let href = '#'
  if (btnLink) {
    href =
      btnLink._type === 'linkExternal'
        ? btnLink.url
        : btnLink.slug
        ? `/${btnLink.slug}`
        : '#'
  }

  return (
    <section className="flex w-full justify-center py-4">
      <motion.div>
        <Link href={href}>
          <button
            className={`rounded-full px-6 py-3 font-medium transition-colors duration-200 ${colorClass}`}
          >
            {label}
          </button>
        </Link>
      </motion.div>
    </section>
  )
}

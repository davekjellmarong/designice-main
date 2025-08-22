import dynamic from 'next/dynamic'
const NextStudioWrapper = dynamic(
  () => import('components/pages/NextStudioWrapper'),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudioWrapper />
}

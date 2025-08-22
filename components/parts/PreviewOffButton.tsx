export default function PreviewOffButton({ slug }: { slug: string }) {
  return (
    <div className="fixed bg-blue-200 px-2 py-1 rounded text-sm left-1/2 -translate-x-1/2">
      <a href={`/api/exit-preview?slug=${slug || '/'}`}>
        Turn off preview mode
      </a>
    </div>
  )
}

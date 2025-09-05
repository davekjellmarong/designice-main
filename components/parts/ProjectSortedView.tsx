import Picture from 'components/parts/Picture'
import Link from 'next/link'
import { iProject } from 'lib/types'
import { useRouter } from 'next/router'

export default function ProjectSortedView({
  sortedProjects,
}: {
  sortedProjects: iProject[]
}) {
  const { locale } = useRouter()
  const projectsLink = locale == 'en' ? '/projects' : '/referanseprosjekter'
  return (
    <div className="mt-12 mb-24 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-24 md:mb-64 md:grid-cols-3">
      {sortedProjects?.map((project: iProject) => (
        <Link
          className="group"
          key={project._id}
          href={`${projectsLink}/${project.slug}`}
        >
          <div>
            <div className="mb-2 group-hover:opacity-70">
              <Picture
                picture={project.mainImage}
                width={1618}
                height={1080}
                alt={project.title}
                className="h-auto w-full object-cover"
              />
            </div>
            <span className="text-[0.8rem] font-normal sm:text-base md:text-xl">
              {project.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

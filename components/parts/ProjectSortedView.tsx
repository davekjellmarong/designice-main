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
    const projectsLink = locale == 'en' ? "/projects" : "/referanseprosjekter"
    return <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mt-12 md:mt-24 mb-24 md:mb-64">
        {sortedProjects?.map((project: iProject) => (
            <Link className="group" key={project._id} href={`${projectsLink}/${project.slug}`}>
                <div>
                    <div className="mb-2 group-hover:opacity-70">
                        <Picture
                            picture={project.mainImage}
                            width={1618}
                            height={1080}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <span className="text-[0.8rem] sm:text-base md:text-xl font-normal">
                        {project.title}
                    </span>
                </div>
            </Link>
        ))}
    </div>
}

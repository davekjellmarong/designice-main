import Picture from 'components/parts/Picture'
import Link from 'next/link'
import { iProject, iCategory } from 'lib/types'
import { MdOutlineArrowForward } from "react-icons/md";

export default function ProjectNormalView({
    filteredProjects,
    isLatestProject,
    locale,
}: {
    filteredProjects: iProject[]
    isLatestProject: Boolean
    locale: String
}) {
    
    const latestProjectLabel = locale === "en" ? "Latest project:" : "Siste prosjekt:";
    const linkToProjectsLabel = locale === "en" ? "See more reference projects" : "Se flere referanseprosjekter";
    const projectLink = locale === "en" ? "projects" : "referanseprosjekter";

    return <>
        {filteredProjects?.map((project: iProject, index: number) => (
            <div key={project._id} className={`flex ${index % 2 == 0 ? 'flex-col items-end lg:items-center lg:flex-row' : 'flex-col lg:flex-row-reverse'} my-12 md:my-24`}>
                <div className={`${index % 2 === 0 ? '' : 'px-8'} flex flex-col text-projecttext leading-tight items-left justify-center w-[80%] lg:w-1/3 lg:px-14`}>
                    {isLatestProject && <span className="text-lg mt-4 lg:mt-0 mb-4 lg:mb-28 font-bold">{latestProjectLabel}</span>}
                    <Link className='mt-4 text-[21] lg:text-[45px] underline underline-offset-8' href={`${projectLink}/${project.slug}`}>
                        {project.title}
                    </Link>
                    <span className="pt-4 lg:pt-8 text-[21] lg:text-[45px]">
                        {project.ingress}
                    </span>
                    <div className="mt-4 lg:mt-12 mb-12 flex text-base lg:flex-row flex-wrap">
                        {isLatestProject && (
                            <Link 
                                href={`${projectLink}`} 
                                className="flex items-center border border-lightgray bg-lightgray hover:text-white hover:border-black hover:bg-black rounded-full text-xs md:text-lg py-3 px-4 md:px-8"
                            >
                                {linkToProjectsLabel}
                            <MdOutlineArrowForward className="ml-2 text-xl" />
                          </Link>
                        )}
                        {/* {!isLatestProject && project && project.categories && project.categories?.map((category: iCategory, index: number) => (
                            <div key={index} className="pr-2 lg:pr-4 pt-2">
                                <button className="cursor-default whitespace-nowrap border border-gray bg-gray text-white rounded-full py-2 px-6 lg:py-2 lg:px-8 text-xs md:text-sm">{locale === "en" ? category.categoryname : category.categoryname_no}</button>
                            </div>
                        ))} */}
                    </div>
                </div>
                <div className="w-[80%] lg:w-2/3 -order-1 lg:order-1">
                    <Link href={`projects/${project.slug}`}>
                        <Picture
                            picture={project.mainImage}
                            width={1200}
                            alt={project.title}
                            className="w-full h-auto"
                        />
                    </Link>
                </div>
            </div>
        ))}
    </>
}



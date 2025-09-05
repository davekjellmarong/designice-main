import { iProjectsListing } from 'lib/types'
import { useState } from 'react'
import Container from 'components/parts/Container'
import ProjectNormalView from 'components/parts/ProjectNormalView'
import ProjectSortedView from 'components/parts/ProjectSortedView'
import { MdArrowDownward } from 'react-icons/md'
import cx from 'classnames'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsListing(module: iProjectsListing) {
  const { _type, title, projects, projectsCount, categories } = module
  const { locale, query } = useRouter()
  const okProjects = projects.map((project) => {
    if (project.categories) {
      project.categories = project.categories.filter(Boolean)
    }
    return project
  })

  let [filteredProjects, setFilteredProjects] = useState(() => {
    return okProjects.slice(0, projectsCount)
  })

  let [filteredCategories, setFilteredCategories] = useState(() => {
    return categories.filter(Boolean).slice(0, 8)
  })

  let [selectedCategory, setSelectedCategory] = useState(() => {
    return query?.category ?? ''
  })

  let [sortedProjects, setSortedProjects] = useState(() => {
    if (query?.category) {
      return okProjects.filter((project) =>
        project?.categories?.some(
          (category) => category._id === query?.category
        )
      )
    }
    return []
  })

  const isLatestProject = projectsCount === 1

  const linkToProjectsLabel =
    locale === 'en' ? 'Reference projects' : 'Referanseprosjekter'
  const categoryShowMoreLabel = locale === 'en' ? 'Show more' : 'Vis flere'
  const sortByLabel = locale === 'en' ? 'Sort by:' : 'Sorter etter:'
  const loadMoreLabel = locale === 'en' ? 'Load more' : 'Last flere'
  const noCategoriesFoundLabel =
    locale === 'en' ? 'No results found.' : 'Ingen resultater funnet.'

  function setSelectedCat(categoryId: string) {
    if (selectedCategory == categoryId) {
      setSelectedCategory('')
      setSortedProjectsByCategory('')
    } else {
      setSelectedCategory(categoryId)
      setSortedProjectsByCategory(categoryId)
    }
  }

  function setSortedProjectsByCategory(categoryId: string) {
    const sorted = projects.filter((project) =>
      project?.categories?.some((category) => category._id === categoryId)
    )
    setSortedProjects(sorted)
  }

  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="mx-auto max-w-[940px] text-left">
          <h2 className="mb-8 text-left text-2xl font-bold md:text-4xl">
            {title}
          </h2>
          {!isLatestProject && (
            <a
              id="referenceId"
              href="#referenceId"
              className="mb-8 flex flex-row items-center justify-center"
            >
              <MdArrowDownward className="mr-4 text-2xl" />
              <span className="text-lg font-medium">{linkToProjectsLabel}</span>
            </a>
          )}
          <div className="mb-8">
            <span className="font-semibold">{sortByLabel}</span>
            <div className="mt-4 flex flex-row overflow-x-auto">
              {filteredCategories &&
                filteredCategories?.map((category) => (
                  <div
                    key={category._id}
                    className="flex justify-center pr-4 pt-2 text-xs lg:text-sm"
                  >
                    <button
                      onClick={() => setSelectedCat(category._id)}
                      className={cx(
                        'whitespace-nowrap rounded-full border border-black py-2 px-4 hover:border-black hover:bg-black hover:text-white lg:py-2 lg:px-6',
                        {
                          'border-black bg-black text-white':
                            selectedCategory == category._id,
                        }
                      )}
                    >
                      {locale === 'en'
                        ? category.categoryname
                        : category.categoryname_no}
                    </button>
                  </div>
                ))}
              {categories?.length > filteredCategories?.length && (
                <div className="flex justify-center pl-4 text-sm">
                  <button
                    onClick={() =>
                      setFilteredCategories(
                        () => (filteredCategories = categories)
                      )
                    }
                    className="pt-2 underline underline-offset-4"
                  >
                    {categoryShowMoreLabel}
                  </button>
                </div>
              )}
            </div>
          </div>
          {selectedCategory && sortedProjects.length > 0 && (
            <ProjectSortedView sortedProjects={sortedProjects} />
          )}
          {selectedCategory && sortedProjects.length === 0 && (
            <span className="mt-8 flex">{noCategoriesFoundLabel}</span>
          )}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <Link
                key={project._id}
                href={`projects/${project.slug}`}
                className="hover:bg-gray-50 focus:bg-gray-100 flex cursor-pointer flex-col items-center rounded-xl bg-white  transition"
                style={{ textDecoration: 'none' }}
              >
                {project.mainImage && (
                  <Image
                    src={project.mainImage.asset.url}
                    alt={project.title}
                    width={640}
                    height={320}
                    className="mb-4 h-80 w-full max-w-lg rounded-lg object-cover"
                  />
                )}
                <h3 className="mb-2 w-full text-left text-xl font-bold md:text-2xl">
                  {project.title}
                </h3>
                {project.ingress && (
                  <p className="text-gray-600 mb-2 w-full text-left text-base md:text-lg">
                    {project.ingress}
                  </p>
                )}
              </Link>
            ))}
          </div>
          {projects?.length > filteredProjects?.length && !isLatestProject && (
            <div className="text-md mt-8 flex justify-center lg:text-lg">
              <button
                onClick={() =>
                  setFilteredProjects(
                    () =>
                      (filteredProjects = projects.slice(
                        0,
                        filteredProjects.length + projectsCount
                      ))
                  )
                }
                className="rounded-full border border-black py-2 px-8"
              >
                {loadMoreLabel}
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

import { iProjectsListing } from 'lib/types'
import { useState } from 'react'
import Container from 'components/parts/Container'
import ProjectNormalView from 'components/parts/ProjectNormalView'
import ProjectSortedView from 'components/parts/ProjectSortedView'
import { MdArrowDownward } from "react-icons/md";
import cx from 'classnames'
import { useRouter } from 'next/router'

export default function ProjectsListing(module: iProjectsListing) {
  const { _type, title, projects, projectsCount, categories } = module
  const { locale, query } = useRouter();
  const okProjects = projects.map(project => {
    if (project.categories) {
      project.categories = project.categories.filter(Boolean);
    }
    return project;
  })

  let [filteredProjects, setFilteredProjects] = useState(() => {
    return okProjects.slice(0, projectsCount);
  });

  let [filteredCategories, setFilteredCategories] = useState(() => {
    return categories.filter(Boolean).slice(0, 8);
  });

  let [selectedCategory, setSelectedCategory] = useState(() => {
    return query?.category ?? ""
  });

  let [sortedProjects, setSortedProjects] = useState(() => {
    if (query?.category) {
      return okProjects.filter(project => project?.categories?.some(category => category._id === query?.category));
    }
    return [];
  });

  const isLatestProject = projectsCount === 1;

  const linkToProjectsLabel = locale === "en" ? "Reference projects" : "Referanseprosjekter";
  const categoryShowMoreLabel = locale === "en" ? "Show more" : "Vis flere";
  const sortByLabel = locale === "en" ? "Sort by:" : "Sorter etter:";
  const loadMoreLabel = locale === "en" ? "Load more" : "Last flere";
  const noCategoriesFoundLabel = locale === "en" ? "No results found." : "Ingen resultater funnet.";

  function setSelectedCat(categoryId: string) {
    if (selectedCategory == categoryId) {
      setSelectedCategory("");
      setSortedProjectsByCategory("");
    } else {
      setSelectedCategory(categoryId);
      setSortedProjectsByCategory(categoryId);
    }
  }

  function setSortedProjectsByCategory(categoryId: string) {
    const sorted = projects.filter(project => project?.categories?.some(category => category._id === categoryId));
    setSortedProjects(sorted);
  }

  return (
    <section>
      {!isLatestProject && <Container>
        <a id="referenceId" href="#referenceId" className="flex flex-row items-center mt-40">
          <MdArrowDownward className="mr-4 text-3xl" />
          <span>{linkToProjectsLabel}</span>
        </a>
        <div className="mt-32">
          <span>{sortByLabel}</span>
          <div className="flex flex-row overflow-x-auto mt-8">
            {filteredCategories && filteredCategories?.map(category => (
              <div key={category._id} className="flex justify-center text-xs lg:text-sm pr-6 pt-2">
                <button onClick={() => setSelectedCat(category._id)}
                  className={cx(
                    'whitespace-nowrap border border-black hover:text-white hover:border-black hover:bg-black rounded-full py-2 px-6 lg:py-2 lg:px-8',
                    { 'text-white border-black bg-black': selectedCategory == category._id }
                  )}>{locale === "en" ? category.categoryname : category.categoryname_no}</button>
              </div>
            ))}
            {categories?.length > filteredCategories?.length &&
            <div className="flex justify-center text-sm pl-8">
              <button onClick={() => setFilteredCategories(() => filteredCategories = categories)} className="underline underline-offset-4 pt-2">{categoryShowMoreLabel}</button>
            </div>}
          </div>
        </div>
        {selectedCategory && sortedProjects.length > 0 && <ProjectSortedView sortedProjects={sortedProjects} />}
        {selectedCategory && sortedProjects.length === 0 && <span className="flex mt-8">{noCategoriesFoundLabel}</span>}
      </Container>}
      <ProjectNormalView filteredProjects={filteredProjects} isLatestProject={isLatestProject} locale={locale} />
      {projects?.length > filteredProjects?.length && !isLatestProject &&
      <div className="flex justify-center text-md lg:text-2xl mt-12 lg:mt-64">
        <button onClick={() => setFilteredProjects(() => filteredProjects = projects.slice(0, filteredProjects.length + projectsCount))} className="border border-black rounded-full py-2 lg:py-4 px-12 lg:px-28">{loadMoreLabel}</button>
      </div>}
    </section>
  )
}

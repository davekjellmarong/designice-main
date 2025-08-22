import { createClient } from 'next-sanity'
import { getAllPagePathsQuery } from 'lib/sanity.queries'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'

const Sitemap = () => {}

export const getServerSideProps = async ({ req, res }) => {
  const baseUrl = {
    development: `https://${req.headers.host}/`,
    production: `https://${req.headers.host}/`,
  }[process.env.NODE_ENV]

  const client = (preview) =>
    createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: preview,
    })

  const pathsPromise = client(false).fetch<any[]>(getAllPagePathsQuery)
  const allPages = await pathsPromise

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page.slug}</loc>
              <lastmod>${page._updatedAt}</lastmod>
              <priority>0.7</priority>
            </url>
          `
        })
        .join('')}
     
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')

  //Fungerer hos Vercel men ikke ut av boksen på egne servere
  //https://nextjs.org/docs/going-to-production#caching
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap

import { GetServerSideProps } from 'next'

const Robots = () => {
  return <div>Ikke naviger hit med Next Link. Bruk standard {`<a>`} tag!</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`Sitemap: https://${req.headers.host}/sitemap.xml    

User-agent: *
${req.headers.host.includes('vercel') ? 'Disallow: /' : 'Allow: /'}
`)
  res.end()

  return { props: {} }
}

export default Robots

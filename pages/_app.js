import '../styles/global.css'
import { GoogleTagManager } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GoogleTagManager gtmId="G-H2B7Y4MCWF" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

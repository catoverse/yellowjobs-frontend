const fetcher = (...args) => fetch(...args).then((res) => res.json())
//const API_URL = 'https://yellowjobs-backend-33ujg.ondigitalocean.app'
const PROD_URL = 'http://143.244.138.0:30015'
const STAGING_URL = 'http://143.244.138.0:30016'

const API_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? PROD_URL : STAGING_URL
export { fetcher, API_URL }

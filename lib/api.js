const fetcher = (...args) => fetch(...args).then((res) => res.json())
//const API_URL = 'https://yellowjobs-backend-33ujg.ondigitalocean.app'
const PROD_URL = 'https://api.yellowjobs.org'
const STAGING_URL =
  'https://staging-yellowjobs-backend-h7ypy.ondigitalocean.app'

const API_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? PROD_URL : STAGING_URL
export { fetcher, API_URL }

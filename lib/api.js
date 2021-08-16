const fetcher = (...args) => fetch(...args).then((res) => res.json())
//const API_URL = 'https://yellowjobs-backend-33ujg.ondigitalocean.app'
const PROD_URL = 'https://api.yellowjobs.org'
const STAGING_URL =
  'https://staging-yellowjobs-backend-h7ypy.ondigitalocean.app'

console.log(
  'Using ',
  process.env.VERCEL_ENV,
  ':',
  process.env.VERCEL_ENV == 'production' ? 'Production' : 'Staging',
  ' API'
)
const API_URL = process.env.VERCEL_ENV == 'production' ? PROD_URL : STAGING_URL
export { fetcher, API_URL }

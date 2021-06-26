const fetcher = (...args) => fetch(...args).then((res) => res.json())
const API_URL = 'https://yellowjobs-backend-33ujg.ondigitalocean.app'

export { fetcher, API_URL }

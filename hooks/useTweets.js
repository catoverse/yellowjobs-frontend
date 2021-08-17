import { useSWRInfinite } from 'swr'
import { API_URL, fetcher } from 'lib/api'

export const useTweets = ({ query }) => {
  // default url
  let url = `${API_URL}/api/tweets/?`

  // when we have role, for searching
  if (query.s) {
    const keyword = query.s.replace(/ /g, '')
    url += `&q=${keyword}`
  }

  // for query params
  if (query.types) {
    const types = query.types.replace(/ /g, '')
    url += `&types=${types}`
  }

  if (query.categories) {
    const categories = query.categories.replace(/ /g, '')
    url += `&categories=${categories}`
  }

  if (query.roles) {
    const roles = query.roles.replace(/ /g, '')
    url += `&roles=${roles}`
  }
  const getKey = (pageIndex, previousPageData) => {
    // not send a request if location or resource are not empty
    // if (!query.s || !query.types || !query.roles) return null

    const l = 42
    const o = 40 * pageIndex

    if (previousPageData && !previousPageData.length) return null

    return `${url}&limit=${l}&offset=${o}`
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)
  return { data, error, size, setSize }
}

import { useSWRInfinite } from 'swr'
import { API_URL, fetcher } from 'lib/api'

export const useTweets = ({ query }) => {
  // default url
  let url = `${API_URL}/api/tweets/?`
  const PAGE_LIMIT = 42

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

    const o = 40 * pageIndex

    if (previousPageData && !previousPageData.length) return null

    return `${url}&limit=${PAGE_LIMIT}&offset=${o}`
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)

  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT)

  return { data, error, size, setSize, isReachingEnd }
}

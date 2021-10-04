import useSWR from 'swr'
import { API_URL, fetcher } from 'lib/api'

export const useSavedTweets = ({ session }) => {
  const { data: savedTweets, error } = useSWR(
    session
      ? `${API_URL}/api/savedtweets/?userId=${session.user.userId}`
      : null,
    fetcher
  )

  return { savedTweets, error }
}

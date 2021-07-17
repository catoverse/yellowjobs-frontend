import Container from './container'
import useSWR from 'swr'
import { Tweet } from 'react-static-tweets'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { API_URL, fetcher } from 'lib/api'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useRouter } from 'next/router'

const fetchTweets = (query) => {
  // default fetching
  if (Object.keys(query).length === 0) return `${API_URL}/api/tweets?limit=80`

  // fetching when we have role, for searching
  if (query.role) {
    const role = query.role.replace(/ /g, '')
    return `${API_URL}/api/tweets?limit=80&${role}`
  }

  // fetching for query params
  if (query.roles) {
    const roles = query.roles.replace(/ /g, '')
    return `${API_URL}/api/tweets?limit=80&role=${roles}`
  }
}

export default function TweetList() {
  const { query } = useRouter()
  const { data, error } = useSWR(fetchTweets(query), fetcher)

  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <Center minH="100vh">
        <Spinner />
      </Center>
    )

  return (
    <Box as="section" my={5}>
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            {data.map((tweetObj) => (
              <Tweet id={tweetObj.tweet_id} ast={tweetObj.tweet_ast} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </Box>
  )
}

import Container from './container'
import useSWR from 'swr'
import { Tweet } from 'react-static-tweets'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { API_URL, fetcher } from 'lib/api'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function TweetList() {
  const { data, error } = useSWR(`${API_URL}/api/tweets`, fetcher)

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

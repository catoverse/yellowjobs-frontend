import Container from './container'
import VerificationButtons from './verification-button'
import useSWR from 'swr'
import { Tweet } from 'react-static-tweets'
import {
  Box,
  Center,
  Spinner,
  Text,
} from '@chakra-ui/react'
import TweetBox from './tweet-box'

import { API_URL, fetcher } from 'lib/api'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useSession } from 'next-auth/client'

export default function BookmarkedTweetList() {
  const [session, loading] = useSession()

  if (session) {
    const { data, error } = useSWR(
      `${API_URL}/api/savedtweets/?userId=${session.user.userId}`,
      fetcher
    )

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
          {data.error ? (
            <Text align="center" fontSize="4xl">
              Your saved tweets will appear here. Currently you dont have any.
            </Text>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1rem">
                {data.map((tweetObj, index) => (
                  <TweetBox session={session} tweetObj={tweetObj} key={index} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </Container>
      </Box>
    )
  } else
    return (
      <Text align="center" fontSize="4xl" pb="10rem" pt="10rem">
        Please login to see saved tweets
      </Text>
    )
}

import Container from './container'
import { Tweet } from 'react-static-tweets'
import { Box, Center, Flex, Spinner, Text } from '@chakra-ui/react'
import TweetBox from './tweet-box'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useSession } from 'next-auth/client'
import { useSavedTweets } from '../hooks/useSavedTweets'

export default function BookmarkedTweetList() {
  const [session, loading] = useSession()
  const { savedTweets, error } = useSavedTweets({ session })

  if (error) return <div>failed to load</div>

  if (session) {
    if (!savedTweets)
      return (
        <Center minH="100vh">
          <Spinner />
        </Center>
      )

    return (
      <Box as="section" my={5}>
        <Container>
          {savedTweets.length === 0 ? (
            <Text align="center" color="gray.500" fontSize="xl" mt="24">
              Your saved tweets will appear here. Currently you do not have any.
            </Text>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1rem">
                {savedTweets.map((tweetObj, index) => (
                  <TweetBox
                    session={session}
                    tweetObj={tweetObj}
                    isTweetSaved={true}
                    key={index}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </Container>
      </Box>
    )
  } else
    return (
      <Text align="center" color="gray.500" fontSize="xl" mt="24">
        Please login to view saved tweets
      </Text>
    )
}

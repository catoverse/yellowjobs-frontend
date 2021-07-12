import Container from './container'
import VerificationButtons from './verification-button'
import useSWR from 'swr'
import { Tweet } from 'react-static-tweets'
import {
  Box, Center, Spinner, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import { API_URL, fetcher } from 'lib/api'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'



export default function UnverifiedTweetList() {
  const { data, error } = useSWR(`${API_URL}/api/tweets/?unverified=true`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <Center minH="100vh">
        <Spinner />
      </Center>
    )


  //   console.log(data)
  return (
    <Box as="section" my={5}>

      <Container>
        <FormControl mb="3rem" id="auth">
          <FormLabel>Auth Token</FormLabel>
          <Input type="password" />
        </FormControl>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            {data.map((tweetObj) => (
              <>
                <Tweet key={tweetObj._id} id={tweetObj.tweet_id} />
                <VerificationButtons key={tweetObj.tweet_id} id={tweetObj.tweet_id} />
              </>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </Box>
  )
}

import Container from './container'
import useSWR from 'swr'
import { Tweet } from 'react-static-tweets'
import { Box, Text, Skeleton } from '@chakra-ui/react'
import { API_URL, fetcher } from 'lib/api'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useRouter } from 'next/router'

const fetchTweets = (query) => {
  // default url
  let url = `${API_URL}/api/tweets?limit=80`

  // when we have role, for searching
  if (query.s) {
    const keyword = query.s.replace(/ /g, '')
    url += `&q=${keyword}`
  }

  // for query params
  if (query.types) {
    const types = query.types.replace(/ /g, '')
    url += `&type=${types}`
  }

  if (query.roles) {
    const roles = query.roles.replace(/ /g, '')
    url += `&role=${roles}`
  }

  return url
}

export default function TweetList() {
  const { query } = useRouter()
  const { data, error } = useSWR(fetchTweets(query), fetcher)

  if (error)
    return (
      <Text align="center" my="4">
        failed to load
      </Text>
    )
  if (!data)
    return (
      <Box as="section" my={5}>
        <Container>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="1.4rem">
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="22rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
              <Skeleton h="20rem" maxW="26rem" w="full" endColor="gray.200" />
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </Box>
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

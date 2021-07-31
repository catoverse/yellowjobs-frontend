import Container from './container'
import useSWR from 'swr'
import { Tweet } from 'react-static-tweets'
import { Box, Text, Skeleton, Button } from '@chakra-ui/react'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTweets } from '../hooks/useTweets'
import { BsChevronDoubleDown } from 'react-icons/bs'

export default function TweetList() {
  const [pageNo, setPageNo] = useState(1)
  const { query } = useRouter()
  const { data, error, size, setSize } = useTweets({ query })
  // const data = _data[0]
  console.log('Length:', data)

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

  const showMore = () => {
    setSize(size + 1)
    console.log(size)
  }

  if (data[0].length > 0)
    return (
      <Box as="section" my={5}>
        <Container>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="1rem">
              {data.map((page, key) => {
                return page.map((tweetObj, index) => (
                  <Tweet
                    id={tweetObj.tweet_id}
                    ast={tweetObj.tweet_ast}
                    key={index}
                  />
                ))
              })}
            </Masonry>
          </ResponsiveMasonry>
          <Button
            colorScheme="yellow"
            isFullWidth="true"
            size="lg"
            mt="2rem"
            rightIcon={<BsChevronDoubleDown />}
            onClick={showMore}
          >
            Load More
          </Button>
        </Container>
      </Box>
    )
  else
    return (
      <Box m="2rem">
        <Text align="center" fontSize="4xl">
          Oops!!
        </Text>
        <Text align="center" fontSize="4xl">
          We don't have any data for your selection yet😢
        </Text>
      </Box>
    )
}

import Container from './container'
import useSWR from 'swr'
import {
  Box,
  IconButton,
  Link,
  Text,
  Skeleton,
  Button,
  Flex,
  HStack,
  useDisclosure,
  useToast,
  Badge,
} from '@chakra-ui/react'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { BsChevronDoubleDown } from 'react-icons/bs'
import TweetBox from './tweet-box'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { useTweets } from '../hooks/useTweets'
import { useSavedTweets } from '../hooks/useSavedTweets'
const uniqBy = require('lodash.uniqby')

export default function TweetList() {
  const [session, loading] = useSession()
  const { savedTweets } = useSavedTweets({ session })
  const [cursorNumber] = useState(1)
  const { query } = useRouter()
  const { data, error, size, setSize, isReachingEnd } = useTweets({ query })

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
  }

  if (data[0].length > 0)
    return (
      <Box as="section" my={5}>
        <Container>
          {query.s === 'Product Manager' ||
          query.s === 'Product Lead' ||
          query.s === 'Product Design' ||
          query.roles === 'Product Manager' ||
          query.roles === 'Product Design' ||
          query.roles === 'Product Lead' ? (
            <Box mb="4" mx="2">
              <Link
                fontWeight="bold"
                color="orange"
                href="https://www.theproductfolks.com/all-product-management-jobs"
                isExternal
              >
                Want more? Check out more curated product jobs here
              </Link>
            </Box>
          ) : null}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="1rem">
              {data.map((cursor, key) => {
                const uniqueTweets = uniqBy(cursor, 'tweet_id')
                return uniqueTweets.map((tweetObj) => {
                  const isTweetSaved =
                    savedTweets &&
                    savedTweets.filter((t) => t.tweet_id === tweetObj.tweet_id)
                      .length > 0
                  return (
                    <TweetBox
                      session={session}
                      tweetObj={tweetObj}
                      isTweetSaved={isTweetSaved}
                      key={tweetObj.tweet_id}
                    />
                  )
                })
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
            disabled={isReachingEnd}
          >
            Load More
          </Button>
        </Container>
      </Box>
    )
  else
    return (
      <Box m="2rem">
        <Text align="center" color="gray.500" fontSize="xl" mt="24">
          Oops!!
          <br />
          We don't have any job postings in the categories you selected yet😢
        </Text>
      </Box>
    )
}

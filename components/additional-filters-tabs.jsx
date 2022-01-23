import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react'

import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AdditionalFiltersTabs({ categories }) {
  const router = useRouter()

  /* Following is a really shorthand code, as there are only 2 additional filters at the moment */
  const selectedTab = router.query.additionalFilters
    ? router.query.additionalFilters === 'web3'
      ? 1
      : 2
    : 0

  const onTabChange = (tabIndex) => {
    const params = router.query
    switch (tabIndex) {
      case 1:
        router.push({
          pathname: '/',
          query: {
            ...params,
            additionalFilters: 'web3',
          },
        })
        break
      case 2:
        router.push({
          pathname: '/',
          query: {
            ...params,
            additionalFilters: 'impact',
          },
        })
        break
      default:
        const params = new URLSearchParams(location.search)
        params.delete('additionalFilters')
        router.replace({
          pathname: '/',
          query: params.toString(),
        })
        break
    }
  }
  return (
    <Container mt="10" maxW="container.xl">
      <Tabs colorScheme="blue" onChange={onTabChange} index={selectedTab}>
        <TabList>
          <Tab
            color="gray.500"
            px="8"
            _selected={{
              fontWeight: '600',
              color: 'blue.400',
              borderBottom: '2px solid',
              borderColor: 'blue.400',
            }}
          >
            All
          </Tab>
          <Tab
            color="gray.500"
            px="8"
            _selected={{
              fontWeight: '600',
              color: 'blue.400',
              borderBottom: '2px solid',
              borderColor: 'blue.400',
            }}
          >
            Web3
          </Tab>
          <Tab
            color="gray.500"
            px="8"
            _selected={{
              fontWeight: '600',
              color: 'blue.400',
              borderBottom: '2px solid',
              borderColor: 'blue.400',
            }}
          >
            Social Impact
          </Tab>
        </TabList>
      </Tabs>
      <JobCategories categories={categories} />
      <TweetList />
    </Container>
  )
}

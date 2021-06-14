import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'

import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as="main" mb="40rem">
      <Navbar />
      <HeroSearch />
      <JobCategories />
      <TweetList />
    </Box>
  )
}

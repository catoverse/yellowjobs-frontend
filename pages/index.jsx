import { Box } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'

export default function Home() {
  return (
    <Box mb="10rem">
      <Navbar />
      <HeroSearch />
      <JobCategories />
      <TweetList />
    </Box>
  )
}

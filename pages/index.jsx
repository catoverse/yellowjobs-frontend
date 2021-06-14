import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'

import { Box  } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as="main">
      <Navbar />
      <HeroSearch />
      <JobCategories />
    </Box>
  )
}

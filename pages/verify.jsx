import { Box, Heading } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import TweetListUnverified from 'components/tweet-list-unverified'
import ScrollToTop from 'components/scroll-to-top'

export default function Home() {
  return (
    <Box mb="10rem">
      <Navbar />
      <Box m="2rem">
        <Heading align="center">Mannual Verification Dashboard</Heading>
      </Box>
      <TweetListUnverified />
      <ScrollToTop />
    </Box>
  )
}

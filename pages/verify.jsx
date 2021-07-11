import { Box } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import TweetListUnverified from 'components/tweet-list-unverified'
import ScrollToTop from 'components/scroll-to-top'

export default function Home() {
  return (
    <Box mb="10rem">
      <Navbar />
      <TweetListUnverified/>
      <ScrollToTop />
    </Box>
  )
}

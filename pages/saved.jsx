import { Box } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import Footer from 'components/footer'
import TweetList from 'components/tweet-list-saved'
import ScrollToTop from 'components/scroll-to-top'

export default function Home({ categories }) {
  return (
    <Box>
      <Navbar />
      <TweetList />
      <ScrollToTop />
      <Footer />
    </Box>
  )
}

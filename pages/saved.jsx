import { Box, Flex } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import Footer from 'components/footer'
import TweetList from 'components/tweet-list-saved'
import ScrollToTop from 'components/scroll-to-top'

export default function Home({ categories }) {
  return (
    <>
      <Navbar />
      <TweetList />
      <ScrollToTop />
      <Footer />
    </>
  )
}

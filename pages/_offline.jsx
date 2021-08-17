import * as React from 'react'
import Navbar from 'components/navbar'
import { Box, Center, Heading } from '@chakra-ui/react'
import Footer from 'components/footer'
const OfflinePage = () => {
  return (
    <>
      <Navbar />
      <Box m="1.5rem">
        <Center>
          <Heading as="h2" size="2xl" p="1rem">
            Seems like you are not connented to the internet :({' '}
          </Heading>
        </Center>
      </Box>
      <Footer />
    </>
  )
}

export default OfflinePage

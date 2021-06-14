import { Box, Center } from '@chakra-ui/react'
import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'

export default function Home() {
  return (
    <Box as="main">
      <Navbar />
      <HeroSearch />
    </Box>
  )
}

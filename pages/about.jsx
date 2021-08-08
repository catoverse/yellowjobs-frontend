import * as React from 'react'
import Navbar from 'components/navbar'
import Profile from 'components/profile'
import { Box, Text, Heading, Center, Image, Button } from '@chakra-ui/react'
import { Flex, Spacer, SimpleGrid, Circle } from '@chakra-ui/react'
import PfIcon from '../components/icons/logo.svg'

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* //about us */}
      <Box bg="#FAFAFA" p="3.5rem">
        <Center h="100px">
          <Heading as="h2" size="2xl" p="1rem">
            About Us
          </Heading>
        </Center>
        <Center h="100px" p={['2rem', '5rem']}>
          <Text fontSize="lgs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </Center>
      </Box>

      {/* //partners */}
      <Box p="3.5rem" bg="#FFFFFF">
        <Center h="100px">
          <Heading as="h2" size="2xl" p="1rem">
            Our Partners
          </Heading>
        </Center>
        <Box p="5rem">
          <SimpleGrid columns={[1, 2, 4]} spacing="5rem">
            <PfIcon />
            <PfIcon />
            <PfIcon />
            <PfIcon />
            <PfIcon />
            <PfIcon />
            <PfIcon />
            <PfIcon />
          </SimpleGrid>
        </Box>
      </Box>

      <Box bg="#FAFAFA" p="3.5rem">
        <Center h="100px">
          <Heading as="h2" size="2xl" p="1rem">
            Our Team
          </Heading>
        </Center>
        <SimpleGrid columns={[1, null, 3]} spacing="5rem">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </SimpleGrid>
      </Box>

      {/* <Footer /> */}
    </>
  )
}

// export const getStaticProps = async () => {
//   const disclaimer = fs.readFileSync(
//     path.resolve(process.cwd(), 'lib/disclaimer.txt'),
//     'utf8'
//   )
//   return { props: { disclaimer } }
// }

export default AboutPage

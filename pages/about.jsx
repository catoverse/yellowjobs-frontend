import * as React from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Profile from 'components/profile'
import { Box, Text, Heading, Center, Image, Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { TeamData } from 'lib/TeamProfile'
const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* //about us */}
      <Box bg="#FAFAFA" p="3rem">
        <Center>
          <Heading as="h2" size="2xl" p="3rem">
            About Us
          </Heading>
        </Center>
        <Center>
          <Text
            fontSize="lgs"
            ml={['1rem', '5rem', '7rem']}
            mr={['1rem', '5rem', '7rem']}
            align="center"
          >
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
      <Box p="3rem" bg="#FFFFFF">
        <Center>
          <Heading as="h2" size="2xl" p="3rem">
            Our Partners
          </Heading>
        </Center>
        <Box pl="2.5rem" pr="2.5rem">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="3rem">
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>{' '}
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>{' '}
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>
            <Center>
              <Image src="partners/pfolk.svg" />
            </Center>
          </SimpleGrid>
        </Box>
      </Box>

      {/* //collaborators */}
      <Box bg="#FAFAFA" p="3rem">
        <Center>
          <Heading as="h2" size="2xl" p="3rem">
            Our Team
          </Heading>
        </Center>
        <SimpleGrid columns={[1, 2, 3]} spacing="30px">
          {TeamData.map((member) => {
            return (
              <Profile
                name={member.name}
                profileLink={member.profileLink}
                imageLink={member.imageLink}
                socialType={member.socialType}
              />
            )
          })}
        </SimpleGrid>
      </Box>

      <Footer />
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

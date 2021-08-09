import * as React from 'react'
import Navbar from 'components/navbar'
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
            YellowJobs is an open source project by NavGurukul Labs. NavGurukul
            Labs is a venture studio working on high impact open source
            experiments in the education and future of work space.
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
          <SimpleGrid columns={[1, null, 2]} spacing="3rem">
            <Center>
              <Image src="partners/navgurukul.png" w="sm" />
            </Center>
            <Center>
              <Image src="partners/pfolk.png" />
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

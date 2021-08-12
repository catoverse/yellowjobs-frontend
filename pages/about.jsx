import * as React from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Profile from 'components/profile'
import { Box, Container, Text, Heading, Center, Image, Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { TeamData } from 'lib/TeamProfile'

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* //about us */}
      <Container bg="#FAFAFA" maxW="container.xl" px={{base: '6', '2xl': '0'}} mb="16" centerContent>
        <Center>
          <Heading as="h2" size="2xl" pt="3rem" pb="3rem">
            About Us
          </Heading>
        </Center>
        <Center maxW={{base: '100%', md:'75%'}}>
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
      </Container>

      {/* //partners */}
      <Container bg="#FFFFFF" maxW="container.xl" px={{base: '6', '2xl': '0'}} mb="8">
        <Center>
          <Heading as="h2" size="2xl" pt="3rem" pb="3rem">
            Our Partners
          </Heading>
        </Center>
        <Box px="5" pb="10">
          <SimpleGrid columns={[1, null, 2]}>
            <Center>
              <Image src="partners/pfolk1.png" w="50%" />
            </Center>
            <Center>
              <Image src="partners/navgurukul.png" w="50%" />
            </Center>
          </SimpleGrid>
        </Box>
      </Container>

      {/* //collaborators */}
      <Container bg="#FAFAFA" maxW="container.xl" px={{base: '6', '2xl': '0'}} mb="8">
        <Center>
          <Heading as="h2" size="2xl" p="3rem">
            Our Team
          </Heading>
        </Center>
        <SimpleGrid columns={[1, 2, 3]} spacing="30px">
          {TeamData.map((member, index) => {
            return (
              <Profile
                name={member.name}
                profileLink={member.profileLink}
                imageLink={member.imageLink}
                socialType={member.socialType}
                key={index}
              />
            )
          })}
        </SimpleGrid>
      </Container>

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

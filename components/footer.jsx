import {
  Box,
  Container,
  Divider,
  Link,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react'

import NextLink from 'next/link'
import YellowJobsLogo from './icons/logo.svg'
import GitHubIcon from './icons/github.svg'
import TwitterIcon from './icons/twitter.svg'
import LinkedInIcon from './icons/linkedin.svg'
import VercelLogo from './icons/vercel.svg'
import DOLogo from './icons/DO.svg'
export default function Footer() {
  return (
    <Box>
      <Container maxW="container.full" centerContent bg="white">
        <Container maxW="container.xl">
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            py={{ base: '2', md: '4' }}
            justify="space-between"
            w="100%"
          >
            <Flex
              align="center"
              flexDirection={{ base: 'column', md: 'row' }}
              py="4"
            >
              <NextLink href="/" aria-label="YellowJobs Logo">
                <Link>
                  <YellowJobsLogo />
                </Link>
              </NextLink>
              <Spacer />
              <Flex p="4" w="full" justify="space-between">
                <Box _hover={{ color: 'gray.500' }} mx="5">
                  <NextLink href="/about" aria-label="About Us">
                    About Us
                  </NextLink>
                </Box>
                <Spacer />
                <Box _hover={{ color: 'gray.500' }} mx="5">
                  <NextLink href="/disclaimer" aria-label="Disclaimer">
                    Disclaimer
                  </NextLink>
                </Box>
              </Flex>
            </Flex>
            <Divider display={{ base: 'block', md: 'none' }} />
            <Flex
              align="center"
              flexDirection={{ base: 'column', md: 'row' }}
              py="4"
            >
              {/*<Link href="mailto:hello@yellowjobs.org" fontWeight="bold">
              hello@yellowjobs.org
            </Link>
            <Spacer />*/}
              <Flex w="full" justify="space-between">
                <Link mx="5" href="https://github.com/catoverse/" isExternal>
                  <GitHubIcon />
                </Link>
                <Spacer />
                <Link
                  mx="5"
                  href="https://twitter.com/yellowjobsorg"
                  isExternal
                >
                  <TwitterIcon />
                </Link>
                <Spacer />
                <Link
                  mx="5"
                  href="https://www.linkedin.com/company/navgurukul/"
                  isExternal
                >
                  <LinkedInIcon />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Container>
      <Container maxW="container.xl" centerContent>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          align="center"
          w="100%"
        >
          <Text py={{ base: '4', md: '6' }} fontSize="xs">
            Made with ❤ in India️
          </Text>
          <Spacer />
          <Divider display={{ base: 'block', md: 'none' }} />
          <Spacer />

          <Flex align="center" py="2">
            Powered by
            <Link
              href="https://vercel.com/?utm_source=Yellowjobs&utm_campaign=oss"
              isExternal
            >
              <Box ml="2">
                <VercelLogo />
              </Box>
            </Link>
            &nbsp; &
            <Link href="https://digitalocean.com" isExternal>
              <Box ml="2">
                <DOLogo />
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

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

export default function Footer() {
  return (
    <Box>
      <Container maxW="container.xl" centerContent bg="white">
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
            px={{ base: '8', md: '20' }}
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
            px={{ base: '8', md: '20' }}
          >
            {/*<Link href="mailto:hello@yellowjobs.org" fontWeight="bold">
            hello@yellowjobs.org
          </Link>
          <Spacer />*/}
            <Flex p="4" w="full" justify="space-between">
              <Link mx="5" href="https://github.com/catoverse/">
                <GitHubIcon />
              </Link>
              <Spacer />
              <Link mx="5" href="https://twitter.com/yellowjobsorg">
                <TwitterIcon />
              </Link>
              <Spacer />
              <Link mx="5" href="https://www.linkedin.com/company/navgurukul/">
                <LinkedInIcon />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Container maxW="container.xl" centerContent>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          align="center"
          w="100%"
        >
          <Text
            px={{ base: '8', md: '20' }}
            py={{ base: '4', md: '6' }}
            fontSize="xs"
          >
            Made with ❤ &nbsp; in India️
          </Text>
          <Spacer />
          <Divider display={{ base: 'block', md: 'none' }} />
          <Spacer />
          <Link
            href="https://vercel.com/?utm_source=Yellowjobs&utm_campaign=oss"
            isExternal
            px={{ base: '8', md: '20' }}
            py={{ base: '4', md: '6' }}
          >
            <Flex align="center">
              Powered by{' '}
              <Box ml="2">
                <VercelLogo />
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

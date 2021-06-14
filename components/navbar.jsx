import { HStack, Link, Button, Spacer } from '@chakra-ui/react'

import NextLink from 'next/link'
import YellowJobsLogo from 'assets/logo.svg'

export default function Navbar() {
  return (
    <HStack as="nav" h={20} maxW="container.xl" spacing="10" mx="auto" py={5}>
      <NextLink href="/">
        <Link>
          <YellowJobsLogo />
        </Link>
      </NextLink>
      <Spacer />
      <Link>About Us</Link>
      <Link>Disclaimer</Link>
      <Button variant="outline" colorScheme="blue">
        Browse all jobs
      </Button>
    </HStack>
  )
}

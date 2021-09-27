import {
  Box,
  Flex,
  VStack,
  HStack,
  Image,
  Link,
  Button,
  CloseButton,
  IconButton,
  chakra,
  useDisclosure,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'

import NextLink from 'next/link'
import { useRef, useState, useEffect } from 'react'

import Container from 'components/container'
import NavbarAuth from 'components/navbar-auth'
import YellowJobsLogo from './icons/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { useViewportScroll } from 'framer-motion'

export default function Headers() {
  const mobileNav = useDisclosure()

  const ref = useRef()
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {}

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bg="white"
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      pb={4}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        pos="relative"
        top="4"
        right="4"
        aria-label="Close menu"
        justifySelf="self-start"
        alignSelf="flex-end"
        onClick={mobileNav.onClose}
      />
      <Button
        w="full"
        variant="ghost"
        _hover={{ bg: 'white', textDecoration: 'underline' }}
      >
        <Link href="/about">About Us</Link>
      </Button>
      <Button
        w="full"
        variant="ghost"
        _hover={{ bg: 'white', textDecoration: 'underline' }}
        onClick={() => window.open('https://www.buymeacoffee.com/Navgurukul')}
        pb="4"
      >
        <Image w="32" src="/buy-me-a-coffee.png" />
      </Button>
      <NavbarAuth isMobileView="true" />
    </VStack>
  )

  return (
    <Box as="nav" pos="sticky" top="0" zIndex="sticky">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        borderTop="6px solid"
        borderTopColor="yellow.400"
        w="full"
        py="4"
        overflowY="hidden"
        bg="white"
      >
        <Container>
          <Flex w="full" h="full" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/" aria-label="YellowJobs Logo">
                <Link>
                  <HStack>
                    <YellowJobsLogo />
                    {process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? (
                      ''
                    ) : (
                      <Text>Staging</Text>
                    )}
                  </HStack>
                </Link>
              </NextLink>
            </Flex>

            <HStack
              spacing={4}
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              display={{ base: 'none', md: 'flex' }}
            >
              <Box _hover={{ color: 'gray.500' }}>
                <NextLink href="/about">About Us</NextLink>
              </Box>
              <Button
                variant="ghost"
                _hover={{ bg: 'white', textDecoration: 'underline' }}
                onClick={() => window.open('https://www.buymeacoffee.com/Navgurukul')}
              >
                <Image w="32" src="/buy-me-a-coffee.png" />
              </Button>

              <NavbarAuth />
            </HStack>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
          {MobileNavContent}
        </Container>
      </chakra.header>
    </Box>
  )
}

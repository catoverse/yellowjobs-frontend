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
  SimpleGrid,
  useDisclosure,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Container from 'components/container'
import NavbarAuth from 'components/navbar-auth'
import YellowJobsLogo from './icons/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { useViewportScroll } from 'framer-motion'

export default function Headers() {
  const mobileNav = useDisclosure()
  const router = useRouter()

  const [y, setY] = useState(0)

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  const MobileNavContent = (
    <VStack
      pos="absolute"
      left={0}
      right={0}
      bg="white"
      flexDirection="column"
      rounded="sm"
      shadow={y > 0 || mobileNav.isOpen ? 'lg' : 'none'}
      zIndex="-10"
      transform={mobileNav.isOpen ? 'translateY(5%)' : 'translateY(-95%)'}
      transition="transform .3s ease"
    >
      <Button
        py={{ base: '6', md: '2' }}
        fontWeight="normal"
        w="full"
        variant="ghost"
        onClick={() => router.push('/about')}
        _hover={{ bg: 'none', color: 'gray.500' }}
      >
        About Us
      </Button>
      <Button
        w="full"
        variant="ghost"
        onClick={() => window.open('https://www.buymeacoffee.com/yellowjobs')}
        py="4"
      >
        <Image w="32" src="/buy-me-a-coffee.svg" />
      </Button>
      <NavbarAuth isMobileView="true" />
    </VStack>
  )

  return (
    <Box as="nav" pos="sticky" top="0" zIndex="sticky">
      <chakra.header w="full" py="4" overflowY="hidden" bg="white">
        <Container>
          <SimpleGrid justifyItems="stretch" columns={{ base: '1', md: '3' }}>
            <HStack
              spacing={4}
              align="center"
              justifySelf="start"
              display={{ base: 'none', md: 'flex' }}
            >
              <Box _hover={{ color: 'gray.500' }}>
                <a target="_blank" href="https://feedback.yellowjobs.org">
                  Feedback
                </a>
              </Box>
              <Button
                variant="ghost"
                _hover={{ bg: 'white', textDecoration: 'underline' }}
                onClick={() =>
                  window.open('https://www.buymeacoffee.com/yellowjobs')
                }
              >
                <Image w="32" src="/buy-me-a-coffee.svg" />
              </Button>
            </HStack>

            <Flex align="center" justifySelf="center">
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

            <Flex display={{ base: 'none', md: 'flex' }} justifySelf="end">
              <NavbarAuth />
            </Flex>

            {mobileNav.isOpen ? (
              <CloseButton
                position="fixed"
                pt="2"
                right="3"
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
            ) : (
              <IconButton
                position="fixed"
                right="2"
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            )}
          </SimpleGrid>
          {MobileNavContent}
        </Container>
      </chakra.header>
    </Box>
  )
}

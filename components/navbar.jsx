import {
  Box,
  Flex,
  VStack,
  HStack,
  Link,
  Button,
  CloseButton,
  IconButton,
  chakra,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'

import { useRef, useState, useEffect } from 'react'

import YellowJobsLogo from 'assets/logo.svg'
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
      p={2}
      pb={4}
      spacing={2}
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
        About
      </Button>
      <Button
        w="full"
        variant="ghost"
        _hover={{ bg: 'white', textDecoration: 'underline' }}
      >
        Disclaimer
      </Button>
      <Button variant="outline" colorScheme="blue">
        Browse all jobs
      </Button>
    </VStack>
  )

  return (
    <Box as="nav" pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        borderTop="6px solid"
        borderTopColor="yellow.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/" aria-label="YellowJobs Logo">
                <HStack>
                  <YellowJobsLogo />
                </HStack>
              </Link>
            </Flex>

            <HStack
              spacing={6}
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              display={{ base: 'none', md: 'flex' }}
            >
              <Link>About Us</Link>
              <Link>Disclaimer</Link>
              <Button variant="outline" colorScheme="blue">
                Browse all jobs
              </Button>
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
        </chakra.div>
      </chakra.header>
    </Box>
  )
}

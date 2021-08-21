import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
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
  Text,
  Image,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

import LoginModal from './login-modal'

export default function NavbarAuth({ isMobileView }) {
  const [session, loading] = useSession()

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : session ? (
        <>
          <Box _hover={{ color: 'gray.500' }}>
            <NextLink href="/saved">Pinned</NextLink>
          </Box>
          <Popover>
            <PopoverTrigger>
              <Image
                boxSize="40px"
                borderRadius="full"
                src={session.user.image}
                alt="dp"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Text>Signed in as {session.user.name}</Text>
              </PopoverHeader>
              <PopoverBody>
                {' '}
                <Button colorScheme="red" onClick={() => signOut()}>
                  Logout
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* <Text>Hey {session.user.name.split(' ').slice(0, -1).join(' ')}</Text> */}
        </>
      ) : (
        <Button colorScheme="blue" onClick={onOpen}>
          Login
        </Button>
      )}

      {isOpen && !session ? (
        <LoginModal isOpen={isOpen} onClose={onClose} />
      ) : null}
    </>
  )
}

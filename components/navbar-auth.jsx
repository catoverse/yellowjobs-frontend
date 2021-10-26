import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import {
  Box,
  Stack,
  Divider,
  Button,
  chakra,
  useDisclosure,
  Text,
  Image,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react'

import LoginModal from './login-modal'

export default function NavbarAuth({ isMobileView }) {
  const [session, loading] = useSession()
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box w="full">
      {!session ? (
        <Box w="full">
          <Divider display={{ base: 'block', md: 'none' }} />
          <Button
            py={{ base: '8', md: '2' }}
            fontWeight="normal"
            w="full"
            variant="ghost"
            isLoading={loading}
            onClick={onOpen}
            _hover={{ bg: 'none', color: 'gray.500' }}
          >
            Login
          </Button>
        </Box>
      ) : (
        <Stack align="center" direction={{ base: 'column', md: 'row' }}>
          <Button
            w="full"
            color="blue.400"
            variant="ghost"
            onClick={() => router.push('/saved')}
            _hover={{ bg: 'none', color: 'blue.200' }}
          >
            Saved tweets
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button
                px="0"
                rounded="full"
                _hover={{ opacity: '80%' }}
                display={{ base: 'none', md: 'block' }}
              >
                <Image
                  boxSize="10"
                  borderRadius="full"
                  src={session.user.image}
                  alt="Profile Picture"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="auto">
              <PopoverHeader>
                <Text align="center">Signed in as {session.user.name}</Text>
              </PopoverHeader>
              <PopoverBody p="0">
                <Button
                  variant="ghost"
                  colorScheme="red"
                  w="full"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Box w="full" display={{ base: 'block', md: 'none' }}>
            <Divider />
            <Button
              py="8"
              fontWeight="normal"
              w="full"
              colorScheme="red"
              variant="ghost"
              onClick={() => signOut()}
            >
              Log out
            </Button>
          </Box>
          {/* <Text>Hey {session.user.name.split(' ').slice(0, -1).join(' ')}</Text> */}
        </Stack>
      )}

      {isOpen && !session ? (
        <LoginModal isOpen={isOpen} onClose={onClose} />
      ) : null}
    </Box>
  )
}

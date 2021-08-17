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
} from '@chakra-ui/react'
import NewWindow from 'react-new-window'

export default function NavbarAuth({ isMobileView }) {
  const [session, loading] = useSession()
  const [popup, setPopUp] = useState(false)

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : session ? (
        <>
          <Text>Hey {session.user.name.split(' ').slice(0, -1).join(' ')}</Text>
          <Button colorScheme="red" onClick={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <Button colorScheme="blue" onClick={() => setPopUp(true)}>
          Login
        </Button>
      )}

      {popup && !session ? (
        <NewWindow url="/sign-in" onUnload={() => setPopUp(false)} />
      ) : null}
    </>
  )
}

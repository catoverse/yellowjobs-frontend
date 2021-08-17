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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import NewWindow from 'react-new-window'
import GoogleButton from 'react-google-button'
export default function NavbarAuth({ isMobileView }) {
  const [session, loading] = useSession()
  const [popup, setPopUp] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Button colorScheme="blue" onClick={onOpen}>
          Login
        </Button>
      )}

      {/* {popup && !session ? (
        <NewWindow url="/sign-in" onUnload={() => setPopUp(false)} />
      ) : null} */}

      {isOpen && !session ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You can save tweets after login
              <GoogleButton
                onClick={() => {
                  signIn('google')
                }}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  )
}

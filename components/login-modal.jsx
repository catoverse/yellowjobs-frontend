import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function LoginModal({ isOpen, onClose }) {
  const [session, loading] = useSession()

  return isOpen && !session ? (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Center>
            <Image src="welcome-to-yellowjobs.png" />
          </Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p="2rem">
          <Text pb="0.5rem">Log in using</Text>
          <Image
            w="100%"
            src="/google-button.png"
            onClick={() => {
              signIn('google')
            }}
          />
          <Heading pt="2rem" as="h5" size="sm">
            Why log in is needed you ask?
          </Heading>
          <Text>You can bookmark tweets after you log in. 😎</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : null
}

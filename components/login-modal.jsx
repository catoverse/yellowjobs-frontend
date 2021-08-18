import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
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
        <ModalHeader>Welcome to YellowJobs</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          You can login using
          <GoogleButton
            onClick={() => {
              signIn('google')
            }}
          />
          <Text>
            Why log in is needed you ask? You can bookmark tweets after you log
            in.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : null
}

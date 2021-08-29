import {
  Button,
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
import GoogleIcon from './icons/google.svg'
import { useState } from 'react'
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
          <Button
            w="100%"
            variant="outline"
            leftIcon={<GoogleIcon />}
            onClick={() => signIn('google')}
          >
            Google
          </Button>
          <Heading pt="2rem" as="h5" size="sm">
            Why log in is needed you ask?
          </Heading>
          <Text>You can bookmark tweets after you log in. 😎</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : null
}

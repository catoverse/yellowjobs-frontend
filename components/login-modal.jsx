import {
  Box,
  Button,
  Divider,
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

export default function LoginModal({ isOpen, onClose, action }) {
  const [session, loading] = useSession()

  const headerMessage = () => {
    if (action === 'saveTweet') {
      return <Image src="login-modal-header-save-tweet.png" />
    }
    return <Image src="welcome-to-yellowjobs.png" />
  }

  return isOpen && !session ? (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={{base: 'false', md: 'true'}} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent mt={{base: 'auto', md: '0'}} mb="0">
        <ModalHeader>
          <Center>{headerMessage()}</Center>
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody p="0">
          <Box p="8">
            <Text pb="0.5rem">Log in using</Text>
            <Button
              w="100%"
              variant="outline"
              leftIcon={<GoogleIcon />}
              onClick={() => signIn('google')}
            >
              Google
            </Button>
          </Box>
          {action ? null : (
            <Box bg="gray.50" p="8" rounded="md">
              <Heading as="h5" size="sm">
                Why log in is needed you ask?
              </Heading>
              <Text>You can bookmark tweets after you log in. 😎</Text>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : null
}

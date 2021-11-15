import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Heading,
  extendTheme,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Center,
} from '@chakra-ui/react'
import { ThemedText, Emphasis } from './themed-text.jsx'

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          top: { base: 0, md: 64 },
        },
        overlay: {
          bgColor: [
            'blackAlpha.600',
            'blackAlpha.600',
            'blackAlpha.600',
            'blackAlpha.600',
            'blackAlpha.600',
            'blackAlpha.600',
          ],
          bg: {
            base: "no-repeat 90% 0% url('assets/arrow-mobile.png')",
            md: "no-repeat 84% 0% url('assets/arrow-desktop.png')",
            xl: "no-repeat 85% 0% url('assets/arrow-desktop.png')",
            '2xl': "no-repeat 76% 0% url('assets/arrow-desktop.png')",
          },
          top: '16',
          position: 'fixed',
        },
      }),
    },
  },
})

export default function SaveWalkthroughModal({ isOpen, onClose }) {
  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent mt={{ base: 'auto', md: '0' }} mb="0">
          <ModalHeader>
            <Center>
              <ThemedText>
                You can view your&nbsp;<Emphasis>saved tweets</Emphasis>
                &nbsp;here&nbsp;👀
              </ThemedText>
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody p="0">
            <Box p="8">
              <Button w="100%" bg="#FAFAFA" variant="outline" onClick={onClose}>
                Go Back
              </Button>
            </Box>
            <Box bg="#FAFAFA" p="8" rounded="md">
              <Heading as="h5" size="sm">
                How long do we save your tweets?
              </Heading>
              <Flex flexDirection="row">
                <Text>We save your tweets for 60 days!</Text>
                &nbsp;
                {/*hushed-emoji*/}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47722 20 0 15.5228 0 10C0 4.47722 4.47722 0 10 0C15.5228 0 20 4.47722 20 10Z"
                    fill="#FFCC4D"
                  />
                  <path
                    d="M9.99967 16.1111C10.9201 16.1111 11.6663 15.2406 11.6663 14.1667C11.6663 13.0928 10.9201 12.2222 9.99967 12.2222C9.0792 12.2222 8.33301 13.0928 8.33301 14.1667C8.33301 15.2406 9.0792 16.1111 9.99967 16.1111Z"
                    fill="#664500"
                  />
                  <path
                    d="M17.2232 6.1111C17.0537 6.1111 16.8876 6.03444 16.7782 5.88888C15.3115 3.93277 13.411 3.88999 13.3304 3.88888C13.0248 3.88555 12.7782 3.63555 12.7799 3.33055C12.7815 3.02444 13.0282 2.77777 13.3337 2.77777C13.436 2.77777 15.8543 2.80555 17.6671 5.22222C17.8515 5.46777 17.8015 5.8161 17.556 5.99999C17.456 6.07499 17.3393 6.1111 17.2232 6.1111ZM2.77763 6.1111C2.66207 6.1111 2.54485 6.07499 2.44485 5.99999C2.1993 5.8161 2.14985 5.46777 2.33374 5.22222C4.14596 2.80555 6.56485 2.77777 6.66707 2.77777C6.97374 2.77777 7.22263 3.02666 7.22263 3.33333C7.22263 3.63944 6.97541 3.88777 6.66929 3.88888C6.58318 3.88999 4.68707 3.93666 3.22263 5.88888C3.11374 6.03444 2.94652 6.1111 2.77763 6.1111Z"
                    fill="#664500"
                  />
                  <path
                    d="M6.66623 9.99997C7.43329 9.99997 8.05512 9.12942 8.05512 8.05553C8.05512 6.98164 7.43329 6.11108 6.66623 6.11108C5.89917 6.11108 5.27734 6.98164 5.27734 8.05553C5.27734 9.12942 5.89917 9.99997 6.66623 9.99997Z"
                    fill="#664500"
                  />
                  <path
                    d="M13.3332 9.99997C14.1003 9.99997 14.7221 9.12942 14.7221 8.05553C14.7221 6.98164 14.1003 6.11108 13.3332 6.11108C12.5662 6.11108 11.9443 6.98164 11.9443 8.05553C11.9443 9.12942 12.5662 9.99997 13.3332 9.99997Z"
                    fill="#664500"
                  />
                </svg>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}

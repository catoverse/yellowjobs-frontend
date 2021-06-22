import {
  Box,
  HStack,
  Text,
  Button,
  CloseButton,
  InputGroup,
  Input,
  InputRightElement,
  SimpleGrid,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { useModal } from 'contexts/modal-context'
import { subCategories } from 'lib/design-subcategories'

export default function CategoriesMenu() {
  const { isOpen, onClose } = useModal()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="4xl">
        <ModalHeader color="gray.600">
          <HStack justify="space-between">
            <Text>Options available in Design</Text>
            <CloseButton onClick={onClose} />
          </HStack>
        </ModalHeader>
        <Box as="hr" />

        <ModalBody>
          <InputGroup maxW="xs" w="100%" mt="5">
            <Input
              variant="flushed"
              fontSize="sm"
              placeholder="search for design categories..."
            />
            <InputRightElement children={<FiSearch />} />
          </InputGroup>

          {/* grid */}
          <SimpleGrid
            columns="4"
            spacing="6"
            mt="10"
            maxH="3xs"
            overflowY="auto"
            className="custom-scrollbar"
          >
            {subCategories.map((category) => (
              <Checkbox>{category}</Checkbox>
            ))}
          </SimpleGrid>

          <Box as="hr" mt="10" />
          <HStack mt="5" justify="flex-end">
            <Button variant="ghost" color="gray.500">
              Clear filters
            </Button>
            <Button colorScheme="blue">Apply filters</Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

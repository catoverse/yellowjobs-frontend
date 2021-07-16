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
  Center,
  Spinner,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { useModal } from 'contexts/modal-context'
import { subCategories } from 'lib/design-subcategories'
import useSWR from 'swr'
import { API_URL, fetcher } from 'lib/api'

export default function CategoriesMenu({ selectedCategory }) {
  const { isOpen, onClose } = useModal()
  const { data, error } = useSWR(
    `${API_URL}/api/categories?name=${selectedCategory}`,
    fetcher
  )
  const capitalizedCategory =
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)

  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <Center minH="100vh">
        <Spinner />
      </Center>
    )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="4xl">
        <ModalHeader color="gray.600">
          <HStack justify="space-between">
            <Text>Options available in {capitalizedCategory}</Text>
            <CloseButton onClick={onClose} />
          </HStack>
        </ModalHeader>
        <Box as="hr" />

        <ModalBody py="4">
          <InputGroup maxW="xs" w="100%" mt="5">
            <Input
              variant="flushed"
              fontSize="sm"
              placeholder={`Search for ${capitalizedCategory} categories...`}
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
            {data[0].roles.map((category) => (
              <Checkbox>{category}</Checkbox>
            ))}
          </SimpleGrid>

          <Box as="hr" mt="10" />
          <HStack mt="5" justify="flex-end">
            <Button variant="ghost" color="gray.500" fontWeight="normal">
              Clear filters
            </Button>
            <Button colorScheme="blue">Apply filters</Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

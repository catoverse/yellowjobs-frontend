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
  CheckboxGroup,
  useCheckboxGroup,
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
import useSWR from 'swr'
import { API_URL, fetcher } from 'lib/api'
import { useRouter } from 'next/router'

export default function CategoriesMenu({ selectedCategory }) {
  const router = useRouter()
  const { isOpen, onClose } = useModal()
  const { data, error } = useSWR(
    `${API_URL}/api/categories?name=${selectedCategory}`,
    fetcher
  )
  const capitalizedCategory =
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)

  const { value, setValue } = useCheckboxGroup()

  const applyRoleBasedFilters = () => {
    router.push({
      pathname: '/',
      query: {
        roles: value.join(','),
      },
    })

    onClose() // close the modal after selecting the roles
  }

  const clearFilters = () => {
    setValue([])
    router.push('/')
  }

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
            <CheckboxGroup value={value} onChange={setValue}>
              {data[0].roles.map((category) => (
                <Checkbox value={category}>{category}</Checkbox>
              ))}
            </CheckboxGroup>
          </SimpleGrid>

          <Box as="hr" mt="10" />
          <HStack mt="5" justify="flex-end">
            <Button
              variant="ghost"
              color="gray.500"
              fontWeight="normal"
              onClick={clearFilters}
            >
              Clear filters
            </Button>
            <Button colorScheme="blue" onClick={applyRoleBasedFilters}>
              Apply filters
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

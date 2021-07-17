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
import { useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useModal } from 'contexts/modal-context'
import useSWR from 'swr'
import { API_URL, fetcher } from 'lib/api'
import { useRouter } from 'next/router'
import { useRoles } from 'contexts/roles-context'

export default function CategoriesMenu({ selectedCategory }) {
  const router = useRouter()
  const { isOpen, onClose } = useModal()

  const capitalizedCategory =
    selectedCategory[0].category.charAt(0).toUpperCase() +
    selectedCategory[0].category.slice(1)

  const [value, setValue] = useRoles()

  const applyRoleBasedFilters = () => {
    const lowercaseValues = value.map((v) => v.toLowerCase())
    const params = router.query
    router.push({
      pathname: '/',
      query: {
        ...params,
        roles: lowercaseValues.join(','),
      },
    })

    onClose() // close the modal after selecting the roles
    setValue([]) // reset the modal values
  }

  const clearFilters = () => {
    setValue([])
    // router.push('/')
  }

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

        <ModalBody>
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
            px="2"
            maxH="3xs"
            overflowY="auto"
            className="custom-scrollbar"
          >
            <CheckboxGroup value={value} onChange={setValue}>
              {selectedCategory[0].roles.map((category) => (
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

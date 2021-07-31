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
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useModal } from 'contexts/modal-context'
import useSWR from 'swr'
import { API_URL, fetcher } from 'lib/api'
import { useRouter } from 'next/router'
import { useRoles } from 'contexts/roles-context'
import { useSelectedCategory } from 'contexts/selected-category-context'
import { useSelectedRoles } from 'contexts/selected-roles-context'
import Fuse from 'fuse.js'
import Highlighter from 'react-highlight-words'

export default function CategoriesMenu({ categories }) {
  const router = useRouter()
  const { isOpen, onClose } = useModal()
  const [selectedCategory, setSelectedCategory] = useSelectedCategory()

  const selectedCategoryObject = categories.find((item) => item.category === selectedCategory)

  const capitalizedCategory =
    selectedCategoryObject.category.charAt(0).toUpperCase() +
    selectedCategoryObject.category.slice(1)

  const [searchValue, setSearchValue] = useState('')

  const renderCheckboxes = () => {
    let rolesToDisplay = selectedCategoryObject.roles;

    if (searchValue.trim().length > 0) {
      const fuse = new Fuse(selectedCategoryObject.roles, {
        includeScore: true
      })
      const searchResults = fuse.search(searchValue)
      rolesToDisplay = searchResults.map((result) => result.item)
    }

    return (
      rolesToDisplay.map((role, index) => (
        <Checkbox value={role} key={index}>
          <Highlighter
            searchWords={[searchValue]}
            autoEscape={true}
            textToHighlight={role}
          />
        </Checkbox>
      ))
    )
  }

  const [value, setValue] = useRoles()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const applyRoleBasedFilters = () => {
    if (value.length > 0) {
      const params = router.query
      delete params.s
      router.push({
        pathname: '/',
        query: {
          ...params,
          roles: value.join(','),
        },
      })
    } else {
      const params = new URLSearchParams(location.search)
      params.delete('roles')
      router.replace({
        pathname: '/',
        query: params.toString(),
      })
    }

    onModalClose()
  }

  const clearFilters = () => {
    const filteredRoles = value.filter((role) => !selectedCategoryObject.roles.includes(role))
    setValue(filteredRoles)
    setSearchValue('')
    // router.push('/')
  }

  const onModalClose = () => {
    clearFilters()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent maxW="4xl">
        <ModalHeader color="gray.600">
          <HStack justify="space-between">
            <Text>Options available in {capitalizedCategory}</Text>
            <CloseButton onClick={onModalClose} />
          </HStack>
        </ModalHeader>
        <Box as="hr" />

        <ModalBody>
          <InputGroup maxW="xs" w="100%" mt="5">
            <Input
              variant="flushed"
              fontSize="sm"
              placeholder={`Search for ${capitalizedCategory} categories...`}
              value={searchValue}
              onChange={({ currentTarget }) =>
                setSearchValue(currentTarget.value)
              }
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
              {renderCheckboxes()}
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

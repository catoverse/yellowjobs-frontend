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
import Highlighter from 'react-highlight-words'

export default function CategoriesMenu({ selectedCategory }) {
  const router = useRouter()
  const { isOpen, onClose } = useModal()

  const capitalizedCategory =
    selectedCategory[0].category.charAt(0).toUpperCase() +
    selectedCategory[0].category.slice(1)

  const [searchValue, setSearchValue] = useState('')

  const renderCheckboxes = () => {
    const rolesToDisplay = searchValue.trim().length > 0
      ? selectedCategory[0].roles.filter((role) => role.toLowerCase().includes(searchValue.toLowerCase()))
      : selectedCategory[0].roles

    return (
      rolesToDisplay.map((category) => (
        <Checkbox value={category}>
          <Highlighter
            searchWords={[searchValue]}
            autoEscape={true}
            textToHighlight={category}
          />
        </Checkbox>
      ))
    )
  }

  const [value, setValue] = useRoles()

  const applyRoleBasedFilters = () => {
    if (value.length > 0) {
      const lowercaseValues = value.map((v) => v.toLowerCase())
      const params = router.query
      router.push({
        pathname: '/',
        query: {
          ...params,
          roles: lowercaseValues.join(','),
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
    setValue([])
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

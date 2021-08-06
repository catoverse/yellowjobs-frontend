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
import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useModal } from 'contexts/modal-context'
import useSWR from 'swr'
import { API_URL, fetcher } from 'lib/api'
import { useRouter } from 'next/router'
import { useRoles } from 'contexts/roles-context'
import { useOpenedCategory } from 'contexts/opened-category-context'
import { useSelectedRoles } from 'contexts/selected-roles-context'
import Fuse from 'fuse.js'
import Highlighter from 'react-highlight-words'

export default function CategoriesModal({ categories }) {
  const router = useRouter()
  const { isOpen, onClose } = useModal()
  const [openedCategory, setOpenedCategory] = useOpenedCategory()

  const capitalizedCategory =
    openedCategory.category.charAt(0).toUpperCase() +
    openedCategory.category.slice(1)

  const [searchValue, setSearchValue] = useState('')

  const renderCheckboxes = () => {
    let rolesToDisplay = openedCategory.roles;

    if (searchValue.trim().length > 0) {
      const fuse = new Fuse(openedCategory.roles, {
        includeScore: true
      })
      const searchResults = fuse.search(searchValue)
      rolesToDisplay = searchResults.map((result) => result.item)
    }

    return (
      rolesToDisplay.map((role, index) => (
        <Checkbox isDisabled={isAllSelected} value={role} key={index}>
          <Highlighter
            searchWords={[searchValue]}
            autoEscape={true}
            textToHighlight={role}
          />
        </Checkbox>
      ))
    )
  }

  const [roles, setRoles] = useRoles()

  const [isAllSelected, setIsAllSelected] = useState(false)

  useEffect(() => {
    const areAllRolesSelected = openedCategory.roles.every((role) =>
      roles.includes(role)
    )
    setIsAllSelected(areAllRolesSelected)
  }, [roles])

  const onAllSelected = () => {
    if (event.target.checked) {
      const newRoles = [...new Set([...roles, ...openedCategory.roles])]
      setRoles(newRoles)
      setIsAllSelected(true)
    } else {
      const newRoles = roles.filter((role) => !openedCategory.roles.includes(role))
      setRoles(newRoles)
      setIsAllSelected(false)
    }
  }

  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const applyRoleBasedFilters = () => {
    if (roles.length > 0) {
      const params = router.query
      delete params.s
      router.push({
        pathname: '/',
        query: {
          ...params,
          roles: roles.join(','),
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
    const filteredRoles = roles.filter((role) => !openedCategory.roles.includes(role))
    setRoles(filteredRoles)
    setSearchValue('')
    // router.push('/')
  }

  const onModalClose = () => {
    setIsAllSelected(false)
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
          <HStack spacing="2rem" align="baseline">
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
            <Checkbox isChecked={isAllSelected} onChange={onAllSelected}>Select all</Checkbox>
          </HStack>

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
            <CheckboxGroup value={roles} onChange={setRoles}>
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

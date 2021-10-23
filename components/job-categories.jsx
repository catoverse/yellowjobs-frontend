import {
  Badge,
  Box,
  Text,
  Center,
  Flex,
  Button,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
} from '@chakra-ui/react'

import { FiRefreshCcw } from 'react-icons/fi'
import CategoryEmoji from './category-emoji'

import Container from './container'
import { useModal } from 'contexts/modal-context'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRoles } from 'contexts/roles-context'
import { useOpenedCategory } from 'contexts/opened-category-context'
import { useSelectedCategories } from 'contexts/selected-categories-context'
import { useSelectedRoles } from 'contexts/selected-roles-context'

const Category = ({ category }) => {
  const { onOpen } = useModal()
  const [roles, setRoles] = useRoles()
  const [openedCategory, setOpenedCategory] = useOpenedCategory()
  const [selectedCategories, setSelectedCategories] = useSelectedCategories()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const selectedRolesInThisCategory = selectedRoles.filter((selectedRole) =>
    category.roles.includes(selectedRole)
  )

  const selectedRolesInThisCategoryCountText =
    category.roles.length === selectedRolesInThisCategory.length ||
    selectedCategories.includes(category.category)
      ? 'All'
      : selectedRolesInThisCategory.length

  const onClickHandler = () => {
    setOpenedCategory(category)
    setRoles(selectedRoles)
    onOpen()
  }

  return (
    <Button
      bg="white"
      borderRadius="0"
      flex="1"
      _hover={{ bg: '#F6F6F6' }}
      _focus={{ outline: 'none' }}
      _focusVisible={{ borderBottom: '4px solid', borderColor: 'blue.500' }}
      onClick={onClickHandler}
    >
      <Center w="8" h="10">
        <CategoryEmoji categoryName={category.category} />
      </Center>
      <Text ml="2" fontSize="sm" fontWeight="normal" color="gray.600">
        {category.category}
      </Text>
      {(selectedRolesInThisCategory.length > 0 ||
        selectedCategories.includes(category.category)) && (
        <Badge
          ml="2"
          variant="solid"
          colorScheme="blue"
          borderRadius="full"
          fontSize="0.8em"
        >
          {selectedRolesInThisCategoryCountText}
        </Badge>
      )}
    </Button>
  )
}

const JobTypes = ({ selectedTypes, setSelectedTypes }) => {
  const router = useRouter()

  const onTypeChange = (types) => {
    setSelectedTypes(types)
    if (types.length > 0) {
      const params = router.query
      router.push({
        pathname: '/',
        query: {
          ...params,
          types: types.join(','),
        },
      })
    } else {
      const params = new URLSearchParams(location.search)
      params.delete('types')
      router.replace({
        pathname: '/',
        query: params.toString(),
      })
    }
  }

  return (
    <Flex fontSize="sm" color="gray.700">
      <SimpleGrid columns={{ base: '2', md: '4' }} spacing="2">
        <CheckboxGroup value={selectedTypes} onChange={onTypeChange}>
          <Checkbox value={'fulltime'}>Full time</Checkbox>
          <Checkbox value={'freelance'}>Freelance</Checkbox>
          <Checkbox value={'freshers'}>Freshers</Checkbox>
          <Checkbox value={'internship'}>Internships</Checkbox>
        </CheckboxGroup>
      </SimpleGrid>
    </Flex>
  )
}

export default function JobCategories({ categories }) {
  const router = useRouter()
  const [selectedTypes, setSelectedTypes] = useState([])
  const [openedCategory, setOpenedCategory] = useOpenedCategory()
  const [selectedCategories, setSelectedCategories] = useSelectedCategories()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()
  const clearFilters = () => {
    setSelectedTypes([])
    setOpenedCategory()
    setSelectedRoles([])
    router.push('/')
  }

  useEffect(() => {
    if (router.query.types) {
      const typesInUrl = router.query.types.replace(/ /g, ' ')
      setSelectedTypes(typesInUrl.split(','))
    }

    if (router.query.s) {
      const keyword = router.query.s.replace(/ /g, ' ')
      setSelectedRoles(keyword.split(','))
    } else if (router.query.categories || router.query.roles) {
      if (router.query.categories) {
        const categoriesInUrl = router.query.categories
          .replace(/ /g, ' ')
          .split(',')
        setSelectedCategories(categoriesInUrl)
      }
      if (router.query.roles) {
        const rolesInUrl = router.query.roles.replace(/ /g, ' ').split(',')
        setSelectedRoles(rolesInUrl)
      }
    }

    if (!router.query.categories && selectedCategories.length > 0) {
      setSelectedCategories([])
    }
    if (!router.query.roles && selectedRoles.length > 0 && !router.query.s) {
      setSelectedRoles([])
    }
  }, [router.query])

  return (
    <Box mt="10">
      <Container>
        <Flex justify="space-between">
          <JobTypes
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Button
            px="0"
            variant="ghost"
            fontSize="sm"
            fontWeight="normal"
            color="gray.500"
            _hover={{ color: 'gray.800' }}
            _active={{ color: 'gray.800' }}
            display={{ base: 'none', md: 'flex' }}
            onClick={clearFilters}
            leftIcon={<FiRefreshCcw />}
          >
            Reset filters
          </Button>
        </Flex>
        <Flex
          flexDirection="row"
          mt="5"
          display={{ base: 'none', md: 'flex' }}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="lg"
          overflow="hidden"
        >
          {categories.map((category, i) => {
            return <Category category={categories[i]} key={i} />
          })}
        </Flex>
      </Container>
    </Box>
  )
}

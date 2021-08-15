import {
  Badge,
  Box,
  Text,
  HStack,
  Center,
  Flex,
  Button,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
} from '@chakra-ui/react'

import { FiRefreshCcw } from 'react-icons/fi'
import ContentEmoji from './icons/categories/content.svg'
import DesignEmoji from './icons/categories/design.svg'
import ManagementEmoji from './icons/categories/management.svg'
import MarketingEmoji from './icons/categories/marketing.svg'
import SalesEmoji from './icons/categories/sales.svg'
import SupportEmoji from './icons/categories/support.svg'
import TechEmoji from './icons/categories/tech.svg'
import OthersEmoji from './icons/categories/others.svg'

import Container from './container'
import { useModal } from 'contexts/modal-context'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRoles } from 'contexts/roles-context'
import { useOpenedCategory } from 'contexts/opened-category-context'
import { useSelectedCategories } from 'contexts/selected-categories-context'
import { useSelectedRoles } from 'contexts/selected-roles-context'

const Category = ({ icon, category, start, end }) => {
  const { onOpen } = useModal()
  const [roles, setRoles] = useRoles()
  const [openedCategory, setOpenedCategory] = useOpenedCategory()
  const [selectedCategories, setSelectedCategories] = useSelectedCategories()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const selectedRolesInThisCategory = selectedRoles.filter((selectedRole) =>
    category.roles.includes(selectedRole)
  )

  const selectedRolesInThisCategoryCountText =
    category.roles.length === selectedRolesInThisCategory.length || selectedCategories.includes(category.category)
      ? 'All'
      : selectedRolesInThisCategory.length

  const onClickHandler = () => {
    setOpenedCategory(category)
    setRoles(selectedRoles)
    onOpen()
  }

  return (
    <Box pos="relative">
      <Button
        bg="gray.50"
        py="2"
        px="8"
        w="10rem"
        height="10"
        bg="white"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="none"
        _hover={{ bg: 'gray.100' }}
        borderRightWidth={!end && '0'}
        borderLeftRadius={start && 'lg'}
        borderRightRadius={end && 'lg'}
        onClick={onClickHandler}
        _focus={{ outline: 'none' }}
        _focusVisible={{ borderBottom: '4px solid gray' }}
      >
        <Center w="8" h="10">
          {icon}
        </Center>
        <Text ml="2" fontSize="sm" fontWeight="normal" color="gray.600">
          {category.category}
        </Text>
        {
          (selectedRolesInThisCategory.length > 0 || selectedCategories.includes(category.category)) &&
          <Badge ml="2" variant="solid" colorScheme="blue" borderRadius="full" fontSize="0.8em">
            {selectedRolesInThisCategoryCountText}
          </Badge>
        }
      </Button>
    </Box>
  )
}

const JobTypes = ({selectedTypes, setSelectedTypes}) => {
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
    <Flex
      fontSize="sm"
      color="gray.700"
    >
      <SimpleGrid
        columns={{ base: '2', md: '4' }}
        spacing="2"
      >
        <CheckboxGroup value={selectedTypes} onChange={onTypeChange}>
          <Checkbox value={'fulltime'}>Full time</Checkbox>
          <Checkbox value={'freelance'}>Freelance</Checkbox>
          <Checkbox value={'parttime'}>Part time</Checkbox>
          <Checkbox value={'internship'}>Internships</Checkbox>
          <Checkbox value={'freshers'}>Freshers</Checkbox>
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
        const categoriesInUrl = router.query.categories.replace(/ /g, ' ').split(',')
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
          <JobTypes selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
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
        <HStack mt="5" spacing="0" display={{ base: 'none', md: 'flex' }}>
          <Category
            start
            category={categories[0]}
            icon={<TechEmoji />}
          />
          <Category
            category={categories[1]}
            icon={<DesignEmoji />}
          />
          <Category
            category={categories[2]}
            icon={<ManagementEmoji />}
          />
          <Category
            category={categories[3]}
            icon={<MarketingEmoji />}
          />
          <Category
            category={categories[4]}
            icon={<SalesEmoji />}
          />
          <Category
            category={categories[5]}
            icon={<ContentEmoji />}
          />
          <Category
            category={categories[6]}
            icon={<SupportEmoji />}
          />
          <Category
            end
            category={categories[7]}
            icon={<OthersEmoji />}
          />
        </HStack>
      </Container>
    </Box>
  )
}

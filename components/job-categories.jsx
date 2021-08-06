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
import { useSelectedRoles } from 'contexts/selected-roles-context'

const Category = ({ icon, category, start, end }) => {
  const { onOpen } = useModal()
  const [roles, setRoles] = useRoles()
  const [openedCategory, setOpenedCategory] = useOpenedCategory()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const selectedRolesInThisCategory = selectedRoles.filter((selectedRole) =>
    category.roles.includes(selectedRole)
  )

  const selectedRolesInThisCategoryCountText =
    category.roles.length === selectedRolesInThisCategory.length
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
          selectedRolesInThisCategory.length > 0 &&
          <Badge ml="2" variant="solid" colorScheme="blue" borderRadius="full" fontSize="0.8em">
            {selectedRolesInThisCategoryCountText}
          </Badge>
        }
      </Button>
    </Box>
  )
}

const JobTypes = ({selectedType,setSelectedType}) => {
  const router = useRouter()

  const onTypeChange = (selectedTypes) => {
    setSelectedType(selectedTypes)
    if (selectedTypes.length > 0) {
      const params = router.query
      router.push({
        pathname: '/',
        query: {
          ...params,
          types: selectedTypes.join(','),
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
        <CheckboxGroup value={selectedType} onChange={onTypeChange}>
          <Checkbox value={'fulltime'}>Full time</Checkbox>
          <Checkbox value={'freelance'}>Freelance</Checkbox>
          <Checkbox value={'parttime'}>Part time</Checkbox>
          <Checkbox value={'internship'}>Internships</Checkbox>
        </CheckboxGroup>
      </SimpleGrid>
    </Flex>
  )
}

export default function JobCategories({ categories }) {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState([])
  const [openedCategory, setOpenedCategory] = useOpenedCategory()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()
  const clearFilters = () => {
    setSelectedType([])
    setOpenedCategory(categories[0])
    setSelectedRoles([])
    router.push('/')
  }

  useEffect(() => {
    if (router.query.s) {
      const keyword = router.query.s.replace(/ /g, ' ')
      setSelectedRoles(keyword.split(','))
    } else if (router.query.roles) {
      const roles = router.query.roles.replace(/ /g, ' ')
      setSelectedRoles(roles.split(','))
    } else if (!router.query.roles && selectedRoles.length > 0) {
      setSelectedRoles([])
    }
  }, [router.query])

  return (
    <Box mt="10">
      <Container>
        <Flex justify="space-between">
          <JobTypes selectedType={selectedType} setSelectedType={setSelectedType} />
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

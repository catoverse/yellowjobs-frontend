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
import { useSelectedCategory } from 'contexts/selected-category-context'
import { useSelectedRoles } from 'contexts/selected-roles-context'

const Category = ({ icon, title, start, end, allRoles }) => {
  const { onOpen } = useModal()
  const [value, setValue] = useRoles()
  const [selectedCategory, setSelectedCategory] = useSelectedCategory()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const selectedRolesInThisCategory = selectedRoles.filter((selectedRole) =>
    allRoles.includes(selectedRole)
  )

  const onClickHandler = () => {
    setSelectedCategory(title)
    setValue(selectedRoles)
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
          {title}
        </Text>
        {
          selectedRolesInThisCategory.length > 0 &&
          <Badge ml="2" variant="solid" colorScheme="blue">
            {selectedRolesInThisCategory.length}
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
  const [selectedCategory, setSelectedCategory] = useSelectedCategory()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()
  const clearFilters = () => {
    setSelectedType([])
    setSelectedCategory('Tech')
    setSelectedRoles([])
    router.push('/')
  }
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
            title="Tech"
            icon={<TechEmoji />}
            allRoles={categories.find((category) => category.category === 'Tech' ).roles}
          />
          <Category
            title="Design"
            icon={<DesignEmoji />}
            allRoles={categories.find((category) => category.category === 'Design' ).roles}
          />
          <Category
            title="Management"
            icon={<ManagementEmoji />}
            allRoles={categories.find((category) => category.category === 'Management' ).roles}
          />
          <Category
            title="Marketing"
            icon={<MarketingEmoji />}
            allRoles={categories.find((category) => category.category === 'Marketing' ).roles}
          />
          <Category
            title="Sales"
            icon={<SalesEmoji />}
            allRoles={categories.find((category) => category.category === 'Sales' ).roles}
          />
          <Category
            title="Content"
            icon={<ContentEmoji />}
            allRoles={categories.find((category) => category.category === 'Content' ).roles}
          />
          <Category
            title="Support"
            icon={<SupportEmoji />}
            allRoles={categories.find((category) => category.category === 'Support' ).roles}
          />
          <Category
            end
            title="Others"
            icon={<OthersEmoji />}
            allRoles={categories.find((category) => category.category === 'Others' ).roles}
          />
        </HStack>
      </Container>
    </Box>
  )
}

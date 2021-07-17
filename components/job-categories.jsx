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
} from '@chakra-ui/react'

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

const Category = ({ icon, title, start, end, setSelectedCategory, isCategorySelected, selectedRolesCount }) => {
  const { onOpen } = useModal()

  const onClickHandler = () => {
    setSelectedCategory(title)
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
          selectedRolesCount > 0 && isCategorySelected &&
          <Badge ml="2" variant="solid" colorScheme="blue">
            {selectedRolesCount}
          </Badge>
        }
      </Button>
    </Box>
  )
}

const JobTypes = () => {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState([])

  useEffect(() => {
    if (selectedType.length > 0) {
      const params = router.query
      router.push({
        pathname: '/',
        query: {
          ...params,
          types: selectedType.join(','),
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
  }, [selectedType])

  const clearFilters = () => {
    setSelectedType([])
  }

  return (
    <Flex justify="space-between">
      <Flex
        fontSize="sm"
        color="gray.700"
      >
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          gridGap={{ base: '2', sm: '6' }}
        >
          <CheckboxGroup value={selectedType} onChange={setSelectedType}>
            <Checkbox value={'fulltime'}>Full time</Checkbox>
            <Checkbox value={'freelance'}>Freelance</Checkbox>
            <Checkbox value={'parttime'}>Part time</Checkbox>
            <Checkbox value={'internship'}>Internships</Checkbox>
          </CheckboxGroup>
        </Flex>
      </Flex>
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
      >
        Clear filters
      </Button>
    </Flex>
  )
}

export default function JobCategories({ setSelectedCategory, selectedCategory, selectedRolesCount }) {
  return (
    <Box mt="10">
      <Container>
        <JobTypes />
        <HStack mt="5" spacing="0" display={{ base: 'none', md: 'flex' }}>
          <Category
            start
            title="Tech"
            icon={<TechEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Tech'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            title="Design"
            icon={<DesignEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Design'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            title="Management"
            icon={<ManagementEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Management'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            title="Marketing"
            icon={<MarketingEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Marketing'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            title="Sales"
            icon={<SalesEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Sales'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            title="Content"
            icon={<ContentEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Content'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            title="Support"
            icon={<SupportEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Support'}
            selectedRolesCount={selectedRolesCount}
          />
          <Category
            end
            title="Others"
            icon={<OthersEmoji />}
            setSelectedCategory={setSelectedCategory}
            isCategorySelected={selectedCategory === 'Others'}
            selectedRolesCount={selectedRolesCount}
          />
        </HStack>
      </Container>
    </Box>
  )
}

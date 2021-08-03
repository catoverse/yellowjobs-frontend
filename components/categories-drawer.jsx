import {
  Badge,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  HStack,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { FiArrowLeft as BackIcon } from 'react-icons/fi'
import ContentEmoji from './icons/categories/content.svg'
import DesignEmoji from './icons/categories/design.svg'
import ManagementEmoji from './icons/categories/management.svg'
import MarketingEmoji from './icons/categories/marketing.svg'
import SalesEmoji from './icons/categories/sales.svg'
import SupportEmoji from './icons/categories/support.svg'
import TechEmoji from './icons/categories/tech.svg'
import OthersEmoji from './icons/categories/others.svg'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRoles } from 'contexts/roles-context'
import { useSelectedRoles } from 'contexts/selected-roles-context'

const categoryEmojis = {
  Content: ContentEmoji,
  Design: DesignEmoji,
  Management: ManagementEmoji,
  Marketing: MarketingEmoji,
  Sales: SalesEmoji,
  Support: SupportEmoji,
  Tech: TechEmoji,
  Others: OthersEmoji,
}

const AddFiltersButton = ({ onOpen }) => {
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()
  const [roles, setRoles] = useRoles()

  const onDrawerOpen = () => {
    setRoles(selectedRoles)
    onOpen()
  }

  return (
    <Center
      bg="blue.500"
      color="white"
      pos="fixed"
      h="4rem"
      w="100%"
      zIndex="2"
      bottom="0"
      fontSize="sm"
      fontWeight="normal"
      display={{ base: 'flex', md: 'none' }}
      onClick={onDrawerOpen}
    >
      Add filters by skill/position
      {selectedRoles.length > 0 && (
        <Badge ml="2" colorScheme="blue" borderRadius="full" fontSize="0.8em">
          {selectedRoles.length}
        </Badge>
      )}
    </Center>
  )
}

const CateoriesTabs = ({ categories, roles, setRoles }) => {
  const [isAllSelected, setIsAllSelected] = useState(new Array(categories.length))
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const onTabsChange = (index) => {
    setSelectedCategory(categories[index])
    setIsAllSelected
  }

  useEffect(() => {
    const newIsAllSelected = categories.map((category) =>
      category.roles.every((role) => roles.includes(role))
    )
    setIsAllSelected(newIsAllSelected)
  }, [roles])

  const onAllSelected = (index) => {
    if (event.target.checked) {
      const newIsAllSelected = isAllSelected
      newIsAllSelected[index] = true
      setIsAllSelected(newIsAllSelected)
      const newRoles = [...new Set([...roles, ...selectedCategory.roles])]
      setRoles(newRoles)
    } else {
      const newIsAllSelected = isAllSelected
      newIsAllSelected[index] = false
      setIsAllSelected(newIsAllSelected)
      const newRoles = []
      roles.forEach((role) => {
        if (!selectedCategory.roles.includes(role)) {
          newRoles.push(role)
        }
      })
      setRoles(newRoles)
    }
  }

  return (
    <Tabs h="full" orientation="vertical" variant="ghost" onChange={onTabsChange}>
      <TabList pt="2" bg="gray.50">
        {categories.map((category, index) => {
          const selectedRolesInThisCategory = roles.filter((selectedRole) =>
            category.roles.includes(selectedRole)
          )
          const selectedRolesInThisCategoryCountText =
            category.roles.length === selectedRolesInThisCategory.length
              ? 'All'
              : selectedRolesInThisCategory.length
          const CategoryEmoji = categoryEmojis[category.category]
          return (
            <Tab
              justifyContent="flex-start"
              px="6"
              py="4"
              _selected={{ color: 'blue.500', bg: 'white', fontWeight: 'bold' }}
              key={index}
            >
              <HStack>
                <CategoryEmoji />
                <Text>{category.category}</Text>
                {selectedRolesInThisCategory.length > 0 && (
                  <Badge ml="2" variant="solid" colorScheme="blue" borderRadius="full" fontSize="0.8em">
                    {selectedRolesInThisCategoryCountText}
                  </Badge>
                )}
              </HStack>
            </Tab>
          )
        })}
      </TabList>

      <TabPanels pt="4" overflowY="auto">
        {categories.map((category, index) => {
          return (
            <TabPanel py="0" key={index}>
              <VStack align="start">
                <Checkbox isChecked={isAllSelected[index]} onChange={() => onAllSelected(index)}>Select all</Checkbox>
                <CheckboxGroup value={roles} onChange={setRoles}>
                  {category.roles.map((role, roleIndex) => (
                    <Checkbox isDisabled={isAllSelected[index]} py="2" value={role} key={roleIndex}>
                      {role}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </VStack>
            </TabPanel>
          )
        })}
      </TabPanels>
    </Tabs>
  )
}

export default function FiltersDrawer({ categories }) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [roles, setRoles] = useRoles()
  const [selectedRoles, setSelectedRoles] = useSelectedRoles()

  const applyFilters = () => {
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

    clearFilters()
    onClose()
  }

  const clearFilters = () => {
    setRoles([])
  }

  return (
    <div>
      <AddFiltersButton onOpen={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent h="100% !important">
          <DrawerHeader px="0" py="1" shadow="sm">
            <Flex align="baseline" justify="space-between">
              <Flex align="baseline">
                <IconButton
                  aria-label="back"
                  size="lg"
                  px="0"
                  variant="ghost"
                  icon={<BackIcon />}
                  onClick={onClose}
                />
                <Text>Add filters</Text>
              </Flex>
              <Button
                variant="ghost"
                fontSize="sm"
                fontWeight="normal"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody p="0">
            <CateoriesTabs
              categories={categories}
              roles={roles}
              setRoles={setRoles}
            />
          </DrawerBody>

          <DrawerFooter p="0" h="4rem">
            <Center
              bg="blue.500"
              color="white"
              pos="fixed"
              h="4rem"
              width="100%"
              zIndex="2"
              bottom="0"
              fontSize="sm"
              fontWeight="bold"
              display={{ base: 'flex', md: 'none' }}
              onClick={applyFilters}
            >
              Apply filters
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

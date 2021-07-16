import {
  Box,
  Text,
  HStack,
  Center,
  Flex,
  Button,
  Checkbox,
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
import CategoriesModal from './categories-modal'
import { ModalProvider, useModal } from 'contexts/modal-context'
import { useState } from 'react'

const Category = ({ icon, title, start, end, setSelectedCategory }) => {
  const { onOpen } = useModal()

  const onClickHandler = () => {
    setSelectedCategory(title.toLowerCase())
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
      </Button>
    </Box>
  )
}

const JobTypes = () => {
  return (
    <Flex justify="space-between">
      <Flex
        fontSize="sm"
        color="gray.700"
        gridGap={{ base: '0', md: '6' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex gridGap={{ base: '16', md: '6' }}>
          <Checkbox defaultIsChecked>Full time</Checkbox>
          <Checkbox>Freelance</Checkbox>
        </Flex>
        <Flex gridGap={{ base: '16', md: '6' }}>
          <Checkbox>Part time</Checkbox>
          <Checkbox>Internships</Checkbox>
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
      >
        Clear filters
      </Button>
    </Flex>
  )
}

export default function JobCategories() {
  const [selectedCategory, setSelectedCategory] = useState('Tech')

  return (
    <Box mt="10">
      <ModalProvider>
        <Container>
          <JobTypes />
          <HStack mt="5" spacing="0" display={{ base: 'none', md: 'flex' }}>
            <Category
              start
              title="Tech"
              icon={<TechEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              title="Design"
              icon={<DesignEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              title="Management"
              icon={<ManagementEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              title="Marketing"
              icon={<MarketingEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              title="Sales"
              icon={<SalesEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              title="Content"
              icon={<ContentEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              title="Support"
              icon={<SupportEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
            <Category
              end
              title="Others"
              icon={<OthersEmoji />}
              setSelectedCategory={setSelectedCategory}
            />
          </HStack>
        </Container>
        <CategoriesModal selectedCategory={selectedCategory} />
      </ModalProvider>
    </Box>
  )
}

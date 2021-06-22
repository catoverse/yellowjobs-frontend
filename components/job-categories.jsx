import {
  Box,
  Text,
  HStack,
  Center,
  Flex,
  Button,
  Checkbox,
  VStack,
  Spacer,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import ContentEmoji from './icons/categories/content.svg'
import DesignEmoji from './icons/categories/design.svg'
import ManagementEmoji from './icons/categories/management.svg'
import MarketingEmoji from './icons/categories/marketing.svg'
import SalesEmoji from './icons/categories/sales.svg'
import SupportEmoji from './icons/categories/support.svg'
import TechEmoji from './icons/categories/tech.svg'
import OthersEmoji from './icons/categories/others.svg'
import Container from './container'

const Category = ({ icon, title, start, end }) => {
  return (
    <NextLink href={`#${title.toLowerCase()}`}>
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
      >
        <Center w="8" h="10">
          {icon}
        </Center>
        <Text ml="2" fontSize="sm" fontWeight="normal" color="gray.600">
          {title}
        </Text>
      </Button>
    </NextLink>
  )
}

const JobTypes = () => {
  return (
    <Flex justify="space-between">
      <HStack spacing={6} color="gray.700" fontSize="sm">
        <Checkbox defaultIsChecked>Full time</Checkbox>
        <Checkbox>Freelance</Checkbox>
        <Checkbox>Part time</Checkbox>
        <Checkbox>Internships</Checkbox>
      </HStack>
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
  return (
    <Box mt="10">
      <Container>
        <JobTypes />
        <HStack mt="5" spacing="0" display={{ base: 'none', md: 'flex' }}>
          <Category title="Tech" icon={<TechEmoji />} start />
          <Category title="Design" icon={<DesignEmoji />} />
          <Category title="Management" icon={<ManagementEmoji />} />
          <Category title="Marketing" icon={<MarketingEmoji />} />
          <Category title="Sales" icon={<SalesEmoji />} />
          <Category title="Content" icon={<ContentEmoji />} />
          <Category title="Support" icon={<SupportEmoji />} />
          <Category title="Others" icon={<OthersEmoji />} end />
        </HStack>
      </Container>
    </Box>
  )
}

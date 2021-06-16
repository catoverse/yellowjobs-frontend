import { Box, Text, HStack, Center, Heading, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

import ContentEmoji from './icons/categories/content.svg'
import DesignEmoji from './icons/categories/design.svg'
import ManagementEmoji from './icons/categories/management.svg'
import MarketingEmoji from './icons/categories/marketing.svg'
import SalesEmoji from './icons/categories/sales.svg'
import SupportEmoji from './icons/categories/support.svg'
import TechEmoji from './icons/categories/tech.svg'
import OthersEmoji from './icons/categories/others.svg'

const Category = ({ icon, title }) => {
  return (
    <NextLink href={`#${title.toLowerCase()}`}>
      <Button
        bg="gray.50"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        py="2"
        px="8"
        w="32"
        height="auto"
        flexDirection="column"
        bg="white"
        _hover={{ bg: 'gray.100' }}
      >
        <Center w="8" h="10" borderRadius="md">
          {icon}
        </Center>
        <Text fontWeight="normal" color="gray.600">
          {title}
        </Text>
      </Button>
    </NextLink>
  )
}

export default function JobCategories() {
  return (
    <Box
      maxW="container.xl"
      mx="auto"
      mt="10"
      px="4"
      display={{ base: 'none', md: 'block' }}
    >
      <Heading fontSize="3xl" fontWeight="medium" fontFamily="Darker Grotesque">
        Opportunities available in
      </Heading>
      <HStack mt="3" spacing="10">
        <Category title="Tech" icon={<TechEmoji />} />
        <Category title="Design" icon={<DesignEmoji />} />
        <Category title="Management" icon={<ManagementEmoji />} />
        <Category title="Marketing" icon={<MarketingEmoji />} />
        <Category title="Sales" icon={<SalesEmoji />} />
        <Category title="Content" icon={<ContentEmoji />} />
        <Category title="Support" icon={<SupportEmoji />} />
        <Category title="Others" icon={<OthersEmoji />} />
      </HStack>
    </Box>
  )
}

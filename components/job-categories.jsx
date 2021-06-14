import { Box, Text, HStack, VStack, Center, Heading } from '@chakra-ui/react'

import ContentEmoji from 'assets/categories/content.svg'
import DesignEmoji from 'assets/categories/design.svg'
import ManagementEmoji from 'assets/categories/management.svg'
import MarketingEmoji from 'assets/categories/marketing.svg'
import SalesEmoji from 'assets/categories/sales.svg'
import SupportEmoji from 'assets/categories/support.svg'
import TechEmoji from 'assets/categories/tech.svg'
import OthersEmoji from 'assets/categories/others.svg'

const Category = ({ icon, title }) => {
  return (
    <VStack
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      py="2"
      px="8"
      cursor="pointer"
      _hover={{ bg: 'gray.100' }}
    >
      <Center
        bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)"
        w="8"
        h="8"
        borderRadius="md"
      >
        {icon}
      </Center>
      <Text>{title}</Text>
    </VStack>
  )
}

export default function JobCategories() {
  return (
    <Box maxW="container.xl" mx="auto" mt="10">
      <Heading fontSize="3xl" fontWeight="medium" fontFamily="Darker Grotesque">
        Opportunities available in 
      </Heading>
      <HStack mt="3" spacing="10">
        <Category title="Content" icon={<ContentEmoji />} />
        <Category title="Design" icon={<DesignEmoji />} />
        <Category title="Management" icon={<ManagementEmoji />} />
        <Category title="Marketing" icon={<MarketingEmoji />} />
        <Category title="Sales" icon={<SalesEmoji />} />
        <Category title="Support" icon={<SupportEmoji />} />
        <Category title="Tech" icon={<TechEmoji />} />
        <Category title="Others" icon={<OthersEmoji />} />
      </HStack>
    </Box>
  )
}

import { Box, Center, HStack, SimpleGrid, Heading } from '@chakra-ui/react'
import { Tweet } from 'react-static-tweets'

import ContentEmoji from 'assets/categories/content.svg'

const CategoryBasedTweets = ({ category }) => {
  return (
    <Box mt={{ base: 0, md: 24 }} py={10}>
      <HStack>
        <Center
          bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)"
          w="8"
          h="8"
          mt="1"
          borderRadius="md"
        >
          <ContentEmoji />
        </Center>
        <Heading
          fontSize={{ base: '28px', md: '40px' }}
          fontWeight="extrabold"
          fontFamily="Darker Grotesque"
        >
          {category} opportuites
        </Heading>
      </HStack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt="5" alignItems="center">
        <Tweet id="1404411232669638660" />
        <Tweet id="1404411232669638660" />
        <Tweet id="1404411232669638660" />
        <Tweet id="1404411232669638660" />
        <Tweet id="1404411232669638660" />
        <Tweet id="1404411232669638660" />
      </SimpleGrid>
    </Box>
  )
}

export default function TweetList() {
  const categories = [
    'Content',
    'Design',
    'Management',
    'Marketing',
    'Sales',
    'Support',
    'Tech',
    'Other',
  ]
  return (
    <Box bg="gray.50">
      <Box maxW="container.xl" mx="auto" px="4">
        {categories.map((category) => (
          <CategoryBasedTweets category={category} />
        ))}
      </Box>
    </Box>
  )
}

import {
  Box,
  Button,
  Center,
  HStack,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Tweet } from 'react-static-tweets'
import ContentEmoji from 'assets/categories/content.svg'

const MasonaryGrid = styled(Box)`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 400px;
  max-height: 1000px;

  @media (max-width: 30rem) {
    flex-direction: row;
    gap: 1rem;
    max-height: none;
  }
`

const CategoryBasedTweets = ({ category, isLightGray }) => {
  return (
    <Box
      as="section"
      mt={{ base: 0, md: 24 }}
      py={10}
      bg={isLightGray ? 'gray.50' : ''}
    >
      <Box maxW="container.xl" mx="auto" px="4">
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
        <MasonaryGrid mt="5">
          <Tweet id="1404411232669638660" />
          <Tweet id="1403847095602216961" />
          <Tweet id="1403845000740364291" />
          <Tweet id="1401811181128458240" />
          <Tweet id="1400452232135405568" />
          <Tweet id="1400452232135405568" />
          <Tweet id="1400452232135405568" />
          <Tweet id="1400452232135405568" />
        </MasonaryGrid>
        <Button
          w="full"
          mt={10}
          bg="#41A4FF"
          color="white"
          _hover={{ bg: '#349afa' }}
          _active={{ bg: '#349afa' }}
        >
          See all {category.toLowerCase()} opportunities
        </Button>
      </Box>
    </Box>
  )
}

export default function TweetList() {
  const categories = [
    'Tech',
    'Design',
    'Management',
    'Marketing',
    'Sales',
    'Content',
    'Support',
    'Other',
  ]
  return (
    <>
      {categories.map((category, idx) => (
        <CategoryBasedTweets
          key={idx}
          category={category}
          isLightGray={idx % 2 === 0}
        />
      ))}
    </>
  )
}

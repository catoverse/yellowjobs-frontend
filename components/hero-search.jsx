import { Box, Flex, SimpleGrid, VStack, HStack, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import Container from './container'
import LoopHeading from './loop-heading'
import PopularButton from './popular-button'
import SearchBar from './search-bar'

export default function HeroSearch() {
  return (
    <Box
      as="main"
      overflow="hidden"
      bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)"
    >
      <Container>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <VStack justify="center" align="flex-start" spacing="4" my={12}>
            <LoopHeading />
            <SearchBar />
            <Flex gridColumnGap="2" direction={{ base: 'column', md: 'row' }}>
              <Text>popular :</Text>
              <HStack gridRowGap={2}>
                <PopularButton text="UI/UX" />
                <PopularButton text="Machine Learning" />
                <PopularButton text="Data Science" />
              </HStack>
            </Flex>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

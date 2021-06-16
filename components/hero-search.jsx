import { Box, Flex, VStack, HStack, Text, Spacer } from '@chakra-ui/react'
import NextImage from 'next/image'
import LoopHeading from './loop-heading'
import PopularButton from './popular-button'
import SearchBar from './searchbar'

export default function HeroSearch() {
  return (
    <Box
      pt="4"
      as="main"
      borderRadius="sm"
      overflow="hidden"
      ml={{ base: 0, md: 4 }}
      bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)"
    >
      <Flex mx="auto" maxW="1200px" px="4">
        <VStack justify="center" align="flex-start" spacing="4" my={24}>
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
        <Spacer />
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          filter="drop-shadow(0 0 20px yellow)"
        >
          <NextImage src="/static/design-guy.png" width="305" height="339" />
        </Flex>
      </Flex>
    </Box>
  )
}

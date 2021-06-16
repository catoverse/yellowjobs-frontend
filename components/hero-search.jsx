import {
  Box,
  Flex,
  Heading,
  VStack,
  HStack,
  Text,
  Spacer,
  Button,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import LoopHeading from './loop-heading'
import SearchBar from './searchbar'

export default function HeroSearch() {
  return (
    <Box
      as="main"
      bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)"
      pt="4"
      ml={{ base: 0, md: 4 }}
      borderRadius="sm"
    >
      <Flex mx="auto" maxW="1200px" px="4">
        <VStack justify="center" align="flex-start" spacing="4" my={24}>
          <LoopHeading />
          <SearchBar />
          <Flex gridColumnGap="2" direction={{ base: 'column', md: 'row' }}>
            <Text>popular :</Text>
            <HStack gridRowGap={2}>
              <Button
                size="sm"
                variant="outline"
                fontWeight="normal"
                borderColor="white"
              >
                UI/UX
              </Button>
              <Button
                size="sm"
                variant="outline"
                fontWeight="normal"
                borderColor="white"
              >
                Machine Learning
              </Button>
              <Button
                size="sm"
                variant="outline"
                fontWeight="normal"
                borderColor="white"
              >
                Data Science
              </Button>
            </HStack>
          </Flex>
        </VStack>
        <Spacer />
        <Flex display={{ base: 'none', lg: 'flex' }}>
          <NextImage src="/static/design-guy.png" width="305" height="339" />
        </Flex>
      </Flex>
    </Box>
  )
}

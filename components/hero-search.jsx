import {
  Box,
  Flex,
  Heading,
  VStack,
  HStack,
  Input,
  Text,
  Spacer,
  Button,
  IconButton,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import { FiSearch as SearchIcon } from 'react-icons/fi'

export default function HeroSearch() {
  return (
    <Box
      bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)"
      pt="4"
      ml={{ base: 0, md: 4 }}
      borderRadius="sm"
    >
      <Flex mx="auto" maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack justify="center" align="flex-start" spacing="4" my={24}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            fontFamily="Darker Grotesque"
          >
            Search for opportunites here
          </Heading>
          <HStack spacing="0">
            <Input
              minW={{ base: '96%', md: 'lg' }}
              w="96%"
              size="lg"
              fontSize="sm"
              bg="white"
              _hover={{ bg: 'white', borderColor: 'blue' }}
              _focus={{ bg: 'white', borderColor: 'blue' }}
              variant="filled"
              borderRightRadius="none"
              colorScheme="whiteAlpha"
              placeholder="search for jobs, skills, techstack...."
            />
            <IconButton
              size="lg"
              colorScheme="blue"
              borderLeftRadius="none"
              icon={<SearchIcon />}
            />
          </HStack>
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

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
    <Box bgGradient="linear(135deg, #FFDD00 0%, #FCCD53 100%)" pt="4">
      <Flex maxW="container.xl" mx="auto">
        <VStack justify="center" align="flex-start" spacing="4">
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            fontFamily="Darker Grotesque"
          >
            Search for opportunites here
          </Heading>
          <HStack spacing="0">
            <Input
              minW="lg"
              w="100%"
              size="lg"
              fontSize="sm"
              bg="white"
              _hover={{ bg: 'white' }}
              _focus={{ bg: 'white' }}
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
          <HStack>
            <Text>popular :</Text>
            <Button size="sm" variant="outline" fontWeight="normal" borderColor="white">
              UI/UX
            </Button>
            <Button size="sm" variant="outline" fontWeight="normal" borderColor="white">
              Machine Learning
            </Button>
            <Button size="sm" variant="outline" fontWeight="normal" borderColor="white">
              Data Science
            </Button>
          </HStack>
        </VStack>
        <Spacer />
        <NextImage src="/static/design-guy.png" width="305" height="339" />
      </Flex>
    </Box>
  )
}

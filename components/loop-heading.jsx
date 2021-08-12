import { Heading, Text } from '@chakra-ui/react'
import TextLoop from 'react-text-loop'

export default function LoopHeading() {
  return (
    <Heading
      fontSize={{ base: '2xl', md: '3xl' }}
      fontWeight="bold"
      fontFamily="Darker Grotesque"
    >
      <TextLoop>
        <Text as="h1">Search for remote jobs here</Text>
        <Text as="h1">Search for full-time jobs here</Text>
      </TextLoop>
    </Heading>
  )
}

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
        <Text>Search for opportunites here</Text>
        <Text>Search for jobs here</Text>
        <Text>Search for startups here</Text>
      </TextLoop>
    </Heading>
  )
}

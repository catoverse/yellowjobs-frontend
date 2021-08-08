import React from 'react'
import { Box, Circle, Center, Image, Button } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
export default function Profile(props) {
  return (
    <Box
      w="413px"
      h="304px"
      bg="#FFFFFF"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Center p="3rem">
        <Circle size="140px" borderWidth="3px" borderColor="yellow">
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            borderRadius="50%"
          />
        </Circle>
      </Center>
      <Center>
        <Button w="280px" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </Center>
    </Box>
  )
}

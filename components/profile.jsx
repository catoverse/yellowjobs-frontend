import React from 'react'
import { Box, Circle, Center, Image, Button } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
export default function Profile({ name, url, socialType, imagelink }) {
  return (
    <Box
      h="304px"
      bg="#FFFFFF"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Center p="2.5rem">
        <Circle size="140px" borderWidth="3px" borderColor="yellow">
          <img src="collaborators/dev.png" borderRadius="50%" />
        </Circle>
      </Center>
      <Center>
        <Button
          isFullWidth
          ml="3rem"
          mr="3rem"
          colorScheme="twitter"
          leftIcon={<FaTwitter />}
        >
          Twitter
        </Button>
      </Center>
    </Box>
  )
}

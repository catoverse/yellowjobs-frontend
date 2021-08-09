import React from 'react'
import { Box, Circle, Center, Image, Button, Link } from '@chakra-ui/react'
import { FaTwitter, FaLinkedin, FaFirefoxBrowser } from 'react-icons/fa'
export default function Profile({ name, profileLink, imageLink, socialType }) {
  function getIcon() {
    switch (socialType) {
      case 'twitter':
        return <FaTwitter />
      case 'linkedin':
        return <FaLinkedin />
      case 'website':
        return <FaFirefoxBrowser />
      default:
        return null
    }
  }

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
          <Image src={imageLink} borderRadius="50%" />
        </Circle>
      </Center>
      <Center>
        <Button
          isFullWidth
          ml="3rem"
          mr="3rem"
          colorScheme="twitter"
          leftIcon={getIcon()}
          onClick={() => {
            window.location.href = profileLink
          }}
        >
          {name}
        </Button>
      </Center>
    </Box>
  )
}

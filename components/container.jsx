import { Box } from '@chakra-ui/react'

export default function Container({ children }) {
  return (
    <Box maxW='container.xl' mx="auto" px="4">
      {children}
    </Box>
  )
}

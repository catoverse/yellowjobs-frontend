import { Box } from '@chakra-ui/react'

export default function Container({ children, size }) {
  return (
    <Box maxW={size === 'lg' ? 'container.xl' : '1200px'} mx="auto" px="4">
      {children}
    </Box>
  )
}

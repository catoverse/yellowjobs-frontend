import NextHead from 'components/next-head'
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NextHead />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

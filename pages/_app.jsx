import { ChakraProvider } from '@chakra-ui/react'
import NextHead from 'components/next-head'
import GlobalCSS from 'styles/globals'
import "@fontsource/darker-grotesque"

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalCSS />
      <NextHead />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

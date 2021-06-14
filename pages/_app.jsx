import { ChakraProvider } from '@chakra-ui/react'
import NextHead from 'components/next-head'
import GlobalCSS from 'styles/globals'
import 'react-static-tweets/styles.css'
import 'react-static-tweets/styles.css'
import "@fontsource/darker-grotesque/500.css"
import "@fontsource/darker-grotesque/700.css"
import "@fontsource/darker-grotesque/900.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalCSS />
      <NextHead />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

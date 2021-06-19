import { ChakraProvider } from '@chakra-ui/react'
import NextHead from 'components/next-head'

import GlobalCSS from 'styles/globals'
import 'focus-visible/dist/focus-visible'
import 'react-static-tweets/styles.css'
import '@fontsource/darker-grotesque/500.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalCSS />
      <NextHead />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

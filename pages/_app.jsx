import { ChakraProvider } from '@chakra-ui/react'
import NextHead from 'components/next-head'

import GlobalCSS from 'styles/globals'
import 'focus-visible/dist/focus-visible'
import 'react-static-tweets/styles.css'
import '@fontsource/darker-grotesque/500.css'
import { TwitterContextProvider } from 'react-static-tweets'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalCSS />
      <NextHead />
      <TwitterContextProvider
        value={{
          swrOptions: {
            fetcher: () => null,
          },
        }}
      >
        <Component {...pageProps} />
      </TwitterContextProvider>
    </ChakraProvider>
  )
}

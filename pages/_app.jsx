import { ChakraProvider } from '@chakra-ui/react'
import NextHead from 'components/next-head'

import GlobalCSS from 'styles/globals'
import 'focus-visible/dist/focus-visible'
import 'react-static-tweets/styles.css'
import '@fontsource/darker-grotesque/500.css'
import { TwitterContextProvider } from 'react-static-tweets'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { Provider as AuthProvider } from 'next-auth/client'
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AuthProvider session={pageProps.session}>
      <ChakraProvider>
        <GlobalCSS />
        <NextHead></NextHead>
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
    </AuthProvider>
  )
}

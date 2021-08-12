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
    <ChakraProvider>
      <GlobalCSS />
      <NextHead>
        <meta
          name="description"
          content="Curated remote job posts updated every minutes. Across tech, design, sales, content and a lot more!"
        />

        <meta property="og:url" content="https://www.yellowjobs.org/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YellowJobs-Helping you find your dream remote gig #remotejob"
        />
        <meta
          property="og:description"
          content="Curated remote job posts updated every minutes. Across tech, design, sales, content and a lot more!"
        />
        <meta
          property="og:image"
          content="https://www.yellowjobs.org/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="yellowjobs.org" />
        <meta property="twitter:url" content="https://www.yellowjobs.org/" />
        <meta
          name="twitter:title"
          content="YellowJobs-Helping you find your dream remote gig #remotejob"
        />
        <meta
          name="twitter:description"
          content="Curated remote job posts updated every minutes. Across tech, design, sales, content and a lot more!"
        />
        <meta
          name="twitter:image"
          content="https://www.yellowjobs.org/preview.png"
        />
      </NextHead>
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

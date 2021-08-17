import { Box, Center, Container } from '@chakra-ui/react'
import { Tweet } from 'react-static-tweets'
import { fetchTweetAst } from 'static-tweets'

import Navbar from 'components/navbar'
import Footer from 'components/footer'

export default function SharePage({ tweetId, tweetAst }) {
  return (
    <Box>
      <Navbar />
        <Container maxW="container.xl" px={{base: '6', '2xl': '0'}} mb="16" centerContent>
          <Center>
          asda
            <Tweet id={tweetId} ast={tweetAst} />
          </Center>
        </Container>
      <Footer />
    </Box>
  )
}

export const getStaticProps = async () => {
  try {
    const tweetAst = await fetchTweetAst('1358199505280262150')

    return {
      props: {
        tweetId,
        tweetAst
      },
      revalidate: 10
    }
  } catch (err) {
    console.error('error fetching tweet info', err)

    throw err
  }
}
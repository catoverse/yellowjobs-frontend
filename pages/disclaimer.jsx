import * as React from 'react'
import Navbar from 'components/navbar'
import { Text, Heading } from '@chakra-ui/react'
import path from 'path'
import fs from 'fs'
import Footer from 'components/footer'
import Container from 'components/container'

const DisclaimerPage = ({ disclaimer }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Heading as="h2" my="4" size="2xl">
          DISCLAIMER
        </Heading>

        {disclaimer.split('\n').map((x, idx) => (
          <Text fontSize="md" key={idx} p="0.5rem">
            {x}
          </Text>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const disclaimer = fs.readFileSync(
    path.resolve(process.cwd(), 'lib/disclaimer.txt'),
    'utf8'
  )
  return { props: { disclaimer } }
}

export default DisclaimerPage

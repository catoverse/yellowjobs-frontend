import * as React from 'react'
import Navbar from 'components/navbar'
import { Box, Text, Heading } from "@chakra-ui/react"
import path from 'path'
import fs from 'fs'


const DisclaimerPage = ({ disclaimer }) => {

  return (
    <>
      <Navbar/>
      <Box m="1.5rem">
        <Heading as="h2" size="2xl" p="1rem">DISCLAIMER</Heading>
        
        {disclaimer.split('\n').map((x, idx) => (
          <Text  fontSize="md" key={idx} p="0.5rem">
            {x}
          </Text>
        ))}
      </Box>
      {/* <Footer /> */}
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
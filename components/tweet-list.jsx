import styled from '@emotion/styled'
import Container from './container'
import { Tweet } from 'react-static-tweets'
import { Box } from '@chakra-ui/react'

const MasonaryGrid = styled(Box)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 400px;
  max-height: 1000px;

  @media (max-width: 30rem) {
    flex-direction: row;
    gap: 1rem;
    max-height: none;
  }
`

export default function TweetList() {
  return (
    <Box as="section" my={5}>
      <Container>
        <MasonaryGrid mt="5">
          <Tweet id="1404411232669638660" />
          <Tweet id="1403847095602216961" />
          <Tweet id="1403845000740364291" />
          <Tweet id="1401811181128458240" />
          <Tweet id="1400452232135405568" />
          <Tweet id="1400452232135405568" />
          <Tweet id="1400452232135405568" />
          <Tweet id="1400452232135405568" />
        </MasonaryGrid>
      </Container>
    </Box>
  )
}

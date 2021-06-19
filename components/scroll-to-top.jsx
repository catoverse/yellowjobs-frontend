import ScrollToTop from 'react-scroll-to-top'
import { Center } from '@chakra-ui/react'
import { FiChevronUp } from 'react-icons/fi'
import styled from '@emotion/styled'

const CustomScrollToTopButton = styled(ScrollToTop)`
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  transition: opacity 1s ease-in-out;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
  outline: none;
`

const ScrollButton = () => {
  return (
    <Center color="yellow.400" fontSize="4xl">
      <FiChevronUp />
    </Center>
  )
}

export default function ScrollToTopButton() {
  return <CustomScrollToTopButton smooth component={<ScrollButton />} />
}

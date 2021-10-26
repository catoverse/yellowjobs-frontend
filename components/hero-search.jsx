import { Box, Flex, SimpleGrid, VStack, HStack, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import Container from './container'
import LoopHeading from './loop-heading'
import SearchedRoleButton from './searched-role-button'
import SearchBar from './search-bar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function HeroSearch({ categories }) {
  const router = useRouter()
  const [searchedRoles, setSearchedRoles] = useState([])

  useEffect(() => {
    if (router.query.s) {
      const keyword = router.query.s.replace(/ /g, ' ')
      setSearchedRoles(keyword.split(','))
    }
  }, [router.query])

  const removeRole = (index) => {
    const searchedValues = searchedRoles
    searchedValues.splice(index, 1)
    router.push({
      pathname: '/search',
      query:
        searchedValues.length === 0
          ? {}
          : {
              s: searchedValues.join(','),
            },
    })
  }

  return (
    <Box
      as="main"
      overflow="hidden"
      bgGradient="linear(225deg, #FFDD00 0%, #FCCD53 100%)"
    >
      <Container>
        <VStack spacing="4" my={8}>
          <LoopHeading />
          <SearchBar categories={categories} />
          <Flex flexWrap="wrap">
            {searchedRoles.map((searchedRole, index) => {
              return (
                <SearchedRoleButton
                  text={searchedRole}
                  onClose={() => removeRole(index)}
                  key={index}
                />
              )
            })}
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}

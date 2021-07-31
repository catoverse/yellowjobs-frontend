import { HStack, IconButton } from '@chakra-ui/react'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import { useRouter } from 'next/router'

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete'

export default function SearchBar({ categories }) {
  const router = useRouter()

  const allRoles = [];
  categories.forEach((category) => {
    allRoles.push(...category.roles)
  })

  const onAutoCompleteSelect = (selectedValue) => {
    if (selectedValue === '') return
    const oldSearchQuery = router.query.s
    const searchValue = oldSearchQuery ? [...oldSearchQuery.split(','), selectedValue] : [selectedValue]
    router.push({
      pathname: '/search',
      query: {
        s: searchValue.join(','),
      },
    })
  }

  return (
    <HStack spacing="0" w="100%" maxW="lg">
      <AutoComplete rollNavigation w="100%" onChange={onAutoCompleteSelect}>
        <AutoCompleteInput
          w="100%"
          size="lg"
          fontSize="sm"
          bg="white"
          autoFocus
          spellCheck="false"
          variant="filled"
          _hover={{ bg: 'white', shadow: 'lg' }}
          _focus={{ bg: 'white', shadow: '2xl' }}
          variant="filled"
          borderRightRadius="none"
          colorScheme="whiteAlpha"
          placeholder="search for jobs, skills, techstack...."
        />
        <AutoCompleteList className="custom-scrollbar">
          {allRoles.map((option, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={option}
              textTransform="capitalize"
            >
              {option}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      <IconButton
        aria-label="search"
        size="lg"
        colorScheme="blue"
        borderLeftRadius="none"
        icon={<SearchIcon />}
      />
    </HStack>
  )
}

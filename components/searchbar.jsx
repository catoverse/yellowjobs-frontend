import { HStack, IconButton } from '@chakra-ui/react'
import { FiSearch as SearchIcon } from 'react-icons/fi'

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete'

import searchKeywords from 'lib/search-keywords'

export default function SearchBar() {
  const options = Object.keys(searchKeywords)

  return (
    <HStack spacing="0">
      <AutoComplete rollNavigation>
        <AutoCompleteInput
          minW={{ base: '96%', md: 'lg' }}
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
        <AutoCompleteList>
          {options.map((option, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={option}
              textTransform="capitalize"
            >
              {searchKeywords[option]}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      <IconButton
        size="lg"
        colorScheme="blue"
        borderLeftRadius="none"
        icon={<SearchIcon />}
      />
    </HStack>
  )
}

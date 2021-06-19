import { HStack, IconButton } from '@chakra-ui/react'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import styled from '@emotion/styled'
import searchKeywords from 'lib/search-keywords'

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete'

const CustomScrollBarAutoCompleteList = styled(AutoCompleteList)`
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`

export default function SearchBar() {
  const options = Object.keys(searchKeywords)

  return (
    <HStack spacing="0" w="100%" maxW="lg">
      <AutoComplete rollNavigation w="100%">
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
        <CustomScrollBarAutoCompleteList>
          {options.map((option, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={option}
              textTransform="capitalize"
            >
              {searchKeywords[option]}
            </AutoCompleteItem>
          ))}
        </CustomScrollBarAutoCompleteList>
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

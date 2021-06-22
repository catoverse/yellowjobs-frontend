import {
  Box,
  HStack,
  Text,
  Button,
  CloseButton,
  InputGroup,
  Input,
  InputRightElement,
  SimpleGrid,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import styled from '@emotion/styled'
import { useModal } from 'contexts/modal-context'
import { subCategories } from 'lib/design-subcategories'

const CustomScrollBarGrid = styled(SimpleGrid)`
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

export default function CategoriesMenu() {
  const { isOpen, onClose } = useModal()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="4xl">
        <Box shadow="md" p="5" bg="white" borderRadius="lg">
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.500">
              Options available in Design
            </Text>
            <CloseButton onClick={onClose} />
          </HStack>

          <Box as="hr" mt="4" />

          <InputGroup maxW="xs" w="100%" mt="5">
            <Input
              variant="flushed"
              placeholder="search for design categories..."
            />
            <InputRightElement children={<FiSearch />} />
          </InputGroup>

          {/* grid */}
          <CustomScrollBarGrid
            columns="4"
            spacing="6"
            mt="10"
            maxH="3xs"
            overflowY="auto"
          >
            {subCategories.map((category) => (
              <Checkbox>{category}</Checkbox>
            ))}
          </CustomScrollBarGrid>

          <Box as="hr" mt="10" />
          <HStack mt="5" justify="flex-end">
            <Button variant="ghost" color="gray.500">
              Clear filters
            </Button>
            <Button colorScheme="blue">Apply filters</Button>
          </HStack>
        </Box>
      </ModalContent>
    </Modal>
  )
}

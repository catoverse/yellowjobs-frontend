import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'

export default function SearchedRoleButton({ text, onClose }) {
  return (
    <Tag
      size="md"
      variant="solid"
      colorScheme="yellow"
      borderRadius="full"
      px={{ base: '2', md: '3' }}
      mr="2"
      mb="2"
    >
      <TagLabel>{text}</TagLabel>
      <TagCloseButton onClick={onClose} />
    </Tag>
  )
}

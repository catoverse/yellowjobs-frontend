import { Button } from '@chakra-ui/react'

export default function PopularButton({ text }) {
  return (
    <Button size="sm" variant="outline" fontWeight="normal" borderColor="white">
      {text}
    </Button>
  )
}

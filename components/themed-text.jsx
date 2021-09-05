import { Text, Heading } from '@chakra-ui/react'

export function ThemedText({ children }) {
  return (
    <h1
      style={{
        'text-align': 'center',
        'font-size': '1.6rem',
        'font-weight': 'normal',
      }}
    >
      {children}
    </h1>
  )
}

export function Emphasis({ children }) {
  return (
    <span
      style={{
        'font-weight': 'bold',
        background:
          'linear-gradient(180deg, #fff 0%, #fff 50%, #ffdd00 50%, #fccd53 100%)',
      }}
    >
      {children}
    </span>
  )
}

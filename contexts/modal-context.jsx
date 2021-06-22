import { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

const ModalContext = createContext()

function ModalProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  )
}

function useModal() {
  return useContext(ModalContext)
}

export { ModalProvider, useModal }

import { createContext, useContext } from 'react'
import { useCheckboxGroup } from '@chakra-ui/react'

const RolesContext = createContext()

function RolesProvider({ children }) {
  const { value, setValue } = useCheckboxGroup()

  return (
    <RolesContext.Provider value={[ value, setValue ]}>
      {children}
    </RolesContext.Provider>
  )
}

function useRoles() {
  return useContext(RolesContext)
}

export { RolesProvider, useRoles }

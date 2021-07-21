import { createContext, useContext, useState } from 'react'

const SelectedRolesContext = createContext()

function SelectedRolesProvider({ children }) {
  const [selectedRoles, setSelectedRoles] = useState([])

  return (
    <SelectedRolesContext.Provider value={[ selectedRoles, setSelectedRoles ]}>
      {children}
    </SelectedRolesContext.Provider>
  )
}

function useSelectedRoles() {
  return useContext(SelectedRolesContext)
}

export { SelectedRolesProvider, useSelectedRoles }

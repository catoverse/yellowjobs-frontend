import { createContext, useContext, useState } from 'react'

const SelectedCategoryContext = createContext()

function SelectedCategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('Tech')

  return (
    <SelectedCategoryContext.Provider value={[ selectedCategory, setSelectedCategory ]}>
      {children}
    </SelectedCategoryContext.Provider>
  )
}

function useSelectedCategory() {
  return useContext(SelectedCategoryContext)
}

export { SelectedCategoryProvider, useSelectedCategory }

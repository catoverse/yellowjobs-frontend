import { createContext, useContext, useState } from 'react'

const SelectedCategoriesContext = createContext()

function SelectedCategoriesProvider({ children }) {
  const [selectedCategories, setSelectedCategories] = useState([])

  return (
    <SelectedCategoriesContext.Provider
      value={[selectedCategories, setSelectedCategories]}
    >
      {children}
    </SelectedCategoriesContext.Provider>
  )
}

function useSelectedCategories() {
  return useContext(SelectedCategoriesContext)
}

export { SelectedCategoriesProvider, useSelectedCategories }

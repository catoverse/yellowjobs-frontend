import { createContext, useContext, useState } from 'react'

const OpenedCategoryContext = createContext()

function OpenedCategoryProvider({ children, categories }) {
  const [openedCategory, setOpenedCategory] = useState(categories[0])

  return (
    <OpenedCategoryContext.Provider value={[ openedCategory, setOpenedCategory ]}>
      {children}
    </OpenedCategoryContext.Provider>
  )
}

function useOpenedCategory() {
  return useContext(OpenedCategoryContext)
}

export { OpenedCategoryProvider, useOpenedCategory }

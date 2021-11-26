import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const VisitCounterContext = createContext()

function VisitCounterProvider({ children }) {
  const [visitCounter, setVisitCounter] = useState(0)

  const { pathname } = useRouter()

  useEffect(() => {
    // Adds number of hits or page view counter to the footer and sets visitCounter state globally
    setVisitCounter((prev) => prev + 1)
  }, [pathname])

  return (
    <VisitCounterContext.Provider value={{ visitCounter }}>
      {children}
    </VisitCounterContext.Provider>
  )
}

function useVisitCounter() {
  return useContext(VisitCounterContext)
}

export { VisitCounterProvider, useVisitCounter }

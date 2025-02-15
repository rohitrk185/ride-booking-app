import { createContext, useContext, useState } from 'react'

export const CaptainDataContext = createContext()

export const useCaptain = () => {
  const context = useContext(CaptainDataContext)
  if (!context) {
    throw new Error('useCaptain must be used within a CaptainProvider')
  }
  return context
}

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: '',
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
  }

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  )
}

export default CaptainContext

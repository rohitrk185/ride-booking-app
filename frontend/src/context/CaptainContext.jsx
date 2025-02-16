import { createContext, useContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const CaptainDataContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useCaptain = () => {
  const context = useContext(CaptainDataContext)
  if (!context) {
    throw new Error('useCaptain must be used within a CaptainProvider')
  }
  return context
}

// eslint-disable-next-line react/prop-types
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

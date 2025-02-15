import { createContext, useContext, useState } from 'react'

export const UserDataContext = createContext()

export const useUser = () => {
  const context = useContext(UserDataContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: '',
    },
  })

  const value = {
    user,
    setUser,
  }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext

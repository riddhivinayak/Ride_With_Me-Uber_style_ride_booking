import React from 'react'
export const UserdataContext = React.createContext()
const UserContext = ({ children }) => {
  const [user, setUser] = React.useState(
    {
      fullname:
       {
        firstName: '', lastName: ''
      },
      email: '',
    }
    
  )
  return (
    <div>
      <UserdataContext.Provider value={{ user, setUser }}>
        {children}
      </UserdataContext.Provider>
    </div>
  )
}

export default UserContext

import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

 export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
const [userData,setUserData] = useState(null)
console.log('AuthProvider initialized');


useEffect(() => {
    setLocalStorage()
  const {employees,admin} = getLocalStorage()
  setUserData({employees,admin})
//   console.log(userData)
}, [])




    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>

        </div>
    )
}

export default AuthProvider

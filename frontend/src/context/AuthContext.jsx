import React from 'react'
import { createContext } from 'react'
export const authDataContext= createContext()
function AuthContext({children}) {
    let serverUrl = "https://five-onecart-backend-455p.onrender.com"

    let value = {
       serverUrl
    }
  return (

    
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext

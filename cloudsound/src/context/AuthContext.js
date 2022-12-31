import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let contextData = {
       
    }

    return (
        <AuthContext.Provider value={{contextData}}>
            {children}
        </AuthContext.Provider>
    )
} 
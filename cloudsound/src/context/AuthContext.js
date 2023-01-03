import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)

    const navigate = useNavigate()

    let loginUser = async (e ) => {
        e.preventDefault()
        let response = await fetch('http://localhost:8000/api/token/',{ 
        method:'POST', 
        headers: {
            'content-type':'application/json'
        }, 
        body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        }) 
        let data = await response.json()
        if(response.status === 200 ){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        } else {
            alert('something went wrong!')
        }
    }

    let contextData = {
        user:user,
       loginUser:loginUser
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
} 



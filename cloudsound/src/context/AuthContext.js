import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

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

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let updateToken = async (e) => {
        console.log('update token called')
        let response = await fetch('http://localhost:8000/api/token/refresh/',{ 
        method:'POST', 
        headers: {
            'content-type':'application/json'
        }, 
        body:JSON.stringify({'refresh':authTokens.refresh})
    }) 
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }
    }

    let contextData = {
        user:user,
       loginUser:loginUser,
       logoutUser:logoutUser
    }

    useEffect(() => {
        let fourminutes = 1000 * 60 * 4
       let interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
            //method is called every two seconds
        }, fourminutes)
        //ensures we dont go in a infinite loop 
        return ()=> clearInterval(interval)
    }, [authTokens, loading] )

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
} 



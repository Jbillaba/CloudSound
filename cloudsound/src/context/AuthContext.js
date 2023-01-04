import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom'
import Upload from '../Components/Upload';

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

    let registerUser = async (e) => { 
        e.preventDefault()
        let response = await fetch('http://localhost:8000/api/register/', {
            method:'POST',
            headers: {
                'content-type': 'application/json',

            },
            body:JSON.stringify({
                'name':e.target.name.value,
                'email':e.target.email.value,
                'username':e.target.username.value,
                'password':e.target.password.value,
            })
        })
           if(response.status === 200){
            alert("user created succesfully")
            navigate('/login')
           } else if(response.status >= 400 ){
            alert("something went wrong, try again")
           } 
        } 
            
    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let updateToken = async (e) => {
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

    // from this point onward itll be functions to allow the app to function like song uploads and playlist creation 

    let uploadSong = async (e) => {
        let response = await fetch('http://localhost:8000/songs/', {
            method:"POST",
            headers: {
                'content-type':'application/json',
                'Authorization': authTokens
            },
            body:JSON.stringify({
                'name':e.target.name.value, 
                'image':e.target.image.value, 
                'audio_file':e.target.audio_file.value
            })
        })
            if(response.status === 200){
                alert("song uploaded successfully !")
            } else if(response.status >= 400){
                alert("something went wrong, try again ")
            }
    }

    let contextData = {
        user:user,
       loginUser:loginUser,
       logoutUser:logoutUser,
       registerUser:registerUser,
       uploadSong:uploadSong
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



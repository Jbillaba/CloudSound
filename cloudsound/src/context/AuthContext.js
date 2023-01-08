import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import {Form, useNavigate} from 'react-router-dom'

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
                'content-type': 'application/json'
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

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    let uploadSong = async (e) => { 
        let username = user.username
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', e.target.image.files[0]);
        formData.append('name', e.target.name.value);
        formData.append('audio_file', e.target.audio_file.files[0]);
        formData.append('uploader', username.value)
        
        let response = await fetch('http://localhost:8000/songs/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + String(authTokens.access),
            'X-CSRFToken': csrftoken
          },
          body: formData
        });
        if (response.status === 201) {
          alert("song uploaded!")
        } else { 
          alert("something went wrong!")
        }
      }

      let makePlaylist = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', e.target.image.files[0]);
        // makes an array of songs from ithe input value of it 
        let songs = e.target.songs.value.split(",").map(song => song.trim());
        // now we just it to the formdata thingy
        formData.append('songs', songs)
        formData.append('name', e.target.name.value)

        let response = await fetch('http://localhost:8000/playlists/', {
            method:"POST",
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access),
                'X-CSRFToken': csrftoken
            },
            body: formData
        });
        if (response.status === 201){
            alert("Playlist created !")
        } else {
            alert('Something Went Wrong')
        }
      }


    let contextData = {
        user:user,
       loginUser:loginUser,
       logoutUser:logoutUser,
       registerUser:registerUser,
       uploadSong:uploadSong,
       makePlaylist:makePlaylist
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



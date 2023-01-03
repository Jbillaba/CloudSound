import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from "../context/AuthContext"



export default function Login () {
    let {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const routeChange = () => {
        let path = '/register'
        navigate(path)
    }
    
    return (
        <div>
         <form onSubmit={loginUser}>
            <input type="text" name ="username" placeholder='Enter Your username' />
            <input type="password" name ="password" placeholder='Enter Your password' />
            <input type="submit" />
        </form>

        <button onClick={routeChange}> Register </button>
        </div>
    )
}
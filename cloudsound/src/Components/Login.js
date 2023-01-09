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
         <form className='login-form' onSubmit={loginUser}>
            <input type="text" name ="username" placeholder='Enter Your username' />
            <br/>
            <input type="password" name ="password" placeholder='Enter Your password' />
            <br/>
            <input type="submit" />
        </form>

        <button onClick={routeChange}> Register </button>
        </div>
    )
}
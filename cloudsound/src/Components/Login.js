import {useContext} from 'react'
import AuthContext from "../context/AuthContext"



export default function Login () {
    let {loginUser} = useContext(AuthContext)
    let {user} = useContext(AuthContext)
    return (
        <div>
         <form onSubmit={loginUser}>
            <input type="text" name ="username" placeholder='Enter Your username' />
            <input type="password" name ="password" placeholder='Enter Your password' />
            <input type="submit" />
        </form>
        </div>
    )
}
import {useContext} from 'react'
import AuthContext from "../context/AuthContext"



export default function Login () {
    let {loginUser} = useContext(AuthContext)
    
    return (
        <div>
         <form onSubmit={loginUser}>
            <input type="email" name ="email" placeholder='Enter Your email' />
            <input type="password" name ="password" placeholder='Enter Your password' />
            <input type="submit" value="submit"></input>
        </form>
        </div>
    )
}
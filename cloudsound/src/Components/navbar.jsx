import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"

export default function NavBar () {
    let {user} = useContext(AuthContext)
    return (
       <ul className="nav-bar">
        <Link to='/discover'>Discover</Link>
        <Link to='/upload'>Upload</Link>
        
        {user ? (
            <p>Logout</p>
        ): (
            <Link to='/login'>Login</Link>
        )}

        <Link to='/'>Debug</Link>
       </ul>
    )
}
import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"

export default function NavBar () {
    let {user, logoutUser} = useContext(AuthContext)
    return (
       <div className="nav-bar">
        <Link className="nav-links" to='/discover'>Discover </Link>
        <Link className="nav-links" to='/upload'>Upload </Link>
        
        {user ? (
            <Link className="nav-links" to='/profile'>profile </Link>
            
        ): (
            null
        )}

        {user ? (
            <p className="nav-bar" onClick={logoutUser}>Logout</p>
        ): (
            <Link className="nav-links" to='/login'>Login</Link>
        )}
        


       </div>
    )
}
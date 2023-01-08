import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"

export default function NavBar () {
    let {user, logoutUser} = useContext(AuthContext)
    return (
       <div className="nav-bar">
        <Link to='/discover'>Discover</Link>
        <Link to='/upload'>Upload</Link>
        
        {user ? (
            <Link to='/profile'>profile</Link>
            
        ): (
            null
        )}

        {user ? (
            <p className="nav-bar" onClick={logoutUser}>Logout</p>
        ): (
            <Link to='/login'>Login</Link>
        )}
        


       </div>
    )
}
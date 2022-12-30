import { Link } from "react-router-dom"

export default function NavBar () {
    return (
       <ul className="nav-bar">
        <Link to='/discover'>
            <h2>Discover</h2>
        </Link>
        <Link to='/upload'>
            <h2>Upload</h2>
        </Link>
        <Link to='/user'>
            <h2>User</h2>
        </Link>
        <Link to='/login'>
            <h2>Login</h2>
        </Link>
        <Link to='/'>
            <h2>Debug</h2>
        </Link>
       </ul>
    )
}
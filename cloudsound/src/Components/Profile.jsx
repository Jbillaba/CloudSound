import e from "cors"
import jwtDecode from "jwt-decode"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

export default function Profile () {
    let {user} = useContext(AuthContext)
    let navigate = useNavigate()

    let username = user.username

    const RouteToMakePlaylist = () => {
        navigate('/playlist')
    }

    return( 
        <div>
            <h1> welcome, {username}</h1>
            <button onClick={RouteToMakePlaylist}> Make A PlayList </button>
        </div>
    )
}

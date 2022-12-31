import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function Debug () {
    let {name} = useContext(AuthContext)
    return (
        <div>
            <h2> this is a debug room so i dont use all my requests on the free tier of amazon </h2>
            <h2> hello, {name}</h2>        
        </div>

    )
}
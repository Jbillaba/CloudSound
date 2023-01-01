import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import Player from "./AudioPlayer"

export default function Debug () {
    let {name} = useContext(AuthContext)
    return (
        <div>
            <h2> this is a debug room so i dont use all my requests on the free tier of amazon </h2>
            <h2> below should be a audio player </h2> 
            <Player />
        </div>

    )
}

import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function Upload () {
let {uploadSong } = useContext(AuthContext)
    return (
        <div>
            <h1>Upload A Song</h1>
                <form onSubmit={uploadSong}>
                        <input id="name" type="text" name="name" placeholder="Enter Song Name" />
                        <p> enter Cover Art... </p>
                        <input id="image" type='file' name="image" accept="image/*"  />
                        <p> enter audio file... </p>
                        <input id="audio" type='file' name='audio_file' accept='audio/*'/>
                        <br />
                        <br />
                        <input  type="submit"/>
                </form>
        </div>
    )
}
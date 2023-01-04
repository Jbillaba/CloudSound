import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"


export default function Upload () {
    let {uploadSong} = useContext(AuthContext)
    return (
        <div>
            <h1>Upload A Song</h1>
            <p> .jpg and png image formats taken only as well as .wav and .mp3 for audio files </p>
            <form onSubmit={uploadSong}>
                <input type="name" name="name" placeholder="enter the song's name" />
                <h3> enter the cover art here </h3>
                <input type='file' name="image" accept=".png, .jpg"/>
                <h3> enter audio file here</h3>
                <input type='file' name="audio_file" accept=".wav, .mp3"/>
                <br/>
                <br />
                <input type="submit"/>
            </form>
        </div>
    )
}
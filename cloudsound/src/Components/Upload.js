import jwtDecode from "jwt-decode"
import { useState } from "react"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function Upload () {
let {uploadSong, authtokens } = useContext(AuthContext)
    

    return (
        <div>
            <h1>Upload A Song</h1>
                <form onSubmit={uploadSong}>
                        <input type="text" name="name" placeholder="Enter Song Name" />
                        <p> enter Cover Art... </p>
                        <input type='file' name="image" accept="image/*"  />
                        <p> enter audio file... </p>
                        <input type='file' name='audio_file' accept='audio/*'/>
                        <br />
                        <input id="submit-button" type="submit"/>
                </form>
        </div>
    )
}
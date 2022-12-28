import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL_SONGS } from "../globals"
import axios from "axios"
// this is the landing page for signed in "state"

export default function Discover () {

    let navigate = useNavigate()
 

    const [ songs, setSongs ] = useState(null)

    useEffect(() => {
        const getSongs = async () => {
            const response = await axios.get(`${BASE_URL_SONGS}`)
            setSongs(response.data)
            console.log(response.data)
        }
        getSongs()
    }, [])

    if(!songs){
        return <h2> Thats Awkward, Sorry Were Loading Songs...</h2>
    }
    return (
        <div className="discover-container">
            <h1> this is the discover page </h1>
            <div className="discover-grid">
                {
                    songs.map((song) => (
                        <div className="song-card" key={song.id}>
                        <h2>{song.name}</h2>
                        <h3>{song.uploader}</h3>
                        <audio src={song.audio_file} controls></audio>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
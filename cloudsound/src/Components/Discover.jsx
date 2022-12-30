import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL_SONGS } from "../globals"
import axios from "axios"
import comet from './images/Shape01.png'

// this is the landing page for signed in "state"

export default function Discover () {

    let navigate = useNavigate()
 

    const [ songs, setSongs ] = useState(null)

    useEffect(() => {
        const getSongs = async () => {
            const response = await axios.get(`${BASE_URL_SONGS}`)
            setSongs(response.data)
        }
        getSongs()
    }, [])



    if(!songs){
        return(
            <div>
                <img className="rotate-error-img" src={comet} alt="" />
                <h2> Thats Awkward, Sorry Were Loading Songs...</h2>
            </div>
        ) 
    }
    return (
        <div className="discover-container">
            <h1> this is the discover page </h1>
            <div className="discover-grid">
                {
                    songs.map((song) => (
                        <div className="song-card" key={song.id}>
                        <img className="song-img" src={song.image} alt="song" />
                        <h2>{song.name}</h2>
                        <audio src={song.audio_file} controls></audio>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
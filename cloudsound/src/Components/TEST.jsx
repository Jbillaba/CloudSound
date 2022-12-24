import { useEffect, useState } from "react" 
import axios from 'axios'
import {  BASE_URL_SONGS } from '../globals'


export default function Test() {

    const [songs, setSongs] = useState(null)



    useEffect(() => {
        const getSongs = async () => {
            const response = await axios.get(`${BASE_URL_SONGS}`)
            setSongs(response.data)
            // console.log(response.data)
        }
        
        getSongs()
    }, [])

    console.log(songs)

    return (
        <div>
            <h2> this is a test to see if the audio works from the database </h2>
            <h2>{songs.name}</h2>
            <audio controls src={songs.audio_file}></audio>
        </div>

    )
    }
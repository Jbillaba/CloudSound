import { useEffect, useState } from "react" 
import axios from 'axios'
import {  BASE_URL_SONGS } from '../globals'


export default function Test() {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        const getSongs = async () => {
            const response = await axios.get("http://localhost:8000/songs/")
            setSongs(response.data)
            console.log(response.data)
        }
        
        getSongs()
    }, [])

    return (
        <div>
            <h2>
                this is a test to see if the audio works from the database 
            </h2>
        </div>
    )
    }
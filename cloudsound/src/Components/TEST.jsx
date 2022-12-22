import { useEffect, useState } from "react" 
import axios from 'axios'
import {  BASE_URL_SONGS } from '../globals'


export default function Test() {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        const getSongs = async () => {
            const response = await axios.get(`${BASE_URL_SONGS}`)
            setSongs(response.data.song)
            console.log(response.data.song)
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
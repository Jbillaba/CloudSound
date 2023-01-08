import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AudioPlayer from 'react-h5-audio-player'
import  'react-h5-audio-player/lib/styles.css' ;

const SongDetail = () => {
    let {id} = useParams()

    const [songDetails, setSongDetails] = useState()
    const [songPlaying, setSongPlaying] = useState()

    useEffect(() => {
        const getSongDetails = async () => {
            const response = await axios.get(`http://localhost:8000/songs/${id}`)

            setSongDetails(response.data)
        }
        getSongDetails()
    }, [])
if(!songDetails){
    return <h1> Loading Data...</h1>
} else {
  return (
    <div className='SongDetailsContainer'>
        <h1>{songDetails.name}</h1>
        <img src={songDetails.image} />
        <h3>{songDetails.created_on}</h3>
    </div>
  )
}
}

export default SongDetail

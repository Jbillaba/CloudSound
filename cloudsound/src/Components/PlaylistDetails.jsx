import {useState, useEffect} from 'react'
import {BASE_URL_PLAYLISTS} from '../globals'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/react'


const PlaylistDetails = () => {

    let { id } = useParams()
    
    const [PlaylistDetails, setPlaylistDetails] = useState(null)
    const [PlaylistSongs, setPlaylistSongs] = useState(null)

useEffect(() => {
    const getPlaylistDetails = async () => {
        const response = await axios.get(`http://localhost:8000/playlists/${id}`)

        setPlaylistDetails(response.data)
        setPlaylistSongs(response.data.songs)
    }
    getPlaylistDetails()
}, [])

if(!PlaylistDetails){
    return <h2>Loading Playlist...</h2>
} else {
  return (
    <div  className='playlist-details'>
    <img src={PlaylistDetails.image} alt="" />
      <h1 className='playlist-title'>{PlaylistDetails.name}</h1>
      <p>songs</p>
      <div>
      {
        PlaylistSongs.map((PlaylistSong) => (
            <div className='playlist-songs'>
                <p>{PlaylistSong.name}</p>
                <audio src={PlaylistSong.audio_file} controls/>
            </div>
        ))
      }
      </div>
    </div>
  )
}
}
export default PlaylistDetails

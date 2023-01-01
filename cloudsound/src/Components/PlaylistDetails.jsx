import {useState, useEffect} from 'react'
import {BASE_URL_PLAYLISTS} from '../globals'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/react'


const PlaylistDetails = () => {

    let { id } = useParams()
    
    const [PlaylistDetails, setPlaylistDetails] = useState(null)
useEffect(() => {
    const getPlaylistDetails = async () => {
        const response = await axios.get(`http://localhost:8000/playlists/${id}`)

        setPlaylistDetails(response.data)
    }
    getPlaylistDetails()
}, [])

if(!PlaylistDetails){
    return <h2>Loading Playlist...</h2>
} else {
  return (
    <div  className='playlist-details'>
      <h1 className='playlist-title'>{PlaylistDetails.name}</h1>
      {
        PlaylistDetails.map((PlaylistDetail) => (
            <div className='playlist-songs'>
                <h2>{}</h2>
            </div>
        ))
      }
    </div>
  )
}
}
export default PlaylistDetails

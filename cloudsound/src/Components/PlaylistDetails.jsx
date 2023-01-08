import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import AudioPlayer from 'react-h5-audio-player' ;
import  'react-h5-audio-player/lib/styles.css' ;

const PlaylistDetails = () => {

    let { id } = useParams()
    
    const [PlaylistDetails, setPlaylistDetails] = useState(null)
    const [PlaylistSongs, setPlaylistSongs] = useState(null)
    const [songPlaying, setSongPlaying ] = useState(null)

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
            <div onClick={ () => { setSongPlaying(PlaylistSong.audio_file)} } className='playlist-songs' key={PlaylistSong.id}>
                <img src={PlaylistSong.image} />
                <p>{PlaylistSong.name}</p>
            </div>
        ))
      }
      </div>
      <div>
        <AudioPlayer 
        className='audioPlayer'
        src={songPlaying} />
      </div>
    </div>
  )
}
}
export default PlaylistDetails

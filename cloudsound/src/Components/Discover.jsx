import { useEffect, useState } from "react"
import { Route, useNavigate } from "react-router-dom"
import { BASE_URL_SONGS } from "../globals"
import {BASE_URL_PLAYLISTS} from '../globals'
import axios from "axios"
import comet from './images/Shape01.png'
import AudioPlayer from 'react-h5-audio-player' ;
import  'react-h5-audio-player/lib/styles.css' ;
import SongDetail from "./SongDetail"

// this is the landing page for signed in "state"

export default function Discover ( props ) {

    let navigate = useNavigate()
    
    const showPlaylist = (id) => {
        navigate(`/playlists/${id}`)
    }

    const RouteToSong = (id) => {
        navigate(`/songs/${id}`)
    }

    const [ songs, setSongs ] = useState(null)
    const [ playlists, setPlaylists ] = useState(null)
    const [ songPlaying , setSongPlaying ] = useState(null)

    // for songs 
    useEffect(() => {
        const getSongs = async () => {
            const response = await axios.get(`${BASE_URL_SONGS}`)
            setSongs(response.data)
        }
        getSongs()
    }, [])


    // for playlists 
    useEffect(() => {
        const getPlaylists = async () => {
            const response = await axios.get(`${BASE_URL_PLAYLISTS}`)
            setPlaylists(response.data)
        }
        getPlaylists()
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
        <div className="regualar">
            <div className="left">
            </div>
            <div className="right">
            </div>
        <div className="discover-container">
            <h1> this is the discover page </h1>
            <div className="discover-grid">
                {
                    songs.map((song) => (
                        <div onClick={ () => { setSongPlaying(song.audio_file)} }  className="song-card" key={song.id}>
                        <img className="song-img" src={song.image} alt="song" />
                        <div className="playable-tile-description">
                        <p className="songName" onClick={ () => RouteToSong(song.id)} >{song.name}</p>
                        </div>
                        </div>
                    ))
                }
            </div>

            <div className="discover-grid">
                {
                    playlists.map((playlist) => (
                        <div className="song-card" key={playlist.id}>
                            <div className="playable-tile-description"> 
                            <p onClick={ () => showPlaylist(playlist.id)} className="songName">{playlist.name}</p>
                            </div>
                            <img className="song-img" src={playlist.image} alt="playlist" />
                        </div>
                    ))
                }
            </div>
            
        </div>
        <div className="audioplayer-container"> 
                <AudioPlayer 
                className="audioPlayer"
                    src={songPlaying}
                />
            </div>
      </div>
    )
}
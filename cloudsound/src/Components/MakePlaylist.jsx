import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL_SONGS } from "../globals"
import axios from 'axios'
import Select from 'react-select'
import  AuthContext  from '../context/AuthContext'

 // for help with the multi options and search i used this article https://contactmentor.com/react-dropdown-search-multi-select/


const MakePlaylist = () => {
  let {makePlaylist} = useContext(AuthContext)
  const [songs, setSongs] = useState([])
  const [selectedSongs, setSelectedSongs] = useState()
  let navigate = useNavigate()

  useEffect(() => {
    const getSongs = async () => {
      const response = await axios.get(`${BASE_URL_SONGS}`)
      setSongs(response.data)
    }
    getSongs()
  }, [])

const songOptions = songs.map(song => ({
  value: song.id, 
  label: song.name
}))

  const RouteChange = () => {
    navigate('/')
  }

  function handleSelect(data){
    setSelectedSongs(data)
  }

  return (
    <div>
      create a playlist 
      <br/>
      <br />
      <form onSubmit={makePlaylist}>
        <input type="text" name='name' placeholder='Enter Playlist Name..'/>
        <br/>
        <br />
        <input type="file" name='image' accept='image/*'/>
        <br />
        <br />
        <Select 
        name='songs'
        options={songOptions}
        placeholder="select song's"
        value={selectedSongs}
        onChange={handleSelect}
        isSearchable={true}
        isMulti
        />
        <br />
        <input type="submit" />
        </form>
       <br />
      <button onClick={RouteChange}> Go Back</button>
    </div>
  )
}

export default MakePlaylist

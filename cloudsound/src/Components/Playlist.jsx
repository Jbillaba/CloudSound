import React, { useState, useEffect } from 'react'
import { BASE_URL_SONGS } from "../globals"
import axios from 'axios'

const Playlist = () => {
  const [songs, setSongs] = useState([])
  const [selected, setSelected] = useState([])


  useEffect(() => {
    const getSongs = async () => {
      const response = await axios.get(`${BASE_URL_SONGS}`)
      setSongs(response.data)
    }
    getSongs()
  }, [])

  const handleChange = (e) => {
    setSelected(e.target.value)
  }


  return (
    <div>
      create a playlist 
        <form>
          <select
          value={selected}
          onChange={handleChange}
          > 
          </select>
          <br/>
            <input type="submit"/>
        </form>

    </div>
  )
}

export default Playlist

import { useContext, createContext, useEffect, useState } from "react";

const AudioPlayerContext = createContext()
export default AudioPlayerContext

export const AudioPlayerProvider = ({children}) => {
    const [songPlaying, setSongPlaying] = useState()

    let contextData = {

    }

    return (
        <AudioPlayerContext.Provider value={contextData}>
            {children}
        </AudioPlayerContext.Provider>
    )
}
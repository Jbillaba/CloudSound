import { Route, Routes } from "react-router-dom";
import Discover from "./Discover";
import Upload from "./Upload";
import Profile from "./Profile";
import Login from "./Login";
import Logout from './logout'
import Register from './Register'
import PrivateRoute from '../utils/PrivateRoute'
import PlaylistDetails from "./PlaylistDetails";
import Playlist from './MakePlaylist'
import SongDetail from "./SongDetail";

export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/discover" element={<Discover />}/>
                <Route exact path="/playlist" element={<Playlist />} />
                <Route exact path="/playlists/:id" element={<PlaylistDetails />} />
                <Route exact path="/songs/:id" element={<SongDetail />} />
                <Route exact path="/upload" element={<PrivateRoute />}> 
                <Route exact path="/upload" element={<Upload />} />
                </Route>
                <Route exact path="/logout" element={<Logout />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
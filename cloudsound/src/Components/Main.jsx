import { Route, Routes } from "react-router-dom";
import Discover from "./Discover";
import Upload from "./Upload";
import Debug from "./Debug";
import Login from "./Login";
import Logout from './logout'
import Register from './Register'
import PrivateRoute from '../utils/PrivateRoute'
import PlaylistDetails from "./PlaylistDetails";

export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Debug />} />
                <Route exact path="/discover" element={<Discover />}/>
                <Route exact path="/playlists/:id" element={<PlaylistDetails />} />
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
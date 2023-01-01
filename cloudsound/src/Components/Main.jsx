import { Route, Routes } from "react-router-dom";
import Discover from "./Discover";
import Upload from "./Upload";
import Debug from "./Debug";
import User from "./User";
import PrivateRoute from '../utils/PrivateRoute'

export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Debug />} />
                <Route exact path="/discover" element={<Discover />}/>
                <Route exact path="/upload" element={<PrivateRoute />}> 
                <Route exact path="/upload" element={<Upload />} />
                </Route>
                <Route exact path="/user" element={<User />} />
            </Routes>
        </div>
    )
}
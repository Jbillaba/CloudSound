import { Route, Routes } from "react-router-dom";
import Discover from "./Discover";
import Upload from "./Upload";
import Debug from "./Debug";
import User from "./User";

export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Debug />} />
                <Route exact path="/discover" element={<Discover />}/>
                <Route exact path="/upload" element={<Upload />} />
                <Route exact path="/user" element={<User />} />
            </Routes>
        </div>
    )
}
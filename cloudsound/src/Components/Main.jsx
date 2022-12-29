import { Route, Routes } from "react-router-dom";
import Discover from "./Discover";
import Upload from "./Upload";
import Debug from "./Debug";

export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Debug />} />
                
            </Routes>
        </div>
    )
}
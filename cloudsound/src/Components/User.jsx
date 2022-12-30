import { useState, useEffect } from "react"
import { BASE_URL_USERS } from "../globals"
import axios from 'axios'
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react";

// 12/20/22 11:42 am captains log: should be working on auth to ensure it works and shit although i dont deem it necessary i should still do it
export default function User () {

    const [ user, setUser ] = useState([])


    useEffect (() => {
        const getUsers = async () => {
            const response = await axios.get(`${BASE_URL_USERS}`)
            setUser(response.data)
            console.log(response.data)
        }
        getUsers()
    }, [])

    const {loginWithRedirect, isAuthenticated} = useAuth0();
    if(isAuthenticated){
    return (
        <div className="user-container">
            <LogoutButton />
        </div>
    )
} else {
    return (
        <div>
            <LoginButton />
            
        </div>
    )
}
}
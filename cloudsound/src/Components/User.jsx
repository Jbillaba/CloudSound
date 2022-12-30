import { useState, useEffect } from "react"
import { BASE_URL_USERS } from "../globals"
import axios from 'axios'

export default function User () {

    const [ user, setUser ] = useState(null)

    useEffect (() => {
        const getUsers = async () => {
            const response = await axios.get(`${BASE_URL_USERS}`)
            setUser(response.data)
            console.log(response.data)
        }
        getUsers()
    }, [])


    return (
        <div className="user-container">
            <h1>Welcome back</h1>
            <h2> youre name is {user.name}</h2>
            {/* <h3> id num. is {user.id} </h3> */}
        </div>
    )
}
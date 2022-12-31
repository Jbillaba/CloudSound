import { useState, useEffect } from "react"
import { BASE_URL_USERS } from "../globals"
import axios from 'axios'
import {useContext} from 'react'
import AuthContext from "../context/AuthContext"



export default function User () {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
         <form onSubmit={loginUser}>
            <input type="email" name ="email" placeholder='Enter Your email' />
            <input type="password" name ="password" placeholder='Enter Your password' />
            <input type='submit'/>
        </form>
        </div>
    )
}
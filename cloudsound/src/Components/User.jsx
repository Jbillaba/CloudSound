import { useState, useEffect } from "react"
import { BASE_URL_USERS } from "../globals"
import axios from 'axios'


export default function User () {
    return (
        <div>
         <form>
            <input type="email" name ="email" placeholder='Enter Your email' />
            <input type="password" name ="password" placeholder='Enter Your password' />
            <input type='submit'/>
        </form>
        </div>
    )
}
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Register = () => {
  let {registerUser} = useContext(AuthContext)

  return (
    <div>
      <form onSubmit={registerUser}>
        <input type='text' name='name' placeholder='Enter Your name'/>
        <input type="email" name='email' placeholder='Enter Your Email'/>
        <input type="text" name ="username" placeholder='Enter Your username' />
        <input type="password" name ="password" placeholder='Enter Your password' />
        <input type="submit" />

      </form>
    </div>
  )
}

export default Register

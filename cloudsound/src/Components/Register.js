import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Register = () => {
  let {registerUser} = useContext(AuthContext)
  return (
    <div>
      <form className='login-form' onSubmit={registerUser}>
        <input type='text' name='name' placeholder='Enter Your name'/>
        <br/>
        <input type="email" name='email' placeholder='Enter Your Email'/>
        <br/>
        <input type="text" name ="username" placeholder='Enter Your username' />
        <br/>
        <input type="password" name ="password" placeholder='Enter Your password' />
        <br/>
        <br/>
        <input type="submit" />

      </form>
    </div>
  )
}

export default Register

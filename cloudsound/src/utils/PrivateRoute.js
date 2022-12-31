import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const auth = null ; 
  return auth ? <Outlet /> : <Navigate to='/user' />;
}

export default PrivateRoute

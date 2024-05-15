import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNavbar from '../../layout/navbar/AuthNavbar'

export const Auth = () => {
  return (
    <div>
      <AuthNavbar />
      <Outlet />
    </div>
  )
}

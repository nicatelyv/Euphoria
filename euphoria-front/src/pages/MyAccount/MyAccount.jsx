import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeNavbar from '../../layout/navbar/HomeNavbar'
import AccountNavigation from '../../components/AccountNavigation/AccountNavigation'

export const MyAccount = () => {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <HomeNavbar />
            <AccountNavigation />
            <Outlet />
        </div>
    )
}

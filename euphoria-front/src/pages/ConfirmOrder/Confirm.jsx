import React from 'react'
import ConfirmOrder from '../../components/Confirm Order/ConfirmOrder'
import HomeNavbar from "../../layout/navbar/HomeNavbar"
import Footer from "../../layout/footer/Footer"

function Confirm() {
    return (
        <>
            <HomeNavbar />
            <ConfirmOrder />
            <Footer />
        </>
    )
}

export default Confirm
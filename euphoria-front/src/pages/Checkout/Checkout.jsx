import React from "react";
import HomeNavbar from "../../layout/navbar/HomeNavbar"
import Footer from "../../layout/footer/Footer"
import CheckoutComponent from "../../components/Check out/CheckoutComponent"

export const Checkout = () => {
    return (
        <>
            <HomeNavbar />
            <CheckoutComponent />
            <Footer />
        </>
    )
}
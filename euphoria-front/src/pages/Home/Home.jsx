import React from 'react'
import HomeSlide from '../../components/Home/Slide/HomeSlide'
import Navbar from '../../layout/navbar/Navbar'
import SaleProducts from '../../components/Home/SaleProducts/SaleProducts'
import Footer from '../../layout/footer/Footer'

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlide />
      <SaleProducts />
      <Footer />
    </>
  )
}

import React from 'react'
import HomeNavbar from '../../layout/navbar/HomeNavbar'
import Footer from '../../layout/footer/Footer'
import ListDescription from '../../components/ProductList/ListDescription/ListDescription'
import ListCards from '../../components/ProductList/ListCards/ListCards'
import ListBestPrice from '../../components/ProductList/ListBestPrice/ListBestPrice'

function ProductList() {
  return (
    <div>
      <HomeNavbar/>
      <ListCards/>
      <ListDescription/>
      <ListBestPrice/>
      <Footer/>
    </div>
  )
}

export default ProductList

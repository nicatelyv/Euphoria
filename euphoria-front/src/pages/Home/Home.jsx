import React from "react";
import HomeSlide from "../../components/Home/Slide/HomeSlide";
import SaleProducts from "../../components/Home/SaleProducts/SaleProducts";
import NewArrival from "../../components/Home/NewArrival/NewArrival";
import Footer from "../../layout/footer/Footer";
import FashionSection from "../../components/Home/FashionSection/FashionSection";
import HomeNavbar from "../../layout/navbar/HomeNavbar";
import BigZone from "../../components/Home/BigZone/BigZone";
import CategoriesForMen from "../../components/Home/CategoriesForMen/CategoriesForMen";
import TopBrands from "../../components/Home/TopBrands/TopBrands";

export const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeSlide />
      <SaleProducts />
      <NewArrival />
      <BigZone />
      <FashionSection/>
      <CategoriesForMen />
      <TopBrands />
      <Footer />
    </>
  );
};

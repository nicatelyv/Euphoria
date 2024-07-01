import React from "react";
import Emptycart from "../../components/Empty Cart/Emptycart";
import Footer from "../../layout/footer/Footer";
import HomeNavbar from "../../layout/navbar/HomeNavbar";

const EmptyCart = () => {
  return (
    <>
      <HomeNavbar />
      <Emptycart />
      <Footer />
    </>
  );
};

export default EmptyCart;

import React from "react";
import Footer from "../../layout/footer/Footer";
import HomeNavbar from "../../layout/navbar/HomeNavbar";
import Addtocart from "../../components/AddtoCart/Addtocart";

const AddtoCart = () => {
  return (
    <div>
      <HomeNavbar />
      <Addtocart />
      <Footer />
    </div>
  );
};

export default AddtoCart;

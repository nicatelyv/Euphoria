import React from "react";
import pdBotStyle from "./PdBottomContainer.module.scss";
import ProductCard from "../../ProductCard/ProductCard";
import { useState,useEffect } from "react";
// import { getAllProducts } from "../../../api/products";
import { axiosFunction } from "../../../api";

const PdBottomContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //  const getProducts = async () => {
  //   setLoading(true);
  //   try {
  //     const data = await getAllProducts();
  //     setProducts(data);
  //     console.log(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  //  };
  //   getProducts();
  // }, [])

  useEffect(async() => {
    const response = await axiosFunction("GET", '/product');
    console.log(response);
  }, [])


  return (
    <div className={pdBotStyle.pdBottomContainer}>
      <div className={pdBotStyle.pdh2holder}>
        <div className={pdBotStyle.pdSimilarProddiv}></div>
        <h2>Similar Products</h2>
      </div>
      {loading ? (<div>Loading data....</div>):(
      <div className={pdBotStyle.pdproductscontainer}>
        {products.map((p) => (
          <ProductCard key={p.id} imgurl={p.imgurl} productName={p.productName}
          brandName={p.brandName} amount={p.price.amount} currency={p.price.currency} />
        ))}
      </div>
      )}
    </div>
  );
};

export default PdBottomContainer;

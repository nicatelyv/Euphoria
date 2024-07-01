import React from "react";
import productCardStyle from "./ProductCard.module.scss";
import hearticon from "/img/DetailPageimgs/pdhearticon.png";

const ProductCard = ({imgurl,productName,brandName,amount,currency}) => {
  return (
      <div className={productCardStyle.pdproductcard}>
        <div className={productCardStyle.pdcardimg}>
          <img src={imgurl} alt={productName} />
          <div className={productCardStyle.pdwishicon}>
            <img
              src={hearticon}
              alt="hearticon"
              style={{ width: "15px", height: "15px" }}
            />
          </div>
        </div>
        <div className={productCardStyle.pdcardtext}>
          <div className={productCardStyle.pdcardps}>
            <p
              style={{
                fontSize: "15px",
                color: "#3C4242",
                fontWeight: "600",
              }}
            >
              {productName}
            </p>
            <p style={{ fontSize: "15px", color: "#807D7E" }}>{brandName}</p>
          </div>
          <div className={productCardStyle.pdcardprice}>
            <p
              style={{
                width: "70px",
                height: "25px",
                backgroundColor: "#F6F6F6",
                borderRadius: "8px",
              }}
            >
              {amount} {currency}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;

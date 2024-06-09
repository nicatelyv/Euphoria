import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import addCartStyle from "./addtocart.module.css";
import { FaRegTrashCan } from "react-icons/fa6";

const Addtocart = () => {
  const { t } = useTranslation();
  const data = [
    {
      imgUrl: "/img/OrderSummary/img1.png",
      productName: "Blue Flower Print Crop Top",
      count: 1,
      color: "Yellow",
      size: "M",
      price: 29.0,
      shipping: "FREE",
    },
    {
      imgUrl: "/img/OrderSummary/img2.png",
      productName: "Lavender Hoodie",
      count: 2,
      color: "Lavender",
      size: "XXL",
      price: 119.0,
      shipping: "FREE",
    },
    {
      imgUrl: "/img/OrderSummary/img3.png",
      productName: "Black Sweatshirt",
      count: 2,
      color: "Black",
      size: "XXL",
      price: 123.0,
      shipping: "$5.00",
    },
  ];

  return (
    <div className={addCartStyle.Addtocart}>
      <div className={addCartStyle.container}>
        <div className={addCartStyle.links}>
          <Link to={"/"}>
            {t("Home")} <img src="/img/arrow.png" alt="" />
          </Link>
          <Link to={"/addtocart"} style={{ color: "#3C4242" }}>
            {t("Add to Cart")}
          </Link>
        </div>
        <div>
          <p>
            {t(
              " Please fill in the fields below and click place order to complete your purchase!"
            )}
          </p>
          <p>
            {t("Already registered?")}
            <Link to={"/auth/sign-in"}> {t("Please login here")}</Link>
          </p>
        </div>
      </div>
      <div className={addCartStyle.black}>
        <div className={addCartStyle.container}>
          <div className={addCartStyle.productHeader}>
            <span>{t("Product Details")}</span>
            <div className={addCartStyle.details}>
              <span>{t("Price")}</span>
              <span>{t("Quantity")}</span>
              <span>{t("Shipping")}</span>
              <span>{t("Subtotal")}</span>
              <span>{t("action")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={addCartStyle.cart}>
        <div className={addCartStyle.container}>
          {data.map((item, index) => (
            <div key={index} className={addCartStyle.productRow}>
              <div className={addCartStyle.left}>
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className={addCartStyle.productImage}
                />
                <div className={addCartStyle.productInfo}>
                  <p className={addCartStyle.name}>{item.productName}</p>
                  <p className={addCartStyle.text}>
                    {t("Color")}: {item.color}
                  </p>
                  <p className={addCartStyle.text}>
                    {t("Size")}: {item.size}
                  </p>
                </div>
              </div>
              <div className={addCartStyle.right}>
                <span className={addCartStyle.price}>
                  ${item.price.toFixed(2)}
                </span>
                <div className={addCartStyle.quantity}>
                  <span className={addCartStyle.cursor}>-</span>
                  <span>{item.count}</span>
                  <span className={addCartStyle.cursor}>+</span>
                </div>
                <span className={addCartStyle.shipping}>{item.shipping}</span>
                <span className={addCartStyle.subtotal}>
                  ${(item.price * item.count).toFixed(2)}
                </span>
                <span className={addCartStyle.cursor}>
                  <FaRegTrashCan />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={addCartStyle.shopping}>
        <div className={addCartStyle.container}>
          <div className={addCartStyle.discount}>
            <p>{t("Discount Codes")}</p>
            <span>{t("Enter your coupon code if you have one")}</span>
            <div className={addCartStyle.inputBox}>
              <input type="text" />
              <button className="apply_button" >{t("Apply Coupon")}</button>
            </div>
            <Link>{t("Continue Shopping")}</Link>
          </div>
          <div className={addCartStyle.checkout}></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;

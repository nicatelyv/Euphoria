import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import addCartStyle from "./addtocart.module.css";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";

const Addtocart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCart = async () => {
      try {
        const data = await axios("get", "/addtocart");
        setCart(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCart();
  }, []);

  // const initialData = [
  //   {
  //     imgUrl: "/img/OrderSummary/img1.png",
  //     productName: "Blue Flower Print Crop Top",
  //     count: 1,
  //     color: "Yellow",
  //     size: "M",
  //     price: 29.0,
  //     shipping: "FREE",
  //   },
  //   {
  //     imgUrl: "/img/OrderSummary/img2.png",
  //     productName: "Lavender Hoodie",
  //     count: 2,
  //     color: "Lavender",
  //     size: "XXL",
  //     price: 119.0,
  //     shipping: "FREE",
  //   },
  //   {
  //     imgUrl: "/img/OrderSummary/img3.png",
  //     productName: "Black Sweatshirt",
  //     count: 2,
  //     color: "Black",
  //     size: "XXL",
  //     price: 123.0,
  //     shipping: "$5.00",
  //   },
  // ];

  // const [data, setData] = useState(data);
  // const [quantities, setQuantities] = useState(data.map((item) => item.count));

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/empty-cart");
    }
  }, [cart, navigate]);

  const subtotal = cart.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  );

  const shippingTotal = cart.reduce((acc, item) => {
    if (item.shipping !== "FREE") {
      return acc + parseFloat(item.shipping.replace("$", ""));
    }
    return acc;
  }, 0);

  const grandTotal = subtotal + shippingTotal;

  const handleQuantityChange = (index, change) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + change);
      return newQuantities;
    });
  };

  const handleRemoveItem = (index) => {
    setData((prevData) => prevData.filter((item, i) => i !== index));
    setQuantities((prevQuantities) =>
      prevQuantities.filter((quantity, i) => i !== index)
    );
  };

  return (
    <>
      {loading ? (
        <div> Loading...</div>
      ) : (
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
                  "Please fill in the fields below and click place order to complete your purchase!"
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
              {cart.map((item, index) => (
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
                      <p className={addCartStyle.respText}>
                        {t("Price")}: ${item.price}
                      </p>
                      <p className={addCartStyle.respText}>
                        {t("Shipping")}: {item.shipping}
                      </p>
                    </div>
                  </div>
                  <div className={addCartStyle.right}>
                    <span className={addCartStyle.price}>
                      ${item.price.toFixed(2)}
                    </span>
                    <div className={addCartStyle.quantity}>
                      <span
                        className={addCartStyle.cursor}
                        onClick={() => handleQuantityChange(index, -1)}
                      >
                        -
                      </span>
                      <span>{quantities[index]}</span>
                      <span
                        className={addCartStyle.cursor}
                        onClick={() => handleQuantityChange(index, 1)}
                      >
                        +
                      </span>
                    </div>
                    <span className={addCartStyle.shipping}>
                      {item.shipping}
                    </span>
                    <span className={addCartStyle.subtotal}>
                      ${(item.price * quantities[index]).toFixed(2)}
                    </span>
                    <span
                      className={addCartStyle.trash}
                      onClick={() => handleRemoveItem(index)}
                    >
                      <FaRegTrashCan />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {cart.length > 0 && (
            <div className={addCartStyle.shopping}>
              <div className={addCartStyle.container}>
                <div className={addCartStyle.shoppingItems}>
                  <div className={addCartStyle.discount}>
                    <p>{t("Discount Codes")}</p>
                    <span>{t("Enter your coupon code if you have one")}</span>
                    <div className={addCartStyle.inputBox}>
                      <input type="text" />
                      <button className={addCartStyle.apply_button}>
                        {t("Apply Coupon")}
                      </button>
                    </div>
                    <Link to={"/product-list"}>{t("Continue Shopping")}</Link>
                  </div>
                  <div className={addCartStyle.checkout}>
                    <div className={addCartStyle.sub}>
                      <span>{t("Sub Total")}</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className={addCartStyle.ship}>
                      <span>{t("Shipping")}</span>
                      <span>${shippingTotal.toFixed(2)}</span>
                    </div>
                    <div className={addCartStyle.grand}>
                      <span>{t("Grand Total")}</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                    <div className={addCartStyle.line}></div>
                    <div className={addCartStyle.linkButton}>
                      <Link
                        to={"/cart/checkout"}
                        className={addCartStyle.proceed}
                      >
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Addtocart;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import orderStyle from "./myorders.module.css";

const Myorders = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("active");
  const navigate = useNavigate();

  const orders = {
    active: [
      {
        orderNo: "#123456781",
        orderDate: "2 June 2023 2:40 PM",
        estimatedDeliveryDate: "8 June 2023",
        orderStatus: "In progress",
        paymentMethod: "Cash on delivery",
        items: [
          {
            name: "Black Printed T-shirt",
            colour: "Pink",
            qty: 1,
            total: "$23.00",
            img: "/img/OrderSummary/order1.jpg",
          },
        ],
      },
      {
        orderNo: "#123456782",
        orderDate: "2 June 2023 2:40 PM",
        estimatedDeliveryDate: "8 June 2023",
        orderStatus: "In progress",
        paymentMethod: "Cash on delivery",
        items: [
          {
            name: "Blue Shirt",
            colour: "Blue",
            qty: 1,
            total: "$93.00",
            img: "/img/OrderSummary/order2.jpg",
          },
        ],
      },
      {
        orderNo: "#123456783",
        orderDate: "2 June 2023 2:40 PM",
        estimatedDeliveryDate: "8 June 2023",
        orderStatus: "Delivered",
        paymentMethod: "Cash on delivery",
        items: [
          {
            name: "Blue Shirt",
            colour: "Blue",
            qty: 1,
            total: "$93.00",
            img: "/img/OrderSummary/order3.jpg",
          },
        ],
      },
    ],
    cancelled: [],
    completed: [
      {
        orderNo: "#123456783",
        orderDate: "2 June 2023 2:40 PM",
        estimatedDeliveryDate: "8 June 2023",
        orderStatus: "Delivered",
        paymentMethod: "Cash on delivery",
        items: [
          {
            name: "Blue Shirt",
            colour: "Blue",
            qty: 1,
            total: "$93.00",
            img: "/img/OrderSummary/order3.jpg",
          },
        ],
      },
    ],
  };

  const handleViewDetails = (order) => {
    navigate("/my-account/my-orders/order-details", {
      state: { order, orders: orders[activeTab] },
    });
  };

  return (
    <div className={orderStyle.ordersContainer}>
      <h2>{t("My Orders")}</h2>
      <div className={orderStyle.tabs}>
        <div
          className={`${orderStyle.tab} ${
            activeTab === "active" ? orderStyle.tabActive : ""
          }`}
          onClick={() => setActiveTab("active")}
        >
          {t("Active")}
        </div>
        <div
          className={`${orderStyle.tab} ${
            activeTab === "cancelled" ? orderStyle.tabActive : ""
          }`}
          onClick={() => setActiveTab("cancelled")}
        >
          {t("Cancelled")}
        </div>
        <div
          className={`${orderStyle.tab} ${
            activeTab === "completed" ? orderStyle.tabActive : ""
          }`}
          onClick={() => setActiveTab("completed")}
        >
          {t("Completed")}
        </div>
      </div>
      <ul className={orderStyle.ordersList}>
        {orders[activeTab].map((order, orderIndex) => (
          <li key={orderIndex} className={orderStyle.orderItem}>
            <div className={orderStyle.gray}>
              <span className={orderStyle.number}>
                Order no: {order.orderNo}
              </span>
              <div className={orderStyle.firstRow}>
                <div>
                  <span className={orderStyle.boldText}>Order Date: </span>
                  <span className={orderStyle.normalText}>
                    {order.orderDate}
                  </span>
                </div>
                <div>
                  <span className={orderStyle.boldText}>Order Status:</span>
                  <span className={orderStyle.normalText}>
                    {order.orderStatus}
                  </span>
                </div>
              </div>
              <div className={orderStyle.secondRow}>
                <div>
                  <span className={orderStyle.boldText}>
                    Estimated Delivery Date:
                  </span>
                  <span className={orderStyle.normalText}>
                    {order.estimatedDeliveryDate}
                  </span>
                </div>
                <div>
                  <span className={orderStyle.boldText}>Payment Method:</span>
                  <span className={orderStyle.normalText}>
                    {order.paymentMethod}
                  </span>
                </div>
              </div>
            </div>
            {order.items.map((item, itemIndex) => (
              <div key={itemIndex} className={orderStyle.itemIndex}>
                <div>
                  <img
                    style={{ borderRadius: "8px" }}
                    className={orderStyle.img}
                    src={item.img}
                    alt="img"
                    key={itemIndex}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className={orderStyle.items}>
                    <div className={orderStyle.itemName}>{item.name}</div>
                    <div>
                      <span>Colour: </span>
                      <span className={orderStyle.normalText}>
                        {item.colour}
                      </span>
                    </div>
                    <div>
                      <span>Qty:</span>
                      <span className={orderStyle.normalText}>{item.qty}</span>
                    </div>
                    <div>
                      <span className={orderStyle.boldText}>
                        Total: {item.total}
                      </span>
                    </div>
                  </div>
                  <button
                    className={orderStyle.orderButton}
                    onClick={() => handleViewDetails(order)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myorders;

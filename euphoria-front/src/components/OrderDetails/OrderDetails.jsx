import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaAngleLeft } from "react-icons/fa6";
import styleDetails from "./orderdetail.module.css";

const OrderDetails = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { order, orders } = location.state;

  const handleBack = () => {
    navigate(-1);
  };

  const getStatusIndex = (status) => {
    const statusOrder = ["Order Placed", "In progress", "Shipped", "Delivered"];
    return statusOrder.indexOf(status);
  };

  const currentStatusIndex = getStatusIndex(order.orderStatus);

  return (
    <div className={styleDetails.detailContainer}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaAngleLeft onClick={handleBack} style={{ cursor: "pointer" }} />
        <h2>{t("Order Details")}</h2>
      </div>

      <div className={styleDetails.orderSummary}>
        <div>
          <h3>Order no: {order.orderNo}</h3>
          <p style={{ color: "#3C4242" }}>Order Status: {order.orderStatus}</p>
        </div>
        {order.items.map((item, index) => (
          <div key={index} className={styleDetails.itemDetail}>
            <span>
              <span style={{ color: "#3C4242" }}> Total:</span>{" "}
              <b>{item.total}</b>
            </span>
          </div>
        ))}
      </div>

      <div className={styleDetails.progressContainer}>
        <div className={styleDetails.progressLine}></div>
        {["Order Placed", "In progress", "Shipped", "Delivered"].map(
          (status, index) => (
            <div key={index} className={styleDetails.progressStep}>
              <div
                className={`${styleDetails.progressCircle} ${
                  index <= currentStatusIndex ? styleDetails.active : ""
                }`}
              ></div>
              <p
                className={`${styleDetails.progressLabel} ${
                  index <= currentStatusIndex ? styleDetails.activeLabel : ""
                }`}
              >
                {status}
              </p>
            </div>
          )
        )}
      </div>

      <h3 style={{ margin: "30px 0" }}>Other Orders</h3>
      <ul className={styleDetails.otherOrders}>
        {orders.map(
          (otherOrder, index) =>
            otherOrder.orderNo !== order.orderNo &&
            otherOrder.items.map((ordDet, i) => (
              <li key={i}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <img style={{ width: "100px" }} src={ordDet.img} alt="" />
                    </div>
                    <div>
                      <span style={{ color: "#3C4242", fontWeight: "700" }}>
                        {" "}
                        {ordDet.name}
                      </span>
                      <p>
                        <span style={{ color: "#3C4242", fontWeight: "700" }}>
                          Colour:
                        </span>{" "}
                        <span style={{ color: "#807D7E" }}>
                          {ordDet.colour}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <p>
                      <span style={{ color: "#3C4242", fontWeight: "700" }}>
                        Qty:
                      </span>{" "}
                      <span style={{ color: "#807D7E" }}>{ordDet.qty}</span>
                    </p>
                  </div>
                  <div>
                    <p style={{ color: "#807D7E" }}>{ordDet.total}</p>
                  </div>
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default OrderDetails;

import React from 'react'
import listBestPriceStyle from "./ListBestPrice.module.scss"
import { useTranslation } from "react-i18next";


function ListBestPrice() {
  const { t } = useTranslation();
  return (
    <div className={listBestPriceStyle.container}>
      <div className={listBestPriceStyle.row}>
      <div className={listBestPriceStyle.tcol}>
      <div className={listBestPriceStyle.line}></div>
          <h2 className={listBestPriceStyle.title}>
            {t("Buy Women's Clothing at Best Price")}
          </h2>
      </div>
      <div className={listBestPriceStyle.bodyCol}>
        <table>
        <thead>
          <tr>
            <th>{t("Women's Clothing")}</th>
            <th>{t("Best Price")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("Pick Any 4- Womens Plain T-shirt Combo")}</td>
            <td>{t("₹1099")}</td>
          </tr>
          <tr>
            <td>{t("Pick Any 4- Plain Womens Boxer Combo")}</td>
            <td>{t("₹1099")}</td>
          </tr>
          <tr>
            <td>{t("Pick Any 4 - Women Plain Full Sleeve T-shirt Combo")}</td>
            <td>{t("₹1399")}</td>
          </tr>
          <tr>
            <td>{t("Multicolor Checkered Long Casual Shirts for Women")}</td>
            <td>{t("₹499")}</td>
          </tr>
          <tr>
            <td>{t("Pick Any 2: Plain Boxy Casual Shirts for Women Combo")}</td>
            <td>{t("₹799")}</td>
          </tr>
          <tr>
            <td>{t("Blue Floral Anarkali Kurti")}</td>
            <td>{t("₹599")}</td>
          </tr>
          <tr>
            <td>{t("Jade Black Narrow Cut Flexible Women Jeggings")}</td>
            <td>{t("₹998")}</td>
          </tr>
          <tr>
            <td>{t("Mustard-yellow Solid Straight-Fit Women Pant")}</td>
            <td>{t("₹449")}</td>
          </tr>
          <tr>
            <td>{t("Women Pants Combo - Pick Any 2")}</td>
            <td>{t("₹800")}</td>
          </tr>
          <tr>
            <td>{t("Pista Green Solid Boxy Casual Shirts for Women")}</td>
            <td>{t("₹449")}</td>
          </tr>
          <tr>
            <td>{t("Plain Burgundy Womens Boxer")}</td>
            <td>{t("₹349")}</td>
          </tr>
          <tr>
            <td>{t("Striped Front Tie Casual Shirts for Women")}</td>
            <td>{t("₹449")}</td>
          </tr>
        </tbody>
        </table>    
      </div>
      </div>
    </div>
  )
}

export default ListBestPrice

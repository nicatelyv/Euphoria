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
      <div className={listBestPriceStyle.bodyCol}></div>
      </div>
    </div>
  )
}

export default ListBestPrice

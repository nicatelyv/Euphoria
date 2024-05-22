import React from 'react'
import style from "./saleproduct.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function SaleProducts() {
    const { t } = useTranslation();

    return (
        <div className={style.saleproduct}>
            <div className={style.container}>
                <div className={style.product} style={{ backgroundImage: "url(/img/saleProduct1.png)" }}>
                    <h4>{t("Low Price")}</h4>
                    <h2>{t("High Coziness")}</h2>
                    <h5>{t("UPTO 50% OFF")}</h5>
                    <Link to={"/shop"}>{t("Explore Items")}</Link>
                </div>
                <div className={style.product} style={{ backgroundImage: "url(/img/saleProduct2.png)" }}>
                    <h4>{t("Beyoung Presents")}</h4>
                    <h2>{t("Breezy Summer Style")}</h2>
                    <h5>{t("UPTO 50% OFF")}</h5>
                    <Link to={"/shop"}>{t("Explore Items")}</Link>
                </div>
            </div>
        </div>
    )
}

export default SaleProducts
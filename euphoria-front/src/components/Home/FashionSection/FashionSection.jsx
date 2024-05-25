import React from "react";
import fashionStyle from "./FashionSection.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FashionSection() {
  const { t } = useTranslation();
  return (
    <div className={fashionStyle.container}>
      <div className={fashionStyle.row}>
        <div className={fashionStyle.leftrow}>
          <div className={fashionStyle.textContent}>
            <h4>{t("WE MADE YOUR EVERYDAY FASHION BETTER!")}</h4>
            <p>
              {t(
                "In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7"
              )}
            </p>
            <Link to={""}>{t("Shop Now")}</Link>
          </div>
        </div>
        <div className={fashionStyle.rightrow}></div>
      </div>
    </div>
  );
}

export default FashionSection;

import React from "react";
import listDescriptionStyle from "./ListDescription.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ListDescription() {
  const { t } = useTranslation();
  return (
    <div className={listDescriptionStyle.container}>
      <div className={listDescriptionStyle.row}>
        <div className={listDescriptionStyle.tCol}>
          <div className={listDescriptionStyle.line}></div>
          <h1 className={listDescriptionStyle.title}> 
            {t("Clothing for Women Online in India")}
          </h1>
        </div>
        <div className={listDescriptionStyle.BodyCol}>
          <div className={listDescriptionStyle.col}>
            <h3 className={listDescriptionStyle.title}>{t("Reexplore Women's Clothing Collection Online at Euphoria")}</h3>
            <p className={listDescriptionStyle.subtitle}>{t("Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel,")}<span>{t("Euphoria")}</span>{t(" has closet of Women Collection covered with the latest and best designs of Women's Clothing Online")}</p>
            <p className={listDescriptionStyle.subtitle}>{t("Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear.")}</p>
          </div>
          <div className={listDescriptionStyle.col}>
          <h4 className={listDescriptionStyle.title}>{t("One-Stop Destination to Shop Every Clothing for Women: Euphoria")}</h4>
            <p className={listDescriptionStyle.subtitle}>{t("Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this,")}<span>{t("Euphoria")}</span> {t("has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. ")}</p>
            <p className={listDescriptionStyle.subtitle}>{t("Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically, ")}</p>
          </div>
          <Link>{t("See More")}</Link>
        </div>
      </div>
    </div>
  );
}

export default ListDescription;

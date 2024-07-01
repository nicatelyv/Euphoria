import React from 'react'
import topBrandsStyle from './TopBrands.module.scss'
import nike from '/img/nike (2).png'
import hm from '/img/hm.png'
import levis from '/img/levis.png'
import uspolo from '/img/uspolo.png'
import puma from '/img/puma.png'
import { useTranslation } from 'react-i18next'

const TopBrands = () => {
  const { t } = useTranslation();
  return (
    <div className={topBrandsStyle.topBrands}>
      <div className={topBrandsStyle.topBrandsText}>
        <h1>{t("Top Brands Deal")}</h1>
        <p>{t("Up To")} <span style={{ color: "#FBD103" }}>60%</span> {t("off on brands")}</p>
      </div>
      <div className={topBrandsStyle.topBrandsImg}>
        <img src={nike} alt="nike" />
        <img src={hm} alt="hm" />
        <img src={levis} alt="levis" />
        <img src={uspolo} alt="uspolo" />
        <img src={puma} alt="puma" />
      </div>
    </div>
  )
}

export default TopBrands

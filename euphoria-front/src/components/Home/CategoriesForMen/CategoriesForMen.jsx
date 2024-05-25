import React from 'react'
import style from "./style.module.scss"
import { useTranslation } from 'react-i18next';
import CategoriesMenSlider from './CategoriesMenSlider';

function CategoriesForMen() {
    const { t } = useTranslation();

    return (
        <div className={style.CategoriesForMen}>
            <div className={style.context}>
                <h2><div></div> {t("Categories For Men")}</h2>
            </div>
            <div className={style.container}>
                <CategoriesMenSlider />

                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img1.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Shirts")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img2.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Printed T-Shirts")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img3.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Plain T-Shirt")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img4.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Polo T-Shirt")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img5.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Hoodies & Sweetshirt")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img6.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Jeans")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img7.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Activewear")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
                <div className={style.card}>
                    <img src="/img/CategoriesForMen/img8.png" alt="" />
                    <div className={style.text}>
                        <h3>{t("Boxers")}</h3>
                        <img src="/img/CategoriesForMen/arrow.png" alt="" />
                    </div>
                    <p>{t("Explore Now!")}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoriesForMen
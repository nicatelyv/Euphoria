import React from 'react'
import style from './slider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';


function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "100%" }}
            onClick={onClick}
        />
    );
}

function CategoriesMenSlider() {
    const { t } = useTranslation();

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={style.container}>
            <div className="slider-container">
                <Slider {...settings} className='sldr'>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img1.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Shirts")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img2.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Printed T-Shirts")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img3.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Plain T-Shirt")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img4.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Polo T-Shirt")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img5.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Hoodies & Sweetshirt")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img6.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Jeans")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img7.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Activewear")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                    <div className={style.sliderContainer}>
                        <img src="/img/CategoriesForMen/img8.png" alt="" />
                        <div className={style.text}>
                            <h4>{t("Boxers")}</h4>
                            <img src="/img/CategoriesForMen/arrow.png" alt="" />
                        </div>
                        <p>{t("Explore Now!")}</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default CategoriesMenSlider
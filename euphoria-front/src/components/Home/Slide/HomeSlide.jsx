import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideStyle from "./slide.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function HomeSlide() {
    const { t } = useTranslation();

    return (
        <div id='slide-show' className={SlideStyle.slideShow}>
            <Slide
                autoplay={false}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                <div className={SlideStyle.each_slide_effect}>
                    <div className={SlideStyle.container} style={{ backgroundImage: 'url(/img/slideImg1.jpg)', backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
                        <div className={SlideStyle.text}>
                            <h3>{t("T-shirt / Tops")}</h3>
                            <h2>{t("Summer Value Pack")}</h2>
                            <h3>{t("cool / colorful / comfy")}</h3>
                            <Link to={"/shop"}>{t("Shop Now")}</Link>
                        </div>
                    </div>
                </div>
                <div className={SlideStyle.each_slide_effect}>
                    <div className={SlideStyle.container} style={{ backgroundColor: "#FDC75D", backgroundImage: 'url(/img/slideImg2.jpg)', backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
                        <div className={SlideStyle.text}>
                            <h3>{t("Beyoung Presents")}</h3>
                            <h2>{t("Breezy Summer Style")}</h2>
                            <h3>{t("UPTO 50% OFF")}</h3>
                            <Link to={"/shop"}>{t("Shop Now")}</Link>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default HomeSlide
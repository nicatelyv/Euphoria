import React, { useState } from 'react';
import filterStyle from "./Filter.module.scss";
import { useTranslation } from "react-i18next";

function Filter() {
    const { t } = useTranslation();
    
    const [openSections, setOpenSections] = useState({
        price: false,
        colors: false,
        size: false,
        style: false
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className={filterStyle.container}>
            <div className={filterStyle.lCol}>
                <div className={filterStyle.filter}>
                    <p>{t("Filter")}</p>
                    <img src="/img/filter.png" alt="filter png picture" />
                </div>
                <ul className={filterStyle.lists}>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Tops")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Printed T-shirts")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Plain T-shirts")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Kurti")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Boxers")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Full sleeve T-shirts")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Joggers")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Payjamas")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                    <li className={filterStyle.listItem}>
                        <div className={filterStyle.diV}>
                            {t("Jeans")}
                            <img src="/img/rightIcon.png" alt="right icon png" />
                        </div>
                    </li>
                </ul>
                <div className={filterStyle.section}>
                <label className={`${filterStyle.label} ${openSections.price ? filterStyle.open : ""}`} onClick={() => toggleSection('price')}>
                                {t("Price")}
                                <img
                                    src="/img/upIcon.png"
                                    alt="up Icon"
                                    className={`${filterStyle.icon} ${openSections.price ? filterStyle.rotate : ""}`}
                                />
                            </label>
                    {openSections.price && (
                        <div className={filterStyle.sectionContent}>
                            <div className={filterStyle.priceLine}>
                                <div className={filterStyle.circle1}></div>
                                <div className={filterStyle.lines}>
                                    <div className={filterStyle.pline}></div>
                                </div>
                                <div className={filterStyle.circle2}></div>
                            </div>
                            <div className={filterStyle.priceCom}>
                                <div className={filterStyle.priceContext}>{t("$70")}</div>
                                <div className={filterStyle.priceContext}>{t("$600")}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={filterStyle.section}>
                <label className={`${filterStyle.label} ${openSections.colors ? filterStyle.open : ""}`} onClick={() => toggleSection('colors')}>
                                {t("Colors")}
                                <img
                                    src="/img/upIcon.png"
                                    alt="up Icon"
                                    className={`${filterStyle.icon} ${openSections.colors ? filterStyle.rotate : ""}`}
                                />
                            </label>
                    {openSections.colors && (
                        <div className={filterStyle.sectionContent}>
                            <ul className={filterStyle.colorList}>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color1}></div>
                                        <p>{t("Purple")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color2}></div>
                                        <p>{t("Black")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color3}></div>
                                        <p>{t("Red")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color4}></div>
                                        <p>{t("Orange")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color5}></div>
                                        <p>{t("Navy")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color6}></div>
                                        <p>{t("White")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color7}></div>
                                        <p>{t("Broom")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color8}></div>
                                        <p>{t("Green")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color9}></div>
                                        <p>{t("Yellow")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color10}></div>
                                        <p>{t("Grey")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color11}></div>
                                        <p>{t("Pink")}</p>
                                    </div>
                                </li>
                                <li className={filterStyle.colorItem}>
                                    <div className={filterStyle.colorContext}>
                                        <div className={filterStyle.color12}></div>
                                        <p>{t("Blue")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={filterStyle.section}>
                <label className={`${filterStyle.label} ${openSections.style ? filterStyle.open : ""}`} onClick={() => toggleSection('size')}>
                                {t("Size")}
                                <img
                                    src="/img/upIcon.png"
                                    alt="up Icon"
                                    className={`${filterStyle.icon} ${openSections.style ? filterStyle.rotate : ""}`}
                                />
                            </label>
                    {openSections.size && (
                        <div className={filterStyle.sectionContent}>
                            <ul className={filterStyle.sizeList}>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size1}>{t("XXS")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size2}>{t("XL")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size3}>{t("XS")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size4}>{t("S")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size5}>{t("M")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size6}>{t("L")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size7}>{t("XXL")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size8}>{t("3XL")}</div>
                                    </div>
                                </li>
                                <li className={filterStyle.sizeItem}>
                                    <div className={filterStyle.sizeContext}>
                                        <div className={filterStyle.size9}>{t("4XL")}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={filterStyle.section}>
                    <label className={`${filterStyle.label} ${openSections.price ? filterStyle.open : ""}`}  onClick={() => toggleSection('style')}>
                        <p>{t("Dress Style")}</p>
                        <img 
                            src="/img/upIcon.png" 
                            alt="up Icon" 
                            className={`${filterStyle.icon} ${openSections.style ? filterStyle.rotate : ""}`} 
                        />
                    </label>
                    {openSections.style && (
                        <div className={filterStyle.sectionContent}>
                            <ul className={filterStyle.styleLists}>
                                <li className={filterStyle.listItem}>
                                    <div className={filterStyle.diV}>
                                        {t("Classic")}
                                        <img src="/img/rightIcon.png" alt="right icon png" />
                                    </div>
                                </li>
                                <li className={filterStyle.listItem}>
                                    <div className={filterStyle.diV}>
                                        {t("Casual")}
                                        <img src="/img/rightIcon.png" alt="right icon png" />
                                    </div>
                                </li>
                                <li className={filterStyle.listItem}>
                                    <div className={filterStyle.diV}>
                                        {t("Business")}
                                        <img src="/img/rightIcon.png" alt="right icon png" />
                                    </div>
                                </li>
                                <li className={filterStyle.listItem}>
                                    <div className={filterStyle.diV}>
                                        {t("Sport")}
                                        <img src="/img/rightIcon.png" alt="right icon png" />
                                    </div>
                                </li>
                                <li className={filterStyle.listItem}>
                                    <div className={filterStyle.diV}>
                                        {t("Elegant")}
                                        <img src="/img/rightIcon.png" alt="right icon png" />
                                    </div>
                                </li>
                                <li className={filterStyle.listItem}>
                                    <div className={filterStyle.diV}>
                                        {t("Formal (evening)")}
                                        <img src="/img/rightIcon.png" alt="right icon png" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Filter;



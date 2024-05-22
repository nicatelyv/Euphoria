import React, { useState } from "react";
import navhomeStyle from "./homenavbar.module.css";
import Languageoption from "../../components/language dropdown/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { BiCart } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenuMotion } from "react-icons/cg";

function HomeNavbar() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const [menu, setMenu] = useState(true);
  return (
    <>
      <div className={navhomeStyle.border}>
        <nav className={navhomeStyle.nav}>
          <NavLink to={"/"}>
            <img src="/svg/logo.svg" />
          </NavLink>
          {menu ? (
            <RxHamburgerMenu
              onClick={() => {
                setMenu(!menu);
              }}
              className={navhomeStyle.menu}
            />
          ) : (
            <CgMenuMotion
              onClick={() => {
                setMenu(!menu);
              }}
              className={navhomeStyle.menu}
            />
          )}
          <div className={navhomeStyle.resp}>
            <ul className={navhomeStyle.list}>
              <NavLink to={"/shop"}>{t("Shop")}</NavLink>
              <NavLink to={"/women"}>{t("Women")}</NavLink>
              <NavLink to={"/men"}>{t("Men")}</NavLink>
              <NavLink to={"/combos"}>{t("Combos")}</NavLink>
              <NavLink to={"/joggers"}>{t("Joggers")}</NavLink>
            </ul>
            <div className={navhomeStyle.input}>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder={t("Search")} />
            </div>
            <Languageoption onChange={(e) => handleClick(e)} />
            <div className={navhomeStyle.elements}>
              <div className={navhomeStyle.elem}>
                <MdFavoriteBorder />
              </div>
              <div className={navhomeStyle.elem}>
                <GoPerson />
              </div>
              <div className={navhomeStyle.elem}>
                <BiCart />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HomeNavbar;

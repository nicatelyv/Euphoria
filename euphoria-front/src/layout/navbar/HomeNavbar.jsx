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
import { FaMagnifyingGlass } from "react-icons/fa6";

function HomeNavbar() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const [menu, setMenu] = useState(false);

  return (
    <div className={navhomeStyle.border}>
      <nav className={navhomeStyle.nav}>
        <NavLink to={"/"}>
          <img src="/svg/logo.svg" alt="Logo" />
        </NavLink>
        <div className={navhomeStyle.menu} onClick={() => setMenu(!menu)}>
          {menu ? <CgMenuMotion /> : <RxHamburgerMenu />}
        </div>
        <div
          className={`${navhomeStyle.resp} ${menu ? navhomeStyle.show : ""}`}
        >
          <ul className={navhomeStyle.list}>
            <li>
              <NavLink to={"/shop"}>{t("Shop")}</NavLink>
            </li>
            <li>
              <NavLink to={"/women"}>{t("Women")}</NavLink>
            </li>
            <li>
              <NavLink to={"/men"}>{t("Men")}</NavLink>
            </li>
            <li>
              <NavLink to={"/combos"}>{t("Combos")}</NavLink>
            </li>
            <li>
              <NavLink to={"/joggers"}>{t("Joggers")}</NavLink>
            </li>
          </ul>
          <div className={navhomeStyle.input}>
            <FaMagnifyingGlass style={{ color: "gray" }} />
            <input type="text" placeholder={t("Search")} />
          </div>
          <Languageoption onChange={(e) => handleClick(e)} />
          <div className={navhomeStyle.elements}>
            <div className={navhomeStyle.elem}>
              <NavLink to={'/wishlist'}>
                <MdFavoriteBorder />
              </NavLink>
            </div>
            <div className={navhomeStyle.elem}>
              <NavLink to={'/auth/sign-in'}>
                <GoPerson />
              </NavLink>
            </div>
            <div className={navhomeStyle.elem}>
              <NavLink to={'/cart'}>
                <BiCart />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
